"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[1997],{1997:(E,f,p)=>{p.d(f,{D:()=>F,U:()=>Z});var t=p(1571),r=p(6895),g=p(433),c=p(2210),P=p(1795),_=p(805),d=p(5047);function m(n,s){1&n&&t.GkF(0)}const u=function(n){return{$implicit:n}};function w(n,s){if(1&n&&(t.TgZ(0,"div",15),t.YNc(1,m,1,0,"ng-container",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.templateLeft)("ngTemplateOutletContext",t.VKq(2,u,e.paginatorState))}}function T(n,s){if(1&n&&(t.TgZ(0,"span",17),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.currentPageReport)}}const l=function(n){return{"p-disabled":n}};function x(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",18),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.changePageToFirst(o))}),t._UZ(1,"span",19),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.isFirstPage()||e.empty())("ngClass",t.VKq(2,l,e.isFirstPage()||e.empty()))}}const C=function(n){return{"p-highlight":n}};function v(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",22),t.NdJ("click",function(o){const h=t.CHM(e).$implicit,A=t.oxw(3);return t.KtG(A.onPageLinkClick(o,h-1))}),t._uU(1),t.qZA()}if(2&n){const e=s.$implicit,i=t.oxw(3);t.Q6J("ngClass",t.VKq(2,C,e-1==i.getPage())),t.xp6(1),t.hij(" ",e," ")}}function k(n,s){if(1&n&&(t.TgZ(0,"span",20),t.YNc(1,v,2,4,"button",21),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.pageLinks)}}function b(n,s){if(1&n&&t._uU(0),2&n){const e=t.oxw(3);t.Oqu(e.currentPageReport)}}function M(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"p-dropdown",23),t.NdJ("onChange",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onPageDropdownChange(o))}),t.YNc(1,b,1,1,"ng-template",24),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("options",e.pageItems)("ngModel",e.getPage())("disabled",e.empty())("appendTo",e.dropdownAppendTo)("scrollHeight",e.dropdownScrollHeight)}}function L(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"button",25),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.changePageToLast(o))}),t._UZ(1,"span",26),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("disabled",e.isLastPage()||e.empty())("ngClass",t.VKq(2,l,e.isLastPage()||e.empty()))}}function y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"p-inputNumber",27),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.changePage(o-1))}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("ngModel",e.currentPage())("disabled",e.empty())}}function I(n,s){1&n&&t.GkF(0)}function R(n,s){if(1&n&&t.YNc(0,I,1,0,"ng-container",16),2&n){const e=s.$implicit,i=t.oxw(4);t.Q6J("ngTemplateOutlet",i.dropdownItemTemplate)("ngTemplateOutletContext",t.VKq(2,u,e))}}function J(n,s){1&n&&(t.ynx(0),t.YNc(1,R,1,4,"ng-template",30),t.BQk())}function O(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"p-dropdown",28),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.rows=o)})("onChange",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onRppChange(o))}),t.YNc(1,J,2,0,"ng-container",29),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("options",e.rowsPerPageItems)("ngModel",e.rows)("disabled",e.empty())("appendTo",e.dropdownAppendTo)("scrollHeight",e.dropdownScrollHeight),t.xp6(1),t.Q6J("ngIf",e.dropdownItemTemplate)}}function S(n,s){1&n&&t.GkF(0)}function D(n,s){if(1&n&&(t.TgZ(0,"div",31),t.YNc(1,S,1,0,"ng-container",16),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",e.templateRight)("ngTemplateOutletContext",t.VKq(2,u,e.paginatorState))}}function N(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",1),t.YNc(1,w,2,4,"div",2),t.YNc(2,T,2,1,"span",3),t.YNc(3,x,2,4,"button",4),t.TgZ(4,"button",5),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.changePageToPrev(o))}),t._UZ(5,"span",6),t.qZA(),t.YNc(6,k,2,1,"span",7),t.YNc(7,M,2,5,"p-dropdown",8),t.TgZ(8,"button",9),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.changePageToNext(o))}),t._UZ(9,"span",10),t.qZA(),t.YNc(10,L,2,4,"button",11),t.YNc(11,y,1,2,"p-inputNumber",12),t.YNc(12,O,2,6,"p-dropdown",13),t.YNc(13,D,2,4,"div",14),t.qZA()}if(2&n){const e=t.oxw();t.Tol(e.styleClass),t.Q6J("ngStyle",e.style)("ngClass","p-paginator p-component"),t.xp6(1),t.Q6J("ngIf",e.templateLeft),t.xp6(1),t.Q6J("ngIf",e.showCurrentPageReport),t.xp6(1),t.Q6J("ngIf",e.showFirstLastIcon),t.xp6(1),t.Q6J("disabled",e.isFirstPage()||e.empty())("ngClass",t.VKq(17,l,e.isFirstPage()||e.empty())),t.xp6(2),t.Q6J("ngIf",e.showPageLinks),t.xp6(1),t.Q6J("ngIf",e.showJumpToPageDropdown),t.xp6(1),t.Q6J("disabled",e.isLastPage()||e.empty())("ngClass",t.VKq(19,l,e.isLastPage()||e.empty())),t.xp6(2),t.Q6J("ngIf",e.showFirstLastIcon),t.xp6(1),t.Q6J("ngIf",e.showJumpToPageInput),t.xp6(1),t.Q6J("ngIf",e.rowsPerPageOptions),t.xp6(1),t.Q6J("ngIf",e.templateRight)}}let F=(()=>{class n{constructor(e){this.cd=e,this.pageLinkSize=5,this.onPageChange=new t.vpe,this.alwaysShow=!0,this.dropdownScrollHeight="200px",this.currentPageReportTemplate="{currentPage} of {totalPages}",this.showFirstLastIcon=!0,this.totalRecords=0,this.rows=0,this.showPageLinks=!0,this._first=0,this._page=0}ngOnInit(){this.updatePaginatorState()}ngOnChanges(e){e.totalRecords&&(this.updatePageLinks(),this.updatePaginatorState(),this.updateFirst(),this.updateRowsPerPageOptions()),e.first&&(this._first=e.first.currentValue,this.updatePageLinks(),this.updatePaginatorState()),e.rows&&(this.updatePageLinks(),this.updatePaginatorState()),e.rowsPerPageOptions&&this.updateRowsPerPageOptions()}get first(){return this._first}set first(e){this._first=e}updateRowsPerPageOptions(){if(this.rowsPerPageOptions){this.rowsPerPageItems=[];for(let e of this.rowsPerPageOptions)"object"==typeof e&&e.showAll?this.rowsPerPageItems.unshift({label:e.showAll,value:this.totalRecords}):this.rowsPerPageItems.push({label:String(e),value:e})}}isFirstPage(){return 0===this.getPage()}isLastPage(){return this.getPage()===this.getPageCount()-1}getPageCount(){return Math.ceil(this.totalRecords/this.rows)}calculatePageLinkBoundaries(){let e=this.getPageCount(),i=Math.min(this.pageLinkSize,e),o=Math.max(0,Math.ceil(this.getPage()-i/2)),a=Math.min(e-1,o+i-1);return o=Math.max(0,o-(this.pageLinkSize-(a-o+1))),[o,a]}updatePageLinks(){this.pageLinks=[];let e=this.calculatePageLinkBoundaries(),o=e[1];for(let a=e[0];a<=o;a++)this.pageLinks.push(a+1);if(this.showJumpToPageDropdown){this.pageItems=[];for(let a=0;a<this.getPageCount();a++)this.pageItems.push({label:String(a+1),value:a})}}changePage(e){var i=this.getPageCount();if(e>=0&&e<i){this._first=this.rows*e;var o={page:e,first:this.first,rows:this.rows,pageCount:i};this.updatePageLinks(),this.onPageChange.emit(o),this.updatePaginatorState()}}updateFirst(){const e=this.getPage();e>0&&this.totalRecords&&this.first>=this.totalRecords&&Promise.resolve(null).then(()=>this.changePage(e-1))}getPage(){return Math.floor(this.first/this.rows)}changePageToFirst(e){this.isFirstPage()||this.changePage(0),e.preventDefault()}changePageToPrev(e){this.changePage(this.getPage()-1),e.preventDefault()}changePageToNext(e){this.changePage(this.getPage()+1),e.preventDefault()}changePageToLast(e){this.isLastPage()||this.changePage(this.getPageCount()-1),e.preventDefault()}onPageLinkClick(e,i){this.changePage(i),e.preventDefault()}onRppChange(e){this.changePage(this.getPage())}onPageDropdownChange(e){this.changePage(e.value)}updatePaginatorState(){this.paginatorState={page:this.getPage(),pageCount:this.getPageCount(),rows:this.rows,first:this.first,totalRecords:this.totalRecords}}empty(){return 0===this.getPageCount()}currentPage(){return this.getPageCount()>0?this.getPage()+1:0}get currentPageReport(){return this.currentPageReportTemplate.replace("{currentPage}",String(this.currentPage())).replace("{totalPages}",String(this.getPageCount())).replace("{first}",String(this.totalRecords>0?this._first+1:0)).replace("{last}",String(Math.min(this._first+this.rows,this.totalRecords))).replace("{rows}",String(this.rows)).replace("{totalRecords}",String(this.totalRecords))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["p-paginator"]],hostAttrs:[1,"p-element"],inputs:{pageLinkSize:"pageLinkSize",style:"style",styleClass:"styleClass",alwaysShow:"alwaysShow",templateLeft:"templateLeft",templateRight:"templateRight",dropdownAppendTo:"dropdownAppendTo",dropdownScrollHeight:"dropdownScrollHeight",currentPageReportTemplate:"currentPageReportTemplate",showCurrentPageReport:"showCurrentPageReport",showFirstLastIcon:"showFirstLastIcon",totalRecords:"totalRecords",rows:"rows",rowsPerPageOptions:"rowsPerPageOptions",showJumpToPageDropdown:"showJumpToPageDropdown",showJumpToPageInput:"showJumpToPageInput",showPageLinks:"showPageLinks",dropdownItemTemplate:"dropdownItemTemplate",first:"first"},outputs:{onPageChange:"onPageChange"},features:[t.TTD],decls:1,vars:1,consts:[[3,"class","ngStyle","ngClass",4,"ngIf"],[3,"ngStyle","ngClass"],["class","p-paginator-left-content",4,"ngIf"],["class","p-paginator-current",4,"ngIf"],["type","button","pRipple","","class","p-paginator-first p-paginator-element p-link",3,"disabled","ngClass","click",4,"ngIf"],["type","button","pRipple","",1,"p-paginator-prev","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-left"],["class","p-paginator-pages",4,"ngIf"],["styleClass","p-paginator-page-options",3,"options","ngModel","disabled","appendTo","scrollHeight","onChange",4,"ngIf"],["type","button","pRipple","",1,"p-paginator-next","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-right"],["type","button","pRipple","","class","p-paginator-last p-paginator-element p-link",3,"disabled","ngClass","click",4,"ngIf"],["class","p-paginator-page-input",3,"ngModel","disabled","ngModelChange",4,"ngIf"],["styleClass","p-paginator-rpp-options",3,"options","ngModel","disabled","appendTo","scrollHeight","ngModelChange","onChange",4,"ngIf"],["class","p-paginator-right-content",4,"ngIf"],[1,"p-paginator-left-content"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-paginator-current"],["type","button","pRipple","",1,"p-paginator-first","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-double-left"],[1,"p-paginator-pages"],["type","button","class","p-paginator-page p-paginator-element p-link","pRipple","",3,"ngClass","click",4,"ngFor","ngForOf"],["type","button","pRipple","",1,"p-paginator-page","p-paginator-element","p-link",3,"ngClass","click"],["styleClass","p-paginator-page-options",3,"options","ngModel","disabled","appendTo","scrollHeight","onChange"],["pTemplate","selectedItem"],["type","button","pRipple","",1,"p-paginator-last","p-paginator-element","p-link",3,"disabled","ngClass","click"],[1,"p-paginator-icon","pi","pi-angle-double-right"],[1,"p-paginator-page-input",3,"ngModel","disabled","ngModelChange"],["styleClass","p-paginator-rpp-options",3,"options","ngModel","disabled","appendTo","scrollHeight","ngModelChange","onChange"],[4,"ngIf"],["pTemplate","item"],[1,"p-paginator-right-content"]],template:function(e,i){1&e&&t.YNc(0,N,14,21,"div",0),2&e&&t.Q6J("ngIf",!!i.alwaysShow||i.pageLinks&&i.pageLinks.length>1)},dependencies:[r.mk,r.sg,r.O5,r.tP,r.PC,c.Lt,_.jx,d.Rn,g.JJ,g.On,P.H],styles:[".p-paginator{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.p-paginator-left-content{margin-right:auto}.p-paginator-right-content{margin-left:auto}.p-paginator-page,.p-paginator-next,.p-paginator-last,.p-paginator-first,.p-paginator-prev,.p-paginator-current{cursor:pointer;display:inline-flex;align-items:center;justify-content:center;line-height:1;-webkit-user-select:none;user-select:none;overflow:hidden;position:relative}.p-paginator-element:focus{z-index:1;position:relative}\n"],encapsulation:2,changeDetection:0}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,c.kW,d.L$,g.u5,_.m8,P.T,c.kW,d.L$,g.u5,_.m8]}),n})()}}]);