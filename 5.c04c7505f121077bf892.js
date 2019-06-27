(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6Djr":function(e,t){e.exports='<header id="header" class="animated fadeInDown">\n\n  <div id="logo-group">\n    <span id="logo"> <img src="assets/img/logo.png" alt="SmartAdmin"> </span>\n  </div>\n\n  <span id="extr-page-header-space">\n        <span class="hidden-mobile hiddex-xs">Already registered?</span> <a routerLink="/auth/login" class="btn btn-danger">Sign In</a> </span>\n\n</header>\n<div id="main" role="main" class="animated fadeInDown">\n\n  \x3c!-- MAIN CONTENT --\x3e\n  <div id="content" class="container">\n\n    <div class="row">\n      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm">\n        <h1 class="txt-color-red login-header-big">SmartAdmin</h1>\n        <div class="hero">\n\n          <div class="pull-left login-desc-box-l">\n            <h4 class="paragraph-header">It\'s Okay to be Smart. Experience the simplicity of SmartAdmin, everywhere you go!</h4>\n            <div class="login-app-icons">\n              <a routerLink="/dashboard/analytics" class="btn btn-danger btn-sm">Frontend Template</a>\n              <a routerLink="/smartadmin/app-layouts" class="btn btn-danger btn-sm">Find out more</a>\n            </div>\n          </div>\n\n          <img src="assets/img/demo/iphoneview.png" alt="" class="pull-right display-image" style="width:210px">\n\n        </div>\n\n        <div class="row">\n          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <h5 class="about-heading">About SmartAdmin - Are you up to date?</h5>\n            <p>\n              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.\n            </p>\n          </div>\n          <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">\n            <h5 class="about-heading">Not just your average template!</h5>\n            <p>\n              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi voluptatem accusantium!\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">\n        <div class="well no-padding">\n\n          <form id="smart-form-register" class="smart-form client-form">\n            <header>\n              Registration is FREE*\n            </header>\n\n            <fieldset>\n              <section>\n                <label class="input"> <i class="icon-append fa fa-user"></i>\n                  <input type="text" name="username" placeholder="Username">\n                  <b class="tooltip tooltip-bottom-right">Needed to enter the website</b> </label>\n              </section>\n\n              <section>\n                <label class="input"> <i class="icon-append fa fa-envelope"></i>\n                  <input type="email" name="email" placeholder="Email address">\n                  <b class="tooltip tooltip-bottom-right">Needed to verify your account</b> </label>\n              </section>\n\n              <section>\n                <label class="input"> <i class="icon-append fa fa-lock"></i>\n                  <input type="password" name="password" placeholder="Password" id="password">\n                  <b class="tooltip tooltip-bottom-right">Don\'t forget your password</b> </label>\n              </section>\n\n              <section>\n                <label class="input"> <i class="icon-append fa fa-lock"></i>\n                  <input type="password" name="passwordConfirm" placeholder="Confirm password">\n                  <b class="tooltip tooltip-bottom-right">Don\'t forget your password</b> </label>\n              </section>\n            </fieldset>\n\n            <fieldset>\n              <div class="row">\n                <section class="col col-6">\n                  <label class="input">\n                    <input type="text" name="firstname" placeholder="First name">\n                  </label>\n                </section>\n                <section class="col col-6">\n                  <label class="input">\n                    <input type="text" name="lastname" placeholder="Last name">\n                  </label>\n                </section>\n              </div>\n\n              <div class="row">\n                <section class="col col-6">\n                  <label class="select">\n                    <select name="gender">\n                      <option value="0" selected disabled>Gender</option>\n                      <option value="1">Male</option>\n                      <option value="2">Female</option>\n                      <option value="3">Prefer not to answer</option>\n                    </select> <i></i> </label>\n                </section>\n                <section class="col col-6">\n                  <label class="input"> <i class="icon-append fa fa-calendar"></i>\n                    <input type="text" name="request" placeholder="Request activation on" class="datepicker" data-dateformat="dd/mm/yy">\n                  </label>\n                </section>\n              </div>\n\n              <section>\n                <label class="checkbox">\n                  <input type="checkbox" name="subscription" id="subscription">\n                  <i></i>I want to receive news and special offers</label>\n                <label class="checkbox">\n                  <input type="checkbox" name="terms" id="terms" [(ngModel)]="termsAgreed">\n                  <i></i>I agree with the <a href="#" (click)="openModal($event, termsModal)"> Terms and Conditions </a></label>\n              </section>\n            </fieldset>\n            <footer>\n              <button (click)="register($event)" class="btn btn-primary">\n                Register\n              </button>\n            </footer>\n\n            <div class="message">\n              <i class="fa fa-check"></i>\n              <p>\n                Thank you for your registration!\n              </p>\n            </div>\n          </form>\n\n        </div>\n        <p class="note text-center">*FREE Registration ends on October 2015.</p>\n        <h5 class="text-center">- Or sign in using -</h5>\n        <ul class="list-inline text-center">\n          <li>\n            <a (click)="(null)" class="btn btn-primary btn-circle"><i class="fa fa-facebook"></i></a>\n          </li>\n          <li>\n            <a (click)="(null)" class="btn btn-info btn-circle"><i class="fa fa-twitter"></i></a>\n          </li>\n          <li>\n            <a (click)="(null)" class="btn btn-warning btn-circle"><i class="fa fa-linkedin"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\x3c!-- <ng-container  *ngComponentOutlet="TermsModalComponent"></ng-container> --\x3e\n\n<ng-template #termsModal>\n  <smart-terms-modal (agree)="onTermsAgree()" (close)="onTermsClose()"></smart-terms-modal>\n\n</ng-template>\n'},YPG5:function(e,t){e.exports='<div class="modal-header">\n  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n    &times;\n  </button>\n  <h4 class="modal-title" id="myModalLabel">Terms & Conditions</h4>\n</div>\n<div class="modal-body custom-scroll terms-body">\n\n  <div id="left">\n\n\n\n    <h1>SMARTADMIN TERMS & CONDITIONS TEMPLATE</h1>\n\n\n\n    <h2>Introduction</h2>\n\n    <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.</p>\n\n    <p>[You must be at least [18] years of age to use this website. By using this website [and by agreeing to these terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>\n\n\n    <h2>License to use website</h2>\n    <p>Unless otherwise stated, [NAME] and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>\n\n    <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>\n\n    <p>You must not:</p>\n    <ul>\n      <li>republish material from this website (including republication on another website);</li>\n      <li>sell, rent or sub-license material from the website;</li>\n      <li>show any material from the website in public;</li>\n      <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>\n      <li>[edit or otherwise modify any material on the website; or]</li>\n      <li>[redistribute material from this website [except for content specifically and expressly made available for redistribution].]</li>\n    </ul>\n    <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your organisation].]</p>\n\n    <h2>Acceptable use</h2>\n\n    <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any\n      unlawful, illegal, fraudulent or harmful purpose or activity.</p>\n\n    <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer\n      software.</p>\n\n    <p>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without [NAME\'S] express written consent.</p>\n\n    <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>\n\n    <p>[You must not use this website for any purposes related to marketing without [NAME\'S] express written consent.]</p>\n\n    <h2>[Restricted access</h2>\n\n    <p>[Access to certain areas of this website is restricted.] [NAME] reserves the right to restrict access to [other] areas of this website, or indeed this entire website, at [NAME\'S] discretion.</p>\n\n    <p>If [NAME] provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</p>\n\n    <p>[[NAME] may disable your user ID and password in [NAME\'S] sole discretion without notice or explanation.]</p>\n\n    <h2>[User content</h2>\n\n    <p>In these terms and conditions, \u201cyour user content\u201d means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.</p>\n\n    <p>You grant to [NAME] a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media. You also grant to [NAME] the right to sub-license these\n      rights, and the right to bring an action for infringement of these rights.</p>\n\n    <p>Your user content must not be illegal or unlawful, must not infringe any third party\'s legal rights, and must not be capable of giving rise to legal action whether against you or [NAME] or a third party (in each case under any applicable law).</p>\n\n    <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.</p>\n\n    <p>[NAME] reserves the right to edit or remove any material submitted to this website, or stored on [NAME\'S] servers, or hosted or published upon this website.</p>\n\n    <p>[Notwithstanding [NAME\'S] rights under these terms and conditions in relation to user content, [NAME] does not undertake to monitor the submission of such content to, or the publication of such content on, this website.]</p>\n\n    <h2>No warranties</h2>\n\n    <p>This website is provided \u201cas is\u201d without any representations or warranties, express or implied. [NAME] makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>\n\n    <p>Without prejudice to the generality of the foregoing paragraph, [NAME] does not warrant that:</p>\n    <ul>\n      <li>this website will be constantly available, or available at all; or</li>\n      <li>the information on this website is complete, true, accurate or non-misleading.</li>\n    </ul>\n    <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind. [If you require advice in relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>\n\n    <h2>Limitations of liability</h2>\n\n    <p>[NAME] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>\n    <ul>\n      <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>\n      <li>for any indirect, special or consequential loss; or</li>\n      <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>\n    </ul>\n    <p>These limitations of liability apply even if [NAME] has been expressly advised of the potential loss.</p>\n\n    <h2>Exceptions</h2>\n\n    <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit [NAME\'S] liability in respect of any:</p>\n    <ul>\n      <li>death or personal injury caused by [NAME\'S] negligence;</li>\n      <li>fraud or fraudulent misrepresentation on the part of [NAME]; or</li>\n      <li>matter which it would be illegal or unlawful for [NAME] to exclude or limit, or to attempt or purport to exclude or limit, its liability.</li>\n    </ul>\n    <h2>Reasonableness</h2>\n\n    <p>By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.</p>\n\n    <p>If you do not think they are reasonable, you must not use this website.</p>\n\n    <h2>Other parties</h2>\n\n    <p>[You accept that, as a limited liability entity, [NAME] has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against [NAME\'S] officers or employees in respect of any\n      losses you suffer in connection with the website.]</p>\n\n    <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set out in this website disclaimer will protect [NAME\'S] officers, employees, agents, subsidiaries, successors, assigns and sub-contractors\n      as well as [NAME].</p>\n\n    <h2>Unenforceable provisions</h2>\n\n    <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.</p>\n\n    <h2>Indemnity</h2>\n\n    <p>You hereby indemnify [NAME] and undertake to keep [NAME] indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by [NAME] to a third party in settlement of a claim\n      or dispute on the advice of [NAME\'S] legal advisers) incurred or suffered by [NAME] arising out of any breach by you of any provision of these terms and conditions[, or arising out of any claim that you have breached any provision of these terms\n      and conditions].</p>\n\n    <h2>Breaches of these terms and conditions</h2>\n\n    <p>Without prejudice to [NAME\'S] other rights under these terms and conditions, if you breach these terms and conditions in any way, [NAME] may take such action as [NAME] deems appropriate to deal with the breach, including suspending your access to\n      the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings\n      against you.</p>\n\n    <h2>Variation</h2>\n\n    <p>[NAME] may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly\n      to ensure you are familiar with the current version.</p>\n\n    <h2>Assignment</h2>\n\n    <p>[NAME] may transfer, sub-contract or otherwise deal with [NAME\'S] rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.</p>\n\n    <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.</p>\n\n    <h2>Severability</h2>\n\n    <p>If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful\n      or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>\n\n    <h2>Entire agreement</h2>\n\n    <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and [NAME] in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p>\n\n    <h2>Law and jurisdiction</h2>\n\n    <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of [JURISDICTION].</p>\n\n    <h2>About these website terms and conditions</h2>\n    <p>We created these website terms and conditions with the help of a free website terms and conditions form developed by Contractology and available at\n      <a href="http://www.SmartAdmin.com">www.SmartAdmin.com</a>. Contractology supply a wide variety of commercial legal documents, such as\n      <a href="#">template data protection statements</a>.\n    </p>\n    <h2>[Registrations and authorisations</h2>\n\n    <p>[[NAME] is registered with [TRADE REGISTER]. You can find the online version of the register at [URL]. [NAME\'S] registration number is [NUMBER].]</p>\n\n    <p>[[NAME] is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>\n\n    <p>[[NAME] is registered with [PROFESSIONAL BODY]. [NAME\'S] professional title is [TITLE] and it has been granted in [JURISDICTION]. [NAME] is subject to the [RULES] which can be found at [URL].]</p>\n\n    <p>[[NAME] subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT]. [These codes/this code] can be consulted electronically at [URL(S)].</p>\n\n    <p>[[NAME\'S] [TAX] number is [NUMBER].]]</p>\n\n    <h2>[NAME\'S] details</h2>\n\n    <p>The full name of [NAME] is [FULL NAME].</p>\n\n    <p>[[NAME] is registered in [JURISDICTION] under registration number [NUMBER].]</p>\n\n    <p>[NAME\'S] [registered] address is [ADDRESS].</p>\n\n    <p>You can contact [NAME] by email to [EMAIL].</p>\n\n\n\n  </div>\n\n  <br>\n  <br>\n\n  <p><strong>By using this  WEBSITE TERMS AND CONDITIONS template document, you agree to the\n          <a href="#">terms and conditions</a> set out on\n          <a href="#">SmartAdmin.com</a>.  You must retain the credit\n          set out in the section headed "ABOUT THESE WEBSITE TERMS AND CONDITIONS".  Subject to the licensing restrictions, you should\n          edit the document, adapting it to the requirements of your jurisdiction, your business and your\n          website.  If you are not a lawyer, we recommend that you take professional legal advice in relation to the editing and\n          use of the template.</strong></p>\n\n\n</div>\n<div class="modal-footer">\n  <button type="button" class="btn btn-default" (click)="close.emit(true)">\n    Cancel\n  </button>\n  <button type="button" class="btn btn-primary" id="i-agree" (click)="agree.emit(true)">\n    <i class="fa fa-check"></i> I Agree\n  </button>\n\n  <button type="button" class="btn btn-danger pull-left" id="print">\n    <i class="fa fa-print"></i> Print\n  </button>\n</div>'},lJwD:function(e,t,n){"use strict";n.r(t);var i=n("CcnG"),o=n("Ip0R"),s=n("ZYCi"),a=n("H5ub"),r=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e,t){this.router=e,this.modalService=t,this.termsAgreed=!1}return e.prototype.ngOnInit=function(){},e.prototype.register=function(e){e.preventDefault(),this.router.navigate(["/dashboard"])},e.prototype.openModal=function(e,t){e.preventDefault(),this.bsModalRef=this.modalService.show(t)},e.prototype.onTermsAgree=function(){this.termsAgreed=!0,this.bsModalRef.hide()},e.prototype.onTermsClose=function(){this.bsModalRef.hide()},e=r([Object(i.Component)({selector:"app-register",template:n("6Djr"),styles:[]}),l("design:paramtypes",[s.c,a.a])],e)}(),d=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},u=[{path:"",component:c}],p=function(){function e(){}return e=d([Object(i.NgModule)({imports:[s.d.forChild(u)],exports:[s.d],providers:[]})],e)}(),h=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},m=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(){this.agree=new i.EventEmitter,this.close=new i.EventEmitter}return h([Object(i.Output)(),m("design:type",Object)],e.prototype,"agree",void 0),h([Object(i.Output)(),m("design:type",Object)],e.prototype,"close",void 0),e=h([Object(i.Component)({selector:"smart-terms-modal",template:n("YPG5")}),m("design:paramtypes",[])],e)}(),f=n("gIcY");n.d(t,"RegisterModule",function(){return g});var y=function(e,t,n,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(o=e[r])&&(a=(s<3?o(a):s>3?o(t,n,a):o(t,n))||a);return s>3&&a&&Object.defineProperty(t,n,a),a},g=function(){function e(){}return e=y([Object(i.NgModule)({imports:[o.CommonModule,p,f.c],exports:[],declarations:[c,b]})],e)}()}}]);