(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{X55K:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},i=u("pMnS"),a=u("Ip0R"),o=u("ndxW"),c=function(){function l(l,n){this.stateService=l,this.router=n}return l.prototype.ngOnInit=function(){this.finalResult=this.stateService.getFinalResult(),this.timeTaken=this.stateService.getTimeTaken()},l.prototype.playAgain=function(){this.router.navigate(["/home"])},l}(),s=u("ZYCi"),r=t.rb({encapsulation:0,styles:[[".resultPage[_ngcontent-%COMP%]{height:85vh;background:#4b6cb7;background:linear-gradient(to top,#4b6cb7,#182848);color:#fff}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:30px;align-items:center;text-align:center}button[_ngcontent-%COMP%]{background-color:green;color:#fff;width:50%}"]],data:{}});function b(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Success ! Congratulations on Finding Falcone. King Shan is mighty pleased."])),(l()(),t.tb(3,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Ib(4,null,["Time Taken: ",""])),(l()(),t.tb(5,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),t.Ib(6,null,["Planet Found: ",""])),(l()(),t.tb(7,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.playAgain()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Click to play again"]))],null,function(l,n){var u=n.component;l(n,4,0,u.timeTaken),l(n,6,0,u.finalResult.planet_name)})}function f(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Failed on your mission. King Shan is not pleased."])),(l()(),t.tb(3,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.playAgain()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Click to play again"]))],null,null)}function g(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,b)),t.sb(2,16384,null,0,a.j,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(l()(),t.kb(16777216,null,null,1,null,f)),t.sb(4,16384,null,0,a.j,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,2,0,"success"===u.finalResult.status),l(n,4,0,"false"===u.finalResult.status)},null)}function p(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Oops! Result is not available"])),(l()(),t.tb(2,0,null,null,1,"button",[["class","btn"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.playAgain()&&t),t},null,null)),(l()(),t.Ib(-1,null,["Click to play again"]))],null,null)}function k(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,5,"div",[["class","resultPage"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.tb(2,0,null,null,0,"img",[["src","assets/fflogo.png"],["width","250"]],null,null,null,null,null)),(l()(),t.kb(16777216,null,null,1,null,g)),t.sb(4,16384,null,0,a.j,[t.S,t.P],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.kb(0,[["resultNotAvailable",2]],null,0,null,p))],function(l,n){l(n,4,0,n.component.finalResult,t.Db(n,5))},null)}var d=t.pb("app-result-page",c,function(l){return t.Jb(0,[(l()(),t.tb(0,0,null,null,1,"app-result-page",[],null,null,null,k,r)),t.sb(1,114688,null,0,c,[o.a,s.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);u.d(n,"ResultPageModuleNgFactory",function(){return h});var h=t.qb(e,[],function(l){return t.Ab([t.Bb(512,t.k,t.fb,[[8,[i.a,d]],[3,t.k],t.z]),t.Bb(4608,a.l,a.k,[t.w,[2,a.v]]),t.Bb(1073742336,a.b,a.b,[]),t.Bb(1073742336,s.l,s.l,[[2,s.r],[2,s.k]]),t.Bb(1073742336,e,e,[]),t.Bb(1024,s.i,function(){return[[{path:"",component:c}]]},[])])})}}]);