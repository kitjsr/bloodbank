"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[8156],{8156:(L,u,n)=>{n.r(u),n.d(u,{DonationreportModule:()=>J});var c=n(6895),T=n(433),p=n(99),D=n(3388),g=n(5593),h=n(1795),f=n(2453),v=n(1383),y=n(6408),x=n(1740),A=n(3054),b=n(2210),C=n(613),U=n(5047),S=n(1493),Z=n(6770),d=n(805),F=n(4327),M=n(6166),P=n(2983),E=n.n(P),t=n(1571),B=n(529);const l="http://localhost:3000/api/donationreports";let N=(()=>{class e{constructor(o){this.http=o}getAll(){return this.http.get(l)}get(o){return this.http.get(`${l}/${o}`)}create(o){return this.http.post(l,o)}update(o,r){return this.http.put(`${l}/${o}`,r)}delete(o){return this.http.delete(`${l}/${o}`)}deleteAll(){return this.http.delete(l)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(B.eN))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var O=n(6675);function I(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",10)(1,"span",11)(2,"button",12),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.exportExcel())}),t.qZA(),t._uU(3," \xa0 "),t.TgZ(4,"button",13),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.exportPdf())}),t.qZA()()()}}function R(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",14)(1,"h5",15),t._uU(2,"Donation Reports"),t.qZA(),t.TgZ(3,"span",16),t._UZ(4,"i",17),t.TgZ(5,"input",18),t.NdJ("input",function(i){t.CHM(o);const s=t.oxw(),m=t.MAs(8);return t.KtG(s.onGlobalFilter(m,i))}),t.qZA()()()}}function j(e,a){1&e&&(t.TgZ(0,"tr")(1,"th",19),t._uU(2,"Blood Bank "),t._UZ(3,"p-sortIcon",20),t.qZA(),t.TgZ(4,"th",21),t._uU(5,"Donar Name "),t._UZ(6,"p-sortIcon",22),t.qZA(),t.TgZ(7,"th",21),t._uU(8,"Blood Group"),t._UZ(9,"p-sortIcon",22),t.qZA(),t.TgZ(10,"th",23),t._uU(11,"Mobile"),t._UZ(12,"p-sortIcon",24),t.qZA(),t.TgZ(13,"th",25),t._uU(14,"date "),t._UZ(15,"p-columnFilter",26),t.qZA()())}function z(e,a){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA()()),2&e){const o=a.$implicit;t.xp6(2),t.Oqu(o.directories.name),t.xp6(2),t.Oqu(o.donars.name),t.xp6(2),t.Oqu(o.donars.group),t.xp6(2),t.Oqu(o.donars.mobile),t.xp6(2),t.Oqu(t.xi3(11,5,o.createdAt,"dd/MM/yyyy"))}}const Y=function(){return["name","bloodbank","group","date"]},$=function(){return[10,20,30]};let G=(()=>{class e{constructor(o,r,i){this.messageService=o,this.donationreportService=r,this.donationService=i,this.donationreports=[],this.donationreport={},this.donars=[],this.selectedDonationreports=[],this.donationreportDialog=!1,this.donationreportViewDialog=!1,this.deleteDonationreportDialog=!1,this.deleteDonationreportsDialog=!1,this.deleteProductsDialog=!1,this.submitted=!1,this.donations=[],this.rowsPerPageOptions=[5,10,20]}expiryDate(o){return console.log(o),o}ngOnInit(){this.retrieveDonationreports()}exportExcel(){n.e(574).then(n.bind(n,574)).then(o=>{const i={Sheets:{data:o.utils.json_to_sheet(this.donationreports)},SheetNames:["data"]},s=o.write(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(s,"donationreports")})}saveAsExcelFile(o,r){const m=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});F.saveAs(m,r+"_export_"+(new Date).getTime()+".xlsx")}exportPdf(){const o=new M.default("l","mm","a4");E()(o,{html:"#pr_id_2-table"}),o.save("donationreports.pdf")}retrieveDonationreports(){this.donationService.getAllDonation().subscribe(o=>{this.donationreports=o,console.log(o)},o=>{console.log(o)})}findIndexById(o){let r=-1;for(let i=0;i<this.donationreports.length;i++)if(this.donationreports[i].id===o){r=i;break}return r}onGlobalFilter(o,r){o.filterGlobal(r.target.value,"contains")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.ez),t.Y36(N),t.Y36(O.l))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-donationreport"]],features:[t._Bn([d.ez])],decls:12,vars:9,consts:[[1,"grid"],[1,"col-12"],[1,"card","px-6","py-6"],["styleClass","mb-4"],["pTemplate","left"],["id","my-table","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","dataKey","id",3,"value","globalFilterFields","rows","paginator","rowsPerPageOptions","showCurrentPageReport","rowHover"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"my-2"],[1,"p-buttonset"],["type","button","pButton","","pRipple","","icon","pi pi-file-excel","pTooltip","XLS","tooltipPosition","bottom",1,"p-button-warning",3,"click"],["type","button","pButton","","pRipple","","icon","pi pi-file-pdf","pTooltip","PDF","tooltipPosition","bottom",1,"p-button-warning",3,"click"],[1,"flex","flex-column","md:flex-row","md:justify-content-between","md:align-items-center"],[1,"m-0"],[1,"block","mt-2","md:mt-0","p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Search...",1,"w-full","sm:w-auto",3,"input"],["pSortableColumn","name"],["field","name"],["pSortableColumn","bloodbank"],["field","bloodbank"],["pSortableColumn","mobile"],["field","mobile"],["pSortableColumn","date"],["type","date","field","date","display","menu","placeholder","mm/dd/yyyy"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"p-toast"),t.TgZ(4,"p-toolbar",3),t.YNc(5,I,5,0,"ng-template",4),t.qZA(),t._uU(6,"- "),t.TgZ(7,"p-table",5,6),t.YNc(9,R,6,0,"ng-template",7),t.YNc(10,j,16,0,"ng-template",8),t.YNc(11,z,12,8,"ng-template",9),t.qZA()()()()),2&o&&(t.xp6(7),t.Q6J("value",r.donationreports)("globalFilterFields",t.DdM(7,Y))("rows",10)("paginator",!0)("rowsPerPageOptions",t.DdM(8,$))("showCurrentPageReport",!0)("rowHover",!0))},dependencies:[p.iA,d.jx,p.lQ,p.fz,p.xl,g.Hq,h.H,f.FN,v.o,x.o,c.uU],encapsulation:2}),e})(),w=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.Bz.forChild([{path:"",component:G}]),Z.Bz]}),e})();var H=n(3520);let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,w,p.U$,D.O,T.u5,g.hJ,h.T,f.EV,v.V,y.Xt,x.j,A.A,b.kW,C.cc,H.zz,U.L$,S.S]}),e})()}}]);