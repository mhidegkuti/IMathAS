(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"49f8":function(e,t,s){var n={"./en.json":"edd4"};function r(e){var t=a(e);return s(t)}function a(e){var t=n[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}r.keys=function(){return Object.keys(n)},r.resolve=a,e.exports=r,r.id="49f8"},"55db":function(e,t,s){"use strict";var n=s("7ba0"),r=s.n(n);r.a},"7ba0":function(e,t,s){},9225:function(e,t,s){"use strict";s("4917"),s("ac6a"),s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),r=s("a925"),a={en:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}}};function o(){var e=s("49f8"),t={};return e.keys().forEach(function(s){var n=s.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var r=n[1];t[r]=e(s)}}),t}n["a"].use(r["a"]);t["a"]=new r["a"]({locale:"en",fallbackLocale:"en",messages:o(),dateTimeFormats:a})},ad21:function(e,t,s){"use strict";var n=s("dd89"),r=s.n(n);r.a},ad76:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"menubutton",on:{keyup:function(t){return"keyCode"in t&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.toggleOpen(!0)},keydown:[function(t){return"keyCode"in t&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.handleUpDown(-1))},function(t){return"keyCode"in t&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.handleUpDown(1))},e.handleKeys],focusin:e.handleFocus,focusout:e.handleBlur}},[s("button",{ref:"button",class:{nobutton:!!e.nobutton},attrs:{id:e.id,tabindex:e.open?-1:0,"aria-haspopup":"true","aria-controls":e.id+"_wrap","aria-expanded":e.open?"true":"false"},on:{click:e.toggleOpen,keydown:function(t){return"keyCode"in t&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.toggleOpen(t))}}},[e.hasButton?e._e():e._t("default",null,{option:e.options[e.selected]}),e.hasButton?e._t("button"):e._e(),e.noarrow?e._e():s("icons",{staticClass:"mb_downarrow",attrs:{name:"downarrow",size:"micro"}})],2),e.open?s("ul",{class:{"menubutton-right":"right"==e.position},attrs:{role:"menu","aria-labelledby":e.id,"aria-activedescendant":e.id+"_"+e.curSelected,id:e.id+"_wrap",tabindex:"-1"}},[e.header?s("li",{staticClass:"menubutton-header"},[e._v("\n      "+e._s(e.header)+"\n    ")]):e._e(),e._l(e.options,function(t,n){return s("li",{key:n,class:{listsubitem:t.subitem},on:{click:function(t){return e.handleClick(n)}}},[s("component",e._b({class:{"menubutton-focus":n==e.curSelected},attrs:{id:e.id+"_"+n,role:"menuitem",tabindex:"-1"},on:{click:e.toggleOpen,mouseover:function(t){e.curSelected=n}},nativeOn:{click:function(t){return e.toggleOpen(t)},mouseover:function(t){e.curSelected=n}}},"component",e.getLinkProps(t,n),!1),[e.hasSlot?e._t("default",null,{option:t}):[e._v("\n          "+e._s(t.label)+"\n        ")]],2)],1)})],2):e._e()])},r=[],a=(s("4917"),s("6b54"),s("3b2b"),s("b54a"),s("f05b")),o={name:"MenuButton",model:{prop:"selected",event:"change"},props:["options","selected","id","header","nobutton","noarrow","position","searchby"],components:{Icons:a["a"]},data:function(){return{open:!1,curSelected:0,keybuffer:"",closetimer:null}},computed:{hasButton:function(){return!!this.$scopedSlots["button"]},hasSlot:function(){return!!this.$scopedSlots["default"]}},methods:{getLinkProps:function(e,t){return e.internallink?{is:"router-link",to:e.internallink}:e.link?{is:"a",href:e.link,target:"_blank"}:{is:"span"}},toggleOpen:function(e){var t=this;this.open="boolean"===typeof e?e:!this.open,this.open?(this.curSelected=this.selected?this.selected:0,this.$nextTick(this.setMenuHeight),this.$nextTick(this.scrollToCurrent),this.$nextTick(function(){document.getElementById(t.id+"_"+t.curSelected).focus()})):this.$nextTick(function(){document.getElementById(t.id).focus()})},setMenuHeight:function(){var e=document.getElementById(this.id+"_wrap"),t=e.clientHeight,s=e.getBoundingClientRect().top,n=window.innerHeight;e.style.height=s+t>n-30?n-s-30+"px":"auto"},scrollToCurrent:function(){var e=document.getElementById(this.id+"_"+this.curSelected),t=e.offsetTop,s=e.clientHeight,n=document.getElementById(this.id+"_wrap"),r=n.clientHeight,a=t-(r/2-s/2);n.scrollTop=a},handleClick:function(e){this.options[e].onclick&&this.options[e].onclick()},handleUpDown:function(e){var t=this;this.open?this.curSelected=(this.curSelected+e+this.options.length)%this.options.length:(this.toggleOpen(),1===e?this.curSelected=0:-1===e&&(this.curSelected=this.options.length-1)),this.$nextTick(function(){document.getElementById(t.id+"_"+t.curSelected).focus()})},processKeyBuffer:function(e){if(""!==this.keybuffer){var t=new RegExp("^"+this.keybuffer,"i");for(var s in this.options){var n=this.options[s][this.searchby].toString();if(n.match(t)){this.curSelected=s,this.$nextTick(this.scrollToCurrent);break}}}e&&(this.keybuffer="")},handleKeys:function(e){var t=this;if(this.open){var s=e.key.toLowerCase();"home"===s?this.curSelected=0:"end"===s?this.curSelected=this.options.length-1:this.searchby&&this.options[0].hasOwnProperty(this.searchby)&&(s>="0"&&s<="9"||s>="a"&&s<="z")&&(this.keybuffer+=s,this.processKeyBuffer(!1),setTimeout(function(){return t.processKeyBuffer(!0)},300))}},handleBlur:function(){var e=this;this.closetimer=setTimeout(function(){e.open=!1},50)},handleFocus:function(){clearTimeout(this.closetimer)}}},i=o,l=(s("ad21"),s("2877")),u=Object(l["a"])(i,n,r,!1,null,null,null);t["a"]=u.exports},dd89:function(e,t,s){},edd4:function(e){e.exports={nth:"| first | second | third | fourth | {n}th",seconds:"1 second | {n} seconds",minutes:"1 minute | {n} minutes",hours:"1 hour | {n} hours",close:"Close",loading:"Loading...",intro:"Intro / Instructions",next:"Next",previous:"Previous",question_n:"Question {n}",launch:{continue_assess:"Continue Assessment",retake_assess:"Retake Assessment",start_assess:"Start Assessment",timewarning:"This assessment has a time limit. Once you start the assessment, the timer will not pause for any reason.  Are you sure you are ready to start?",resetmsg:"Teachers: you can reset your attempts on this assessment if desired.",doreset:"Reset Assessment"},closed:{hidden:"This assessment is not currently available.",notyet:"This assessment is not yet available.  It will be available {sd} until {ed}.",pastdue:"This assessment was due {ed}.",needprereq:"You have not yet met the prerequisite requirements to work on this assessment.",no_attempts:"You have used all your attempts at this assessment.",latepassn:"You have one LatePass available. | You have {n} LatePass available.",latepass_needed:"You can redeem one LatePass to reopen this assessment until {date} | You can redeem {n} LatePasses to reopen this assessment until {date}",practice_no_latepass:"This assessment is now open for un-graded practice.",practice_w_latepass:"You can also open the assessment for un-graded practice.",will_block_latepass:"If you do so, you will not be able to later use a LatePass.",confirm:"Are you SURE you want to do this? If you do, you will not be able to later use a LatePass.",can_view_scored:"You can review your scored assessment.",view_scored:"View scored assessment",use_latepass:"Redeem LatePass | Redeem {n} LatePasses",do_practice:"Practice",unsubmitted_pastdue:"You have an unsubmitted assessment attempt.",unsubmitted_overtime:"You have an unsubmitted assessment attempt whose time limit has expired.",submit_now:"Submit it now",exit:"Exit",teacher_preview:"This assessment is closed to students, but you can preview it.",teacher_preview_button:"Preview Assessment"},setlist:{practice:"This assessment is in un-graded practice mode.",points_possible:"{pts} points possible.",due_at:"Due {date}.",originally_due:"Originally due {date}.",latepass_used:"You used one LatePass. | You used {n} LatePasses.",extension:"You were granted an extension.",penalty:"A penalty of {p}% will be applied.",take:"You can take this assessment one time. | You can take this assessment {n} times.",take_more:"You can take this assessment one more time. | You can take this assessment {n} more times.",attempt_inprogress:"You have an assessment attempt in progress.",cur_attempt_n_of:"You are working on attempt {n} of {nmax}.",keep_highest_q:"Best attempt on each question recorded as grade.",keep_highest:"Highest scored attempt recorded as grade.",keep_average:"Average score recorded as grade.",keep_last:"Last attempt recorded as grade.",retake_penalty:"A penalty of {p}% will be applied on the next retake.",time_expires:"Your current assessment time limit expires at {date}.",time_expired:"Your current assessment time limit expired at {date}.",timelimit:"Time limit: {time}.",timelimit_extend:"Extended from the original {time}."},group:{isgroup:"This is a group assessment.",teacher_auto:"This assessment allows students to select their own group members, up to {n}.",teacher_preset:"This assessment uses groups that the instructor must create in advance.",needpreset:"You are not yet a member of a group.  Contact your instructor to be added to a group.",members:"Group Members",max:"max {n}",remove:"Remove",add:"Add to group:",select:"Select...",addbutton:"Add"},password:{requires:"This assessment requires a password.",label:"Password: "},qinfo:{tryn:"Try {n} of {nmax}",regenn:"Version {n} of {nmax}",tries_remaining:"1 try on this question remaining | {n} tries on this question remaining",tries_remaining_range:"{min} to {max} tries remaining depending on the part - see Details",regens_remaining:"You can Try a Similar Question 1 more time | You can Try a Similar Question {n} more times"},question:{submit:"Submit Question",checkans:"Check Answer",saveans:"Save Answer",withdrawn:"This question was withdrawn by the instructor. You do not need to complete this question.",jump_to_answer:"Jump to Answer",jump_warn:"This will use up your remaining tries at this version of the question."},header:{score:"Score: {pts}/{poss}",practicescore:"Practice score: {pts}/{poss}",possible:"{poss} points possible",answered:"{n}/{tot} answered",assess_submit:"Submit Assessment",done:"Done",resources_header:"Resources",pts:"1 pt | {n} pts",details:"Details",warn_unattempted:"There appears to be unattempted questions. Are you sure you want to submit now?",withdrawn:"Question withdrawn",enable_mq:"Enable equation editor",disable_mq:"Disable equation editor"},text:{hide:"Hide text",show:"Show question text"},error:{error:"Error",invalid_password:"The password you entered was invalid",invalid_aid:"Invalid assessment ID",no_access:"You must be a student, teacher, or tutor to access this assessment",teacher_only:"You must be a teacher to access this feature",missing_param:"Missing required parameter on API call",not_avail:"The assessment is not currently available",not_ready:"The assessment is not ready for this action",timelimit_expired:"Timelimit has expired",out_of_regens:"No more Try a Similar Question remain",need_group:"Cannot start the assessment until you have been added to a group",out_of_attempts:"You have used all your assessment attempts",already_submitted:"Submission rejected. You have submitted this assessment elsewhere since it was displayed here, so the question(s) you were trying to submit may be out of date.",no_session:"Your login session expired. To continue you will need to log in again.",fast_regen:"Hey, how about slowing down and trying the problem before hitting Try a Similar Question?  Wait 5 seconds before trying again.",nochange:"Your answers have not changed since your last submission.",noserver:"The site is not responding",parseerror:"Server sent an invalid response"},scoreresult:{correct:"Correct",incorrect:"Incorrect",partial:"Partially correct",retry:"Retry this question",trysimilar:"Try a similar question",scorepts:"{pts} of {poss} pts | {pts} of {poss} pts",scorelast:"Score on last try:",submitted:"Question submitted.",see_details:"See Details for more.",manual_grade:"This question contains parts that must be graded by your instructor. They will show a score of 0 until they are graded."},summary:{no_total:"Your assessment has been submitted.",viewwork_immediately:"You can view your work and scores in the gradebook",viewwork_after_take:"You can view your work and scores in the gradebook",viewwork_after_due:"You can view your work and scores in the gradebook after the due date",viewwork_never:"",score:"Score",recordedscore:"Recorded Score",use_override:"Instructor grade override is recorded",scorepts:"{pts} of {poss} pt | {pts} of {poss} pts",retake_penalty:"{n}% retake penalty applied",late_penalty:"{n}% late work penalty applied",scorelist:"Score List",reshowquestions:"Review Questions"},scorelist:{question:"Question",score:"Score",pts:"{pts} of {poss} pt | {pts} of {poss} pts",unattempted:"Unattempted"},catlist:{category:"Category",score:"Score",pts:"{pts} of {poss} pt | {pts} of {poss} pts"},prev:{previous_attempts:"Previous Attempts",scored_attempts:"Scored Attempts",all_attempts:"All Attempts",date:"Date",score:"Score"},penalties:{applied:"Penalties applied",retry:"Retry penalty",regen:"Assessment retake penalty",trysimilar:"Try Similar Question penalty",late:"Late work penalty"},qdetails:{question_details:"Question Details",part:"Part",lasttry:"Results on last try:",score:"Score",try:"Tries Remaining",penalties:"Penalties",category:"Category",gbscore:"Recorded score",bestpractice:"Best practice score",lastscore:"Score on last try"},timer:{hrs:"hr | hrs",min:"min | mins"},helps:{message_instructor:"Message instructor",post_to_forum:"Post to forum",video:"Video",read:"Read",written_example:"Written Example"},unload:{unsubmitted_questions:"You have entered answered that have not yet been submitted. Are you sure you want to leave?",unsubmitted_assessment:"You have attempted every question, but have not submitted your assessment yet. Don't forget to come back and do that."},pages:{next:"Next Page"},print:{print_version:"Print Ready Version",print:"Print",hide_text:"Hide Intro and Between-Question Text",show_text:"Show Intro and Between-Question Text",hide_qs:"Hide Questions",show_qs:"Show Questions"},videocued:{continue:"Continue video to {title}",skipto:"Jump video to {title}"},livepoll:{settings:"LivePoll Settings",show_question_default:"Show question on this screen when first selected",show_results_live_default:"Show results as they come in on this screen",show_results_after:"Show results on this screen after question is closed",show_answers_after:"Show correct answers automatically after question is closed",use_timer:"Use question timer",seconds:"seconds",show_question:"Show question on this screen",show_results:"Show results",show_answers:"Show correct answers",stucnt:"No students | 1 student | {n} students",open_input:"Open student input",close_input:"Close student input",new_version:"Generate a similar question",waiting:"Waiting for the instructor to start a question"},lti:{userprefs:"User Preferences",msgs:"Messages | Messages (1 new) | Messages ({n} new)",use_latepass:"Redeem LatePass"},icons:{retake:"Reattempts",calendar:"Date",retry:"Retries",alert:"Alert",info:"Info",timer:"Timer",lock:"Lock","square-check":"Check",group:"Group",incorrect:"Incorrect",correct:"Correct",partial:"Partially correct",dot:"Dot",unattempted:"Unattempted",print:"Print",left:"Previous",right:"Next",downarrow:"Expand",file:"File",close:"Close",message:"Message",forum:"Forum",video:"Video",eqned:"Equation editor",eqnedoff:"Equation editor disabled",more:"More",clipboard:"Clipboard",rubric:"Rubric"},gradebook:{detail_title:"Review Assessment Attempts",started:"Started",lastchange:"Last Changed",time_onscreen:"Total time questions were on-screen",time_on_version:"Time spent on this version",due:"Due Date",originally_due:"Originally Due",make_exception:"Make Exception",edit_exception:"Edit Exception",attempt_n:"Attempt {n}",version_n:"Version {n}",scored_attempt:"Scored attempt",practice_attempt:"Practice attempt",submitted:"Submitted",scored:"scored",score:"Score",not_started:"Not started",not_submitted:"Not submitted",best_on_question:"Grade is calculated on the best version of each question",keep_best:"Grade is calculated on the best assessment attempt",keep_avg:"Grade is calculated on the average of all assessment attempts",keep_last:"Grade is calculated on the last assessment attempt",full_credit_parts:"Full credit all parts",full_credit:"Full credit",add_feedback:"Add feedback",feedback:"Feedback",general_feedback:"General feedback",use_in_msg:"Use in Message",clear_all:"Delete all attempts",clear_attempt:"Delete this attempt",clear_qwork:"Delete work on question",question_id:"Question ID",seed:"Seed",msg_owner:"Message owner to report problems",had_help:"Had help available",save:"Save Changes",return:"Return to Gradebook",gb_score:"Score in Gradebook",override:"Override score",overridden:"Overridden by teacher",view_as_stu:"View as student",print:"Print version",hide_perfect:"Hide full-credit questions",hide_correct:"Hide correct questions",hide_unans:"Hide unanswered questions",show_perfect:"Show full-credit questions",show_correct:"Show correct questions",show_unans:"Show unanswered questions",quick_grade:"Quick grade",saving:"Saving...",saved:"Saved",save_fail:"Error saving",clear_completely_msg:"Delete all student attempts, as if the student never started the assessment. If the student takes the assessment, they will get new versions of all questions.",clear_all_work_msg:"Delete all student work, but retain the most recent question versions.",clear_attempt_regen_msg:"Delete this assessment attempt completely. If the student retakes the assessment, they will get new versions of all questions.",clear_attempt_msg:"Delete work on this attempt. Student will be able to redo this attempt with the same question versions.",clear_qver_regen_msg:"Delete this question version entirely.",clear_qver_regen_msg2:"Delete student work on this question version, and generate a new version of the question.",clear_qver_msg:"Delete student work on this question version, but keep the version.",clear_warning:"WARNING: This action will delete student data and CAN NOT be undone.",unsaved_warn:"Warning: You have unsaved score or feedback changes. If you change versions now, your changes will be discarded.",unsubmitted:"This assessment attempt has not been submitted for grading.",show_tries:"Show all tries",all_tries:"All Tries",part_n:"Part {n}",try_n:"Try {n}",view_edit:"View/Edit Question",show_all_ans:"Show All Answers"}}},f05b:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("i",[s("svg",{staticClass:"svgicon",attrs:{xmlns:"http://www.w3.org/2000/svg",role:"img","aria-hidden":"true",viewBox:"0 0 24 24",width:e.iconwidth,height:e.iconwidth,fill:"none",stroke:e.stroke,"stroke-width":e.strokewidth,"stroke-linecap":"round","stroke-linejoin":"round"}},["retake"==e.name?[s("polyline",{attrs:{points:"17 1 21 5 17 9"}}),s("path",{attrs:{d:"M3 11V9a4 4 0 0 1 4-4h14"}}),s("polyline",{attrs:{points:"7 23 3 19 7 15"}}),s("path",{attrs:{d:"M21 13v2a4 4 0 0 1-4 4H3"}})]:"calendar"==e.name?[s("rect",{attrs:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}}),s("line",{attrs:{x1:"16",y1:"2",x2:"16",y2:"6"}}),s("line",{attrs:{x1:"8",y1:"2",x2:"8",y2:"6"}}),s("line",{attrs:{x1:"3",y1:"10",x2:"21",y2:"10"}})]:"retry"==e.name?[s("polyline",{attrs:{points:"1 4 1 10 7 10"}}),s("path",{attrs:{d:"M3.51 15a9 9 0 1 0 2.13-9.36L1 10"}})]:"alert"==e.name?[s("path",{attrs:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"}}),s("line",{attrs:{x1:"12",y1:"9",x2:"12",y2:"13"}}),s("line",{attrs:{x1:"12",y1:"17",x2:"12",y2:"17"}})]:"info"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("line",{attrs:{x1:"12",y1:"16",x2:"12",y2:"12"}}),s("line",{attrs:{x1:"12",y1:"8",x2:"12",y2:"8"}})]:"timer"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),s("polyline",{attrs:{points:"12 6 12 12 16 14"}})]:"lock"==e.name?[s("rect",{attrs:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}}),s("path",{attrs:{d:"M7 11V7a5 5 0 0 1 10 0v4"}})]:"square-check"==e.name?[s("polyline",{attrs:{points:"9 11 12 14 22 4"}}),s("path",{attrs:{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"}})]:"group"==e.name?[s("path",{attrs:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}}),s("circle",{attrs:{cx:"9",cy:"7",r:"4"}}),s("path",{attrs:{d:"M23 21v-2a4 4 0 0 0-3-3.87"}}),s("path",{attrs:{d:"M16 3.13a4 4 0 0 1 0 7.75"}})]:"incorrect"==e.name?[s("path",{attrs:{stroke:e.wrong,d:"M18 6 L6 18 M6 6 L18 18"}})]:"correct"==e.name?[s("polyline",{attrs:{stroke:e.correct,points:"20 6 9 17 4 12"}})]:"partial"==e.name?[s("path",{attrs:{stroke:e.partial,d:"M 5.3,10.6 9,14.2 18.5,4.6 21.4,7.4 9,19.8 2.7,13.5 z"}})]:"dot"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"8",fill:e.neutral}})]:"unattempted"==e.name?[s("circle",{attrs:{cx:"12",cy:"12",r:"8",fill:e.neutral}})]:"print"==e.name?[s("polyline",{attrs:{points:"6 9 6 2 18 2 18 9"}}),s("path",{attrs:{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}}),s("rect",{attrs:{x:"6",y:"14",width:"12",height:"8"}})]:"left"==e.name?[s("polyline",{attrs:{points:"15 18 9 12 15 6"}})]:"right"==e.name?[s("polyline",{attrs:{points:"9 18 15 12 9 6"}})]:"downarrow"==e.name?[s("polygon",{attrs:{fill:e.dark,"stroke-linecap":"square",points:"6 6 18 6 12 14"}})]:"file"==e.name?[s("path",{attrs:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}}),s("polyline",{attrs:{points:"14 2 14 8 20 8"}}),s("line",{attrs:{x1:"16",y1:"13",x2:"8",y2:"13"}}),s("line",{attrs:{x1:"16",y1:"17",x2:"8",y2:"17"}}),s("polyline",{attrs:{points:"10 9 9 9 8 9"}})]:"close"==e.name?[s("path",{attrs:{d:"M18 6 L6 18 M6 6 L18 18"}})]:"message"==e.name?[s("path",{attrs:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}}),s("polyline",{attrs:{points:"22,6 12,13 2,6"}})]:"forum"==e.name?[s("path",{attrs:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"}})]:"video"==e.name?[s("rect",{attrs:{x:"1",y:"4",width:"22",height:"16",rx:"2",ry:"2"}}),s("polygon",{attrs:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}})]:"eqned"==e.name?[s("polyline",{attrs:{points:"1 10 4 10 7 22 10 2 22 2"}}),s("rect",{attrs:{x:"14",y:"7",width:"6",height:"12",rx:"2",ry:"2"}})]:"eqnedoff"==e.name?[s("polyline",{attrs:{points:"1 10 4 10 7 22 10 2 22 2"}}),s("rect",{attrs:{x:"14",y:"7",width:"6",height:"12",rx:"2",ry:"2"}}),s("polyline",{attrs:{points:"0 2 24 22"}})]:"more"==e.name?[s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"12",r:"1"}}),s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"4",r:"1"}}),s("circle",{attrs:{fill:e.stroke,cx:"12",cy:"20",r:"1"}})]:"clipboard"==e.name?[s("path",{attrs:{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}}),s("rect",{attrs:{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"}}),s("path",{attrs:{d:"M 9 12 h 6 M 9 16 h6"}})]:e._e()],2),e.alttext.length>0?s("span",{staticClass:"sronly"},[e._v("\n    "+e._s(e.alttext)+"\n  ")]):e._e()])},r=[],a=(s("7f7f"),{name:"Icons",data:function(){return{id:null,dark:"#000",neutral:"#00a",wrong:"#900",correct:"#090",partial:"#fb0",warn:"#900"}},props:["name","size","color","alt"],computed:{alttext:function(){return this.alt?""===this.alt?"":this.$t(this.alt):this.$t("icons."+this.name)},stroke:function(){return this.color?this.hasOwnProperty(this.color)?this[this.color]:this.color:this.dark},iconwidth:function(){switch(this.size){case"micro":return 12;case"small":return 16;case"medium":return 20}return 16},strokewidth:function(){switch(this.size){case"micro":return 2.5;case"small":return 2;case"medium":return 2}return 2}}}),o=a,i=(s("55db"),s("2877")),l=Object(i["a"])(o,n,r,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-common.js.map