(function(t){function e(e){for(var n,l,c=e[0],r=e[1],o=e[2],d=0,f=[];d<c.length;d++)l=c[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&f.push(s[l][0]),s[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},i=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"0382":function(t,e,a){},"18f9":function(t,e,a){"use strict";var n=a("215b"),s=a.n(n);s.a},"215b":function(t,e,a){},"21bb":function(t,e,a){"use strict";var n=a("2dad"),s=a.n(n);s.a},"2dad":function(t,e,a){},"30f1":function(t,e,a){"use strict";var n=a("4a43"),s=a.n(n);s.a},"36d3":function(t,e,a){a("a15b"),a("d81d"),a("ac1f"),a("1276"),t.exports.toNpNumber=function(t){if(!t)return null;var e={0:"०",1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९"},a=t+"";return a.split("").map((function(t){return e[t]||t})).join("")}},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id="4678"},4925:function(t,e,a){},"4a43":function(t,e,a){},"51cf":function(t,e,a){t.exports=a.p+"img/overlay.a1ab81c7.png"},5428:function(t,e,a){"use strict";var n=a("0382"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],l=(a("034f"),a("2877")),c={},r=Object(l["a"])(c,s,i,!1,null,null,null),o=r.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",on:{click:function(e){return t.toggleControls()}}},[a("Background"),a("div",{staticClass:"notepadWrapper"},[a("NotePad",{ref:"notepad"})],1),a("div",{staticClass:"calendarWrapper"},[a("Calendar",{ref:"calendar"})],1),a("div",{staticClass:"settingsWrapper"},[a("Settings",{ref:"settings"})],1),a("div",{staticClass:"content"},[a("div",{staticClass:"clockWrapper"},[a("Clock",{ref:"clock"})],1),a("div",{staticClass:"greetingsWrapper"},[a("Greetings")],1),a("div",{staticClass:"focusTodayWrapper"},[a("FocusToday")],1)]),a("div",{staticClass:"quoteWrapper"},[a("Quote")],1)],1)},f=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{staticClass:"overlay",attrs:{src:a("51cf")}}),t.currentWallpaper?n("div",{staticClass:"credits"},[n("p",{staticClass:"photoInfo"},[t._v(t._s(t.currentWallpaper.location.name))]),n("p",{staticClass:"ownerInfo"},[t.currentWallpaper.user.name?n("span",[t._v(t._s(t.currentWallpaper.user.name))]):t._e(),t._v(" | "),n("a",{attrs:{href:t.currentWallpaper.user.links.html,target:"_blank",rel:"noopener noreferrer"}},[t._v("Unsplash")])])]):t._e()])},p=[],m=(a("6eba"),a("0d03"),a("5530")),b=(a("96cf"),a("1da1")),g=(a("a15b"),a("d81d"),a("b64b"),a("bc3a")),v=a.n(g),j=function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.get("https://api.unsplash.com/photos/".concat(e,"?client_id=lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I"));case 3:return a=t.sent,t.abrupt("return",a.data);case 7:return t.prev=7,t.t0=t["catch"](0),t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e="https://api.unsplash.com/photos/random",a={client_id:"lFf5ncgm_N1TG8qqyRbdalnq33ANd-0ZEkRFNfgXQ7I",orientation:"landscape",featured:!0,content_filter:"high",collections:"64456374",topics:"Nepal, Outdoor, Peak, Kathmandu, Building, Himalaya, Mountain"},e=e+"?"+Object.keys(a).map((function(t){return t+"="+a[t]})).join("&"),t.next=6,v.a.get(e);case 6:return n=t.sent,t.abrupt("return",n.data);case 10:return t.prev=10,t.t0=t["catch"](0),t.abrupt("return",null);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),k=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},C=a("5935"),_=a("c1df"),x=a.n(_),O=Object(C["a"])({getterType:"wallpapers/getField",mutationType:"wallpapers/updateField"}),T=O.mapFields,w={name:"Background",props:{},data:function(){return{}},created:function(){if(this.currentWallpaper){var t=x()(this.currentWallpaper.fetchedAt,"x").isBefore(x()().subtract(1,"d"));t?this.renderWallpaper():document.getElementsByTagName("html")[0].style.backgroundImage="url(".concat(this.currentWallpaper.urls.full,")")}else this.renderWallpaper()},methods:{renderWallpaper:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("collection"!=e.source){t.next=6;break}return t.next=3,y();case 3:a=t.sent,t.next=10;break;case 6:if("featured"!=e.source){t.next=10;break}return t.next=9,j(e.featuredImages[k(0,e.featuredImages.length)]);case 9:a=t.sent;case 10:a&&(a.fetchedAt=Date.now(),e.currentWallpaper=a,document.getElementsByTagName("html")[0].style.backgroundImage="url(".concat(a.urls.full,")"));case 11:case"end":return t.stop()}}),t)})))()}},computed:Object(m["a"])({},T(["currentWallpaper","source","collections","featuredImages"]))},N=w,F=(a("fb11"),Object(l["a"])(N,h,p,!1,null,"05e79a94",null)),I=F.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.enable?a("div",{staticClass:"notepad"},[a("div",{staticClass:"toggle",class:{"--active":t.visibility},on:{click:function(e){return t.toggle()}}},[a("i",{staticClass:"fal fa-clipboard-list-check"})]),t.visibility?a("div",{staticClass:"notepadContainer"},[a("div",{staticClass:"notepadNav"},[a("div",{staticClass:"notepadNavHeader",on:{click:function(e){return t.addNote()}}},[a("i",{staticClass:"fal fa-plus"}),t._v(" New Note ")]),a("vue-custom-scrollbar",[a("div",{staticClass:"notepadNavBody"},t._l(t.notesList,(function(e){return a("div",{key:e.id,staticClass:"notepadNavItem",class:{"--active":t.selectedNote&&e.id===t.selectedNote.id},on:{click:function(a){return t.selectNote(e)}}},[a("span",[t._v(t._s(e.title||"titleless 😒"))]),a("div",{staticClass:"btnTrash",on:{click:function(a){return t.deleteNote(e.id)}}},[a("i",{staticClass:"fal fa-times"})])])})),0)])],1),a("div",{staticClass:"notepadEditor"},[t.notes.length?a("div",[a("div",{staticClass:"metadata"},[a("i",{staticClass:"fal fa-clock"}),a("span",[t._v(t._s(t.noteWrittenAt))])]),a("vue-editor",{attrs:{editorToolbar:t.customToolbar},on:{"text-change":function(e){return t.computeNoteTitle()}},model:{value:t.editorText,callback:function(e){t.editorText=e},expression:"editorText"}})],1):a("div",{staticClass:"notesNotFound"},[a("i",{staticClass:"fal fa-meh meh"}),a("span",[t._v("No notes found")]),a("button",{staticClass:"btn",on:{click:function(e){return t.addNote()}}},[t._v("Add new Note")])])])]):t._e()]):t._e()},S=[],W=(a("c740"),a("26e9"),a("fb6a"),a("a434"),a("c50a")),M=a("5873"),$=a("4b70"),D=a.n($),q=Object(C["a"])({getterType:"notepad/getField",mutationType:"notepad/updateField"}),z=q.mapFields,R={name:"NotePad",components:{VueEditor:M["a"],vueCustomScrollbar:D.a},data:function(){return{showNotes:!1,editorText:null,customToolbar:[[{header:[1,2,3,4,5,6,!1]}],["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"}],["code-block"],[{color:[]},{background:[]}]]}},created:function(){this.notes.length?this.editorText=this.selectedNote.text:(this.addNote(),this.selectNote(this.notes[0]))},methods:{hide:function(){this.visibility=!1},toggle:function(){this.visibility=!this.visibility},selectNote:function(t){this.selectedNote=t,this.editorText=this.selectedNote.text},addNote:function(){this.notes.length>=20&&alert("Ohhh..that's too much");var t=Date.now(),e={id:Object(W["a"])(),title:"New note "+(this.notes.length+1),text:"<h1>New note "+(this.notes.length+1)+"</h1>",createdAt:t,upadatedAt:t};this.notes.push(e),this.selectedNote=e},deleteNote:function(t){this.notes.splice(this.notes.findIndex((function(e){return e.id===t})),1)},computeNoteTitle:function(){var t=(new DOMParser).parseFromString(this.editorText.slice(0,100),"text/html"),e=Date.now(),a=Object(m["a"])(Object(m["a"])({},this.selectedNote),{},{text:this.editorText,title:t.body.children.length?t.body.children[0].textContent:this.selectedNote.title,updatedAt:e}),s=this.notes.findIndex((function(t){return t.id===a.id}));n["a"].set(this.notes,s,a)}},computed:Object(m["a"])(Object(m["a"])({},z(["enable","visibility","selectedNote","notes"])),{},{notesList:function(){return this.notes.slice().reverse()},noteWrittenAt:function(){return this.selectedNote?x()(this.selectedNote.createdAt,"x").fromNow():null}})},A=R,B=(a("a68d"),Object(l["a"])(A,E,S,!1,null,"fde6ed3a",null)),Q=B.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"settings"},[a("div",{staticClass:"toggle",class:{"--active":t.visibility},on:{click:function(e){return t.toggleSettings()}}},[a("i",{staticClass:"fal fa-cog"})]),t.visibility?a("div",{staticClass:"settingsContainer"},[a("div",{staticClass:"settingsNav"},[a("div",{staticClass:"settigsNavBody"},t._l(t.menuItems,(function(e){return a("div",{key:e.id,staticClass:"settingsNavItem",class:{"--active":t.selectedMenuItem&&e.id===t.selectedMenuItem.id},on:{click:function(a){return t.selectMenuItem(e)}}},[a("span",[a("i",{staticClass:"icon fal",class:"fa-"+e.icon}),t._v(" "+t._s(e.name)+" ")])])})),0)]),a("div",{staticClass:"settingsDetails"},[a("keep-alive",[a(t.selectedMenuItem.component,{tag:"component"})],1)],1)]):t._e()])},U=[],V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Clock Settings")]),a("div",{staticClass:"d-flex justify-content-around"},[a("div",[a("label",{staticClass:"title"},[t._v("Visibility")]),a("Toggle",{attrs:{value:t.visibility},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}})],1),a("div",[a("label",{staticClass:"title"},[t._v("Format")]),a("Toggle",{attrs:{value:t.format,lblChecked:"12Hr",lblUnchecked:"24Hr",width:55,config:{12:!0,24:!1}},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}})],1),a("div",[a("label",{staticClass:"title"},[t._v("Language")]),a("Toggle",{attrs:{value:t.language,lblChecked:"ने",lblUnchecked:"En",width:45,config:{en:!1,np:!0}},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)])])},G=[],H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("toggle-button",{attrs:{value:t.data,color:"#82C7EB",sync:!0,labels:{checked:t.lblChecked,unchecked:t.lblUnchecked},height:20,width:t.width},on:{input:function(e){return t.emitChange()}},model:{value:t.data,callback:function(e){t.data=e},expression:"data"}})],1)},J=[],K=(a("a9e3"),a("f206")),L={name:"Toggle",components:{ToggleButton:K["ToggleButton"]},props:{value:{type:null},config:{type:Object},width:{type:Number,default:50},lblChecked:{type:String,default:"On"},lblUnchecked:{type:String,default:"Off"}},data:function(){return{data:null}},created:function(){this.value&&(this.config?this.data=this.config[this.value]:this.data=this.value)},methods:{emitChange:function(){if(this.config)for(var t in this.config)this.config[t]==this.data&&this.$emit("input",t);else this.$emit("input",this.data)}},watch:{value:function(t,e){t!=e&&(this.config?this.data=this.config[t]:this.data=t)}}},X=L,Y=Object(l["a"])(X,H,J,!1,null,null,null),Z=Y.exports,tt=Object(C["a"])({getterType:"clock/getField",mutationType:"clock/updateField"}),et=tt.mapFields,at={name:"SettingsClock",components:{Toggle:Z},computed:Object(m["a"])({},et(["visibility","language","format"]))},nt=at,st=Object(l["a"])(nt,V,G,!1,null,"1aa035ee",null),it=st.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Calendar Settings")]),a("label",{staticClass:"title"},[t._v("Visibility ")]),a("Toggle",{attrs:{value:t.enable},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}})],1)},ct=[],rt=Object(C["a"])({getterType:"calendar/getField",mutationType:"calendar/updateField"}),ot=rt.mapFields,ut={name:"SettingsCalendar",components:{Toggle:Z},computed:Object(m["a"])({},ot(["enable"]))},dt=ut,ft=Object(l["a"])(dt,lt,ct,!1,null,null,null),ht=ft.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Notepad Settings")]),a("label",{staticClass:"title"},[t._v("Visibility ")]),a("Toggle",{attrs:{value:t.enable},model:{value:t.enable,callback:function(e){t.enable=e},expression:"enable"}})],1)},mt=[],bt=Object(C["a"])({getterType:"notepad/getField",mutationType:"notepad/updateField"}),gt=bt.mapFields,vt={name:"SettingsNotepad",components:{Toggle:Z},data:function(){return{}},created:function(){},methods:{},computed:Object(m["a"])({},gt(["enable"]))},jt=vt,yt=Object(l["a"])(jt,pt,mt,!1,null,"aed8af10",null),kt=yt.exports,Ct=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_t=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Greetings Settings")])])}],xt={},Ot=Object(l["a"])(xt,Ct,_t,!1,null,null,null),Tt=Ot.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-col h-100"},[a("h1",[t._v("Quote Settings")]),a("div",{staticClass:"d-flex flex-col justify-content-between flex-1"},[a("div",[a("label",{staticClass:"title"},[t._v("Visibility ")]),a("Toggle",{attrs:{value:t.visibility},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}})],1),t._m(0)])])},Nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[t._v(" The quotes are fetched from "),a("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("Samaya Quotes API")]),t._v(". If you want to contribute, please visit the "),a("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contribution Guide")]),t._v(". ")])}],Ft=Object(C["a"])({getterType:"quote/getField",mutationType:"quote/updateField"}),It=Ft.mapFields,Et={name:"SettingsQuote",components:{Toggle:Z},data:function(){return{}},created:function(){},methods:{},computed:Object(m["a"])({},It(["visibility"]))},St=Et,Wt=Object(l["a"])(St,wt,Nt,!1,null,null,null),Mt=Wt.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-col h-100"},[a("h1",[t._v("Wallpapers Setting")]),a("div",{staticClass:"d-flex flex-col justify-content-between flex-1"},[a("div",[a("label",{staticClass:"title"},[t._v("Wallpaper Source")]),a("Toggle",{attrs:{value:t.source,lblChecked:"Featured",lblUnchecked:"Collections",width:85,config:{featured:!0,collections:!1}},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}})],1),"collections"==t.source?a("div",[a("label",{staticClass:"title"},[t._v("Unsplash collection Ids")]),a("br"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.collections,expression:"collections"}],staticClass:"w-100",staticStyle:{resize:"none"},attrs:{rows:"5"},domProps:{value:t.collections},on:{input:function(e){e.target.composing||(t.collections=e.target.value)}}})]):"featured"==t.source?a("div",{staticClass:"d-flex flex-col"},[a("label",{staticClass:"title"},[t._v("Featured Images")]),a("vue-custom-scrollbar",[a("div",{staticClass:"featuredImagesContainer"},t._l(t.featuredThumbnails,(function(e,n){return a("div",{key:n,staticClass:"featuredImage",class:{"--checked":e.id===t.currentWallpaper.id},style:"background-image: url("+e.url+")",on:{click:function(a){return t.selectWallpaper(e.id)}}},[e.id===t.currentWallpaper.id?a("i",{staticClass:"fas fa-check-circle checkmark"}):t._e()])})),0)])],1):t._e(),t._m(0)])])},Dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"note"},[t._v(" The wallpapers are loaded from "),a("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unsplash")]),t._v(" . If you want to contribute, please visit the "),a("a",{attrs:{href:"http://",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contribution Guide")]),t._v(". ")])}],qt=(a("4160"),a("159b"),Object(C["a"])({getterType:"wallpapers/getField",mutationType:"wallpapers/updateField"})),zt=qt.mapFields,Rt={name:"SettingsWallpapers",components:{Toggle:Z,vueCustomScrollbar:D.a},data:function(){return{featuredThumbnails:[]}},created:function(){var t=this;this.featuredImages.forEach(function(){var e=Object(b["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j(a);case 2:n=e.sent,n&&t.featuredThumbnails.push({url:n.urls.thumb,id:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},methods:{selectWallpaper:function(t){var e=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.t0=m["a"],a.t1=m["a"],a.t2={},a.next=5,j(t);case 5:a.t3=a.sent,a.t4=(0,a.t1)(a.t2,a.t3),a.t5={},a.t6={fetchedAt:Date.now()},e.currentWallpaper=(0,a.t0)(a.t4,a.t5,a.t6),document.getElementsByTagName("html")[0].style.backgroundImage="url(".concat(e.currentWallpaper.urls.full,")");case 11:case"end":return a.stop()}}),a)})))()}},computed:Object(m["a"])({},zt(["collections","source","featuredImages","currentWallpaper"]))},At=Rt,Bt=(a("a9c6"),Object(l["a"])(At,$t,Dt,!1,null,"502a07fd",null)),Qt=Bt.exports,Pt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Daily Goal Settings")])])}],Vt={},Gt=Object(l["a"])(Vt,Pt,Ut,!1,null,null,null),Ht=Gt.exports,Jt=Object(C["a"])({getterType:"settings/getField",mutationType:"settings/updateField"}),Kt=Jt.mapFields,Lt={name:"Settings",components:{SettingsClock:it,SettingsCalendar:ht,SettingsNotepad:kt,SettingsGreetings:Tt,SettingsQuote:Mt,SettingsWallpapers:Qt,SettingsFocusToday:Ht},data:function(){return{menuItems:[{id:"clock",name:"Clock",icon:"clock",component:"SettingsClock"},{id:"notepad",name:"Notepad",icon:"clipboard-list-check",component:"SettingsNotepad"},{id:"calendar",name:"Calendar",icon:"calendar-alt",component:"SettingsCalendar"},{id:"quote",name:"Quote",icon:"quote-right",component:"SettingsQuote"},{id:"wallpapers",name:"Wallpapers",icon:"image-polaroid",component:"SettingsWallpapers"}]}},created:function(){this.selectedMenuItem=this.menuItems[0]},methods:{toggleSettings:function(){this.visibility=!this.visibility},hide:function(){this.visibility=!1},selectMenuItem:function(t){this.selectedMenuItem=t}},computed:Object(m["a"])({},Kt(["visibility","selectedMenuItem"]))},Xt=Lt,Yt=(a("30f1"),Object(l["a"])(Xt,P,U,!1,null,null,null)),Zt=Yt.exports,te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visibility?a("div",{staticClass:"clock"},["np"==t.language?a("span",[t._v(t._s(t._f("npNumber")(t.timeTxt)))]):a("span",[t._v(t._s(t.timeTxt))]),a("div",{staticClass:"p-relative btnEdit ml-2",class:{"--active":t.settingsVisibility}},[a("i",{staticClass:"fal fa-ellipsis-v",on:{click:function(e){return t.toggleQuickSettings()}}}),t.settingsVisibility?a("div",{staticClass:"clockQuickSettings"},[a("div",{staticClass:"d-flex flex-col"},[a("Toggle",{attrs:{value:t.format,lblChecked:"12Hr",lblUnchecked:"24Hr",width:50,config:{12:!0,24:!1}},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}}),a("hr"),a("Toggle",{attrs:{value:t.language,lblChecked:"ने",lblUnchecked:"En",width:45,config:{en:!1,np:!0}},model:{value:t.language,callback:function(e){t.language=e},expression:"language"}})],1)]):t._e()])]):t._e()},ee=[],ae=(a("4795"),Object(C["a"])({getterType:"clock/getField",mutationType:"clock/updateField"})),ne=ae.mapFields,se={name:"Clock",components:{Toggle:Z},data:function(){return{clockTimer:null,timeTxt:null}},created:function(){this.startClock()},methods:{startClock:function(){var t=this;this.timeTxt=this.computeClockText(),this.clockTimer=setInterval((function(){t.timeTxt=t.computeClockText()}),1e3)},computeClockText:function(){var t=new Date,e=t.getHours();12==this.format&&(e=e%12||12);var a=t.getMinutes()+"";return 1===a.length&&(a="0"+a),e+":"+a},toggleQuickSettings:function(){this.settingsVisibility=!this.settingsVisibility},hide:function(){this.settingsVisibility=!1}},computed:Object(m["a"])({},ne(["visibility","language","format","settingsVisibility"])),watch:{format:function(){this.timeTxt=this.computeClockText()}}},ie=se,le=(a("69ea"),Object(l["a"])(ie,te,ee,!1,null,"4fd1b97a",null)),ce=le.exports,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.enable?a("div",{staticClass:"calendarContainer"},[t.calDataMinimal?a("div",{staticClass:"miniCalendar",class:{"--active":t.visibility},on:{click:function(e){return t.toggleFullCal()}}},[a("div",{staticClass:"date"},[a("div",{staticClass:"dayInMonth"},[t._v(t._s(t.calDataMinimal.dayInMonth))]),a("div",{staticClass:"month"},[t._v(t._s(t.calDataMinimal.month))])]),a("div",{staticClass:"dayInWeek"},[t._v(t._s(t.calDataMinimal.dayInWeek))])]):t._e(),t.visibility?a("div",{staticClass:"fullCalendar"},[a("div",{staticClass:"toolbar"},[a("div",{staticClass:"arrow --left",on:{click:function(e){return t.changeMonth(-1)}}},[a("i",{staticClass:"fal fa-chevron-left"})]),a("div",{staticClass:"monthName"},[t._v(t._s(t.calData.month)+", "+t._s(t.calData.year))]),a("div",{staticClass:"arrow --right",on:{click:function(e){return t.changeMonth(1)}}},[a("i",{staticClass:"fal fa-chevron-right"})])]),a("table",{staticClass:"calTable"},[t._m(0),a("tbody",t._l(t.fullCal,(function(e,n){return a("tr",{key:n},t._l(e,(function(e,n){return a("td",{key:n,class:{"--today":e==t.calData.dayInMonthEn&&t.calData.today}},[a("span",[t._v(t._s(t._f("npNumber")(e)))])])})),0)})),0)])]):t._e()]):t._e()},oe=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("आइत")]),a("th",[t._v("सोम")]),a("th",[t._v("मंगल")]),a("th",[t._v("बुध")]),a("th",[t._v("बिहि")]),a("th",[t._v("शुक्र")]),a("th",[t._v("शनि")])])}],ue=a("e5d4"),de=a.n(ue),fe=a("2ef0"),he=a.n(fe),pe=Object(C["a"])({getterType:"calendar/getField",mutationType:"calendar/updateField"}),me=pe.mapFields,be={name:"Calendar",props:{},data:function(){return{showFullCal:!1,fullCal:null,calDataMinimal:null,calData:null,year:null,month:null,day:null}},created:function(){this.computeFullCal()},methods:{computeFullCal:function(){if(null==this.year&&null==this.month){var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth(),this.day=t.getDate()}var e=de.a.ad2bs(this.year+"/"+(this.month+1)+"/"+(this.day||1));this.calData={year:e.ne.year,month:e.ne.strMonth,monthEn:e.en.month,dayInMonth:e.ne.day,dayInMonthEn:e.en.day,today:this.day,dayInWeek:e.ne.strDayOfWeek,dayOfWeekEn:e.en.dayOfWeek,totalDaysInMonthEn:e.en.totalDaysInMonth},this.calDataMinimal||(this.calDataMinimal=JSON.parse(JSON.stringify(this.calData)));for(var a=this.getFirstDayOfMonth(this.calData.dayInMonthEn,this.calData.dayOfWeekEn+1),n=[],s=1;s<a;s++)n.push(null);for(var i=1;i<=this.calData.totalDaysInMonthEn;i++)n.push(i);this.fullCal=he.a.chunk(n,7)},toggleFullCal:function(){this.visibility=!this.visibility},hide:function(){this.visibility=!1,this.reset()},getFirstDayOfMonth:function(t,e){while(t>1)e--,0===e&&(e=7),t--;return e},changeMonth:function(t){this.month=this.month+t,this.month>11?(this.year++,this.month=0):this.month<0&&(this.year--,this.month=11);var e=new Date;e.getFullYear()==this.year&&e.getMonth()==this.month?this.day=e.getDate():this.day=null,this.computeFullCal()},reset:function(){this.year=null,this.month=null,this.computeFullCal()}},computed:Object(m["a"])({},me(["visibility","enable"]))},ge=be,ve=(a("c864"),Object(l["a"])(ge,re,oe,!1,null,"005d2758",null)),je=ve.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.quote&&t.visibility?a("div",{staticClass:"quote"},[a("span",{staticClass:"quoteText"},[t._v("“"+t._s(t.quote.text)+"”")]),a("span",{staticClass:"quoteAuthor"},[t._v(" - "+t._s(t.quote.author||"Unknown")+" "),a("i",{staticClass:"fal fa-hand-holding-heart btnSupport",attrs:{title:"Support Samaya"}})])]):t._e()},ke=[],Ce=(a("d3b7"),Object(C["a"])({getterType:"quote/getField",mutationType:"quote/updateField"})),_e=Ce.mapFields,xe={name:"Quote",created:function(){if(this.quote&&this.quote.fetchedAt){var t=x()(this.quote.fetchedAt,"x").isBefore(x()().subtract(1,"d"));t&&this.fetchRandomQuote()}else this.fetchRandomQuote()},methods:{fetchRandomQuote:function(){var t=this;fetch("https://bibhuticoder.github.io/samaya-quotes-api/quotes/metadata.json").then((function(t){return t.json()})).then((function(e){var a=he.a.random(1,e.totalPages);fetch("https://bibhuticoder.github.io/samaya-quotes-api/quotes/"+a+".json").then((function(t){return t.json()})).then((function(e){var a=e[he.a.random(0,e.length-1)];t.quote=Object(m["a"])(Object(m["a"])({},a),{},{fetchedAt:Date.now()})}))}))}},computed:Object(m["a"])({},_e(["quote","visibility"]))},Oe=xe,Te=(a("18f9"),Object(l["a"])(Oe,ye,ke,!1,null,"4f3d0773",null)),we=Te.exports,Ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"greeting"},[t._v(" "+t._s(t.greeting)+" "),a("i",{staticClass:"fal fa-pen btnEdit ml-2",on:{click:function(e){return t.handleEdit()}}})])},Fe=[],Ie=(a("b0c0"),a("2f62")),Ee={name:"Greetings",props:{},data:function(){return{}},created:function(){},methods:{handleEdit:function(){this.$store.commit("greetings/setName",null),this.$router.push("/")}},computed:Object(m["a"])(Object(m["a"])({},Object(Ie["b"])("greetings",["name"])),{},{greeting:function(){var t,e="शुभ",a={morning:"प्रभात",noon:"मध्यान्ह",evening:"सन्ध्या",night:"रात्री"},n=(new Date).getHours();return n>=1&&n<=12?t=a.morning:n>12&&n<=16?t=a.noon:n>16&&n<=19?t=a.evening:n>19&&n<=24&&(t=a.night),e+" "+t+(this.name?", "+this.name:"")}})},Se=Ee,We=(a("fc02"),Object(l["a"])(Se,Ne,Fe,!1,null,"6613fb83",null)),Me=We.exports,$e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"focusToday"},[t.focus.value?a("div",[a("p",{staticClass:"focusTodayTitle"},[t._v("आज")]),a("div",{staticClass:"checkboxWrapper"},[a("CheckBox",{attrs:{label:t.focus.value},on:{cancelled:function(e){return t.handleCancel()},refreshed:function(e){return t.handleRefresh()}}})],1)]):a("div",[a("p",{staticClass:"question"},[t._v(t._s(t.question))]),a("input",{staticClass:"answer",attrs:{type:"text",spellcheck:"false"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(e){return t.focus.value=e.target.value}(e)}}})])])},De=[],qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkboxContainer"},[a("div",{staticClass:"checkbox",on:{click:function(e){return t.toggle()}}},[t.value?a("i",{staticClass:"fal fa-check",attrs:{"aria-hidden":"true"}}):t._e()]),a("label",{class:{"--checked":t.value}},[t._v(t._s(t.label))]),a("div",{staticClass:"controls"},[a("div",{staticClass:"btnControl",on:{click:function(e){t.value?t.refresh():t.cancel()}}},[t.value?a("i",{staticClass:"fal fa-sync-alt"}):a("i",{staticClass:"fal fa-times"})])])])},ze=[],Re={name:"CheckBox",props:{label:{type:String,default:""},checked:{type:Boolean,default:!1}},data:function(){return{value:null}},created:function(){this.value=this.checked},methods:{toggle:function(){this.value=!this.value},cancel:function(){this.value=null,this.$emit("cancelled")},refresh:function(){this.value=null,this.$emit("refreshed")}}},Ae=Re,Be=(a("5428"),Object(l["a"])(Ae,qe,ze,!1,null,"0bf22711",null)),Qe=Be.exports,Pe={name:"Calendar",components:{CheckBox:Qe},props:{},data:function(){return{question:"आजको लागि तिम्रो मुख्य काम के हो?",focus:{value:null,done:!1}}},created:function(){},methods:{handleCancel:function(){this.focus.value=null},handleRefresh:function(){this.focus.value=null}},computed:Object(m["a"])({},Object(Ie["b"])("settings",["clockFormat"]))},Ue=Pe,Ve=(a("fff7"),Object(l["a"])(Ue,$e,De,!1,null,"008beaa0",null)),Ge=Ve.exports,He={name:"Home",data:function(){return{backgroundImage:null}},components:{Settings:Zt,NotePad:Q,Clock:ce,Quote:we,Calendar:je,Greetings:Me,FocusToday:Ge,Background:I},created:function(){var t=this;document.body.addEventListener("click",(function(e){"home"==e.target.className&&(t.$refs.notepad&&t.$refs.notepad.hide(),t.$refs.calendar&&t.$refs.calendar.hide(),t.$refs.settings&&t.$refs.settings.hide(),t.$refs.clock&&t.$refs.clock.hide())}))},methods:{toggleControls:function(){}}},Je=He,Ke=(a("21bb"),Object(l["a"])(Je,d,f,!1,null,null,null)),Le=Ke.exports,Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro"},[a("div",{staticClass:"inputContainer"},[a("p",{staticClass:"question"},[t._v("तिम्रो नाम के हो")]),a("input",{staticClass:"inputName",attrs:{type:"text",spellcheck:"false"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:function(e){return t.handleKeyUp(e.target.value)}(e)}}})])])},Ye=[],Ze={name:"Intro",created:function(){this.name&&this.$router.push("/home")},methods:{handleKeyUp:function(t){this.$store.commit("greetings/setName",t),this.$router.push("/home")}},computed:Object(m["a"])({},Object(Ie["b"])("greetings",["name"]))},ta=Ze,ea=(a("dd78"),Object(l["a"])(ta,Xe,Ye,!1,null,"ed6b0296",null)),aa=ea.exports;n["a"].use(u["a"]);var na=[{path:"/home",name:"Home",component:Le},{path:"/",name:"Intro",component:aa}],sa=new u["a"]({routes:na}),ia=sa,la={namespaced:!0,state:{visibility:!0,language:"np",format:12,settingsVisibility:!1},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},ca={namespaced:!0,state:{name:null,language:"np",customText:null},getters:{name:function(t){return t.name},language:function(t){return t.language},customText:function(t){return t.customText}},mutations:{setName:function(t,e){n["a"].set(t,"name",e)},setLanguage:function(t,e){n["a"].set(t,"language",e)},setCustomText:function(t,e){n["a"].set(t,"customText",e)}}},ra={namespaced:!0,state:{focus:{value:null,done:!1}},getters:{focus:function(t){return t.focus}},mutations:{setFocus:function(t,e){n["a"].set(t,"focus",e)}}},oa={namespaced:!0,state:{visibility:!0,quote:null},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},ua={namespaced:!0,state:{enable:!0,visibility:!1,selectedNote:null,notes:[]},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},da={namespaced:!0,state:{enable:!0,visibility:!1},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},fa={namespaced:!0,state:{source:"featured",collections:"41305491,8878770",featuredImages:["g30P1zcOzXo","x39cWh7xIYI","VjfNJnJBWYA","ntBPI4OnXZ0","TWok6xTnc9w","b_IcUohrtUI","6F-uGWod7Xk","59Al83Zjtf8","JV78PVf3gGI","Wd-bC5nM7pQ","8NOpqulKiQw","CKA5ViRKHRU"],currentWallpaper:null},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},ha={namespaced:!0,state:{visibility:!1,selectedMenuItem:null},getters:{getField:C["b"]},mutations:{updateField:C["c"]}},pa=a("bfa9");n["a"].use(Ie["a"]);var ma=new pa["a"]({storage:window.localStorage}),ba=new Ie["a"].Store({state:{},mutations:{},actions:{},modules:{clock:la,greetings:ca,focusToday:ra,quote:oa,notepad:ua,calendar:da,wallpapers:fa,settings:ha},plugins:[ma.plugin]}),ga=(a("4de4"),a("36d3")),va={npNumber:function(t){return Object(ga["toNpNumber"])(t)}},ja=function(){Object.keys(va).forEach((function(t){n["a"].filter(t,va[t])}))};a("fb98");ja(),n["a"].config.productionTip=!1,new n["a"]({router:ia,store:ba,render:function(t){return t(o)}}).$mount("#app")},"5a6a":function(t,e,a){},"626f":function(t,e,a){},"69ea":function(t,e,a){"use strict";var n=a("4925"),s=a.n(n);s.a},"71d7":function(t,e,a){},"7f02":function(t,e,a){},"85ec":function(t,e,a){},a68d:function(t,e,a){"use strict";var n=a("ba9a"),s=a.n(n);s.a},a9c6:function(t,e,a){"use strict";var n=a("5a6a"),s=a.n(n);s.a},b5f3:function(t,e,a){},ba9a:function(t,e,a){},bf38:function(t,e,a){},c864:function(t,e,a){"use strict";var n=a("7f02"),s=a.n(n);s.a},dd78:function(t,e,a){"use strict";var n=a("626f"),s=a.n(n);s.a},fb11:function(t,e,a){"use strict";var n=a("71d7"),s=a.n(n);s.a},fb98:function(t,e,a){},fc02:function(t,e,a){"use strict";var n=a("b5f3"),s=a.n(n);s.a},fff7:function(t,e,a){"use strict";var n=a("bf38"),s=a.n(n);s.a}});
//# sourceMappingURL=app.b209b4af.js.map