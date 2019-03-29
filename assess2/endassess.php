<?php
/*
 * IMathAS: Assessment after-the-fact submission endpoint
 * (c) 2019 David Lippman
 *
 * Calling this allows submitting a past-due or past-timelimit
 * assessment attempt.
 *
 * Method: POST
 * Query string parameters:
 *  aid   Assessment ID
 *  cid   Course ID
 *  uid   Optional. Only allowed for teachers, to load student's assessment
 *
 * Returns: partial assessInfo object, mainly has_active_attempt
 */

$init_skip_csrfp = true; // TODO: get CSRFP to work
require_once("../init.php");
require_once("./common_start.php");
require_once("./AssessInfo.php");
require_once("./AssessRecord.php");
require_once('./AssessUtils.php');

header('Content-Type: application/json; charset=utf-8');

check_for_required('GET', array('aid', 'cid'));
$cid = Sanitize::onlyInt($_GET['cid']);
$aid = Sanitize::onlyInt($_GET['aid']);
if ($isteacher && isset($_GET['uid'])) {
  $uid = Sanitize::onlyInt($_GET['uid']);
} else {
  $uid = $userid;
}

$now = time();

// load settings
$assess_info = new AssessInfo($DBH, $aid, $cid, false);
$assess_info->loadException($uid, $isstudent, $studentinfo['latepasses'] , $latepasshrs, $courseenddate);
if ($isstudent) {
  $assess_info->applyTimelimitMultiplier($studentinfo['timelimitmult']);
}

// load user's assessment record - always operating on scored attempt here
$assess_record = new AssessRecord($DBH, $assess_info, false);
$assess_record->loadRecord($uid);

// if have active scored record end it
if ($assess_record->hasActiveAttempt()) {

  $assess_record->setStatus(false, true);
  $assess_record->saveRecord();
} else {
  echo '{"error": "no_active_attempt"}';
  exit;
}

// grab any assessment info fields that may have updated:
// has_active_attempt, timelimit_expires,
// prev_attempts (if we just closed out a version?)
// and those not yet loaded:
// help_features, intro, resources, video_id, category_urls
$include_from_assess_info = array(
  'available', 'startdate', 'enddate', 'original_enddate', 'submitby',
  'extended_with', 'allowed_attempts', 'latepasses_avail', 'latepass_extendto',
  'showscores', 'timelimit', 'points_possible'
);
$assessInfoOut = $assess_info->extractSettings($include_from_assess_info);
//get attempt info
$assessInfoOut['has_active_attempt'] = $assess_record->hasActiveAttempt();

// grab all questions settings and scores, based on end-of-assessment settings
$assess_info->loadQuestionSettings('all', false);
$showscores = $assess_info->showScoresAtEnd();
$reshowQs = $assess_info->reshowQuestionsAtEnd();
$assessInfoOut['questions'] = $assess_record->getAllQuestionObjects($showscores, true, $reshowQs, 'scored');
$assessInfoOut['score'] = $assess_record->getAttemptScore();
$totalScore = $assessInfoOut['score'];
$assessInfoOut['has_active_attempt'] = false;

//get prev attempt info
if ($assessInfoOut['submitby'] == 'by_assessment') {
  $showPrevAttemptScores = ($assessInfoOut['showscores'] != 'none');
  $assessInfoOut['prev_attempts'] = $assess_record->getSubmittedAttempts($showPrevAttemptScores);
  if ($showPrevAttemptScores) {
    $assessInfoOut['scored_attempt'] = $assess_record->getScoredAttempt();
  }
}

if ($assessInfoOut['submitby'] == 'by_question') {
  $assessInfoOut['can_retake'] = false;
} else {
  $assessInfoOut['can_retake'] = (count($assessInfoOut['prev_attempts']) < $assessInfoOut['allowed_attempts']);
}

// get endmsg
if ($assessInfoOut['showscores'] != 'none') {
  $assessInfoOut['endmsg'] = AssessUtils::getEndMsg(
    $assess_info->getSetting('endmsg'),
    $totalScore,
    $assess_info->getSetting('points_possible')
  );
}

//output JSON object
echo json_encode($assessInfoOut);