(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{566:function(e,t,n){"use strict";n(163);const o={},i={},s=e=>void 0===e;function l(e){return!!o[e]}class c{constructor(e){this.name=e,this.listeners=[]}regist(e){this.listeners.push(e)}emit(e){this.listeners.forEach(t=>{t(e)})}}t.a={EVENT:i,emit:function(e,t){l(e)&&o[e].emit(t)},regist:function e(t,n){if("object"!=typeof t)l(t)||function(e){s(i[e])&&(o[e]=new c(e),i[e]=e)}(t),o[t].regist(n);else for(const n in t)e(n,t[n])},checkEvent:l,remove:function(e,t){if(!l(e))return console.warn("removeEvent:未找到事件 "+e),!1;if(s(t))return console.error("请传入要移除的listener"),!1;{const n=o[e].listeners.indexOf(t);return-1===n?(console.warn("removeEvent:未找到监听函数 "+e),!1):(o[e].listeners.splice(n,1),!0)}}}},567:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var o=n(566);let i=null;const s={visible:!0};function l(){let e="";const t=window.location.host;return e=-1!==t.indexOf("localhost")||"theajack.github.io"===t?"https://theajack.github.io":window.location.protocol+"//theajack.gitee.io",e+"/jsbox/?remind=false&mes=false"}t.a=function(){if(null!==i)return i;!function(){const e=console.log;console.log=(...t)=>{o.a.emit("onlog",t),e(...t)}}(),function(){const e=document.createElement("style");e.innerText="\n    .jsbox-mask{\n        position: fixed;\n        z-index: 1000;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        background-color: #000000dd;\n        display: none;\n    }\n    .jsbox-header{\n        height: 4%;\n        vertical-align: middle;\n        font-size: 1rem;\n        color: #eee;\n        display: flex;\n        align-items: center;\n        padding: 0 5px;\n        background-color: #1e1e1e;\n    }\n    .jsbox-link{\n        margin-left: 5px;\n    }\n    .jsbox-close{\n        cursor: pointer;\n        position: absolute;\n        right: 10px;\n        font-size: 1.5rem;\n    }\n    .jsbox-close:hover{\n        color: #e88;\n    }\n    .jsbox-iframe{\n        width: 100%;\n        height: 96%;\n        box-shadow: 0 0 15px #000;\n        position: relative;\n    }\n    .jsbox-loading-w{\n        position: absolute;\n        font-size: 3rem;\n        color: #aaa;\n        top: 50%;\n        transform: translate(-50%,-50%);\n        left: 50%;\n    }",document.head.appendChild(e)}();const e=function(){const e=document.createElement("div");return e.className="jsbox-mask",e.innerHTML="\n    <div class='jsbox-header'>\n        Powered by <a class='jsbox-link' target='view_window' href='https://github.com/theajack/jsbox'><i class='ei-cube-alt'></i> JSBox</a>\n        <i class='ei-times jsbox-close'></i>\n    </div>\n    <div class='jsbox-loading-w'><i class='ei-spinner-indicator ei-spin'></i></div>\n    <iframe class='jsbox-iframe' src='' frameborder='0'></iframe>",document.body.appendChild(e),e}(),t=e.querySelector(".jsbox-iframe");function n(e){i.url!==e&&(i.url=e,t.src=i.url)}function s(){e.style.display="block",document.body.style.overflow="hidden"}function c(){e.style.display="none",document.body.style.overflow="auto"}return e.querySelector(".jsbox-close").onclick=c,i={open:s,close:c,code:function(e="",t="javascript",o="alins"){i._code!==e&&(i._code=e,n(`${l()}&env=${o}&code=${encodeURIComponent(e)}&lang=${t}`)),s()},openUrl:function(e){n(e.replace("?","?remind=false&mes=false&")),s()},openGitHub:function(e){n(`${l()}&github=${e}`),s()},openSample:function(e){n(`${l()}&codeSrc=${location.protocol}//${location.host}/docs/samples/${e}.js`),s()}},i}},568:function(e,t,n){"use strict";function o(e){const t=e.match(/<script(.|\n)*?>(.|\n)*?<\/script>/g);if(!t)return{html:e,js:""};let n=t.map(t=>(e=e.replace(t,""),function(e,t="script"){return e.substring(e.indexOf(">")+1,e.lastIndexOf("</"+t+">")).trim()}(t))).join("\n").trim();return n&&(n="//@ sourceURL=jsbox_run.js \n"+n),{html:e,js:n}}function i({code:e=""}){""!==e.trim()?(-1===e.indexOf("\n")&&(e=`console.log(${e})`),new Function(e.trim())()):console.warn("execute code 参数不可为空")}function s(e){let t=document.getElementById("_copy_input_");t||(t=document.createElement("textarea"),t.setAttribute("type","text"),t.setAttribute("style","height:10px;position:fixed;top:-100px;opacity:0;"),t.setAttribute("id","_copy_input_"),document.body.appendChild(t)),t.value=e,t.select();try{return!!document.execCommand("Copy")}catch(e){return!1}}n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}))},584:function(e,t,n){},608:function(e,t,n){"use strict";n(584)},619:function(e,t,n){"use strict";n.r(t);var o=n(567),i=n(568);let s=null;var l={props:{title:{type:String,default:"Demo program"},desc:{type:String,default:"The button on the right can turn on editing | run online"},result:{type:Boolean,default:!0}},data:()=>({showCode:o.b,isEdit:!1,localCode:"",localLang:"",env:"alins",next:null}),mounted(){this.next=this.getNext(),s=Object(o.a)(),this.initCode(),console.log("mounted")},watch:{"showCode.visible"(){this.initCodeVisible()}},methods:{initCodeVisible(){this.next.style.display=this.showCode.visible?"block":"none"},toggleShowCode(){this.showCode.visible=!this.showCode.visible,this.initCodeVisible()},getNext(){const e=this.$refs.runner;if(!e)return null;const t=e.nextElementSibling;return t||null},initCode(){const e=this.next;e&&(-1!==e.className.indexOf("language-js")?this.localLang="javascript":-1!==e.className.indexOf("language-html")&&(this.localLang="html"),this.runBase(e))},run(){const e=this.next;e&&(this.codeResultEl&&(this.codeResultEl.innerHTML=""),this.runBase(e),this.$toast("Refresh Success"))},edit(){const e=this.next.querySelector("pre");e.classList.add("edited");const t=e.children[0];t.setAttribute("contenteditable","true"),t.setAttribute("style","-webkit-user-modify: read-write-plaintext-only;"),t.setAttribute("spellcheck","false"),t.textContent=t.innerText,this.isEdit=!0},runBase(e){this.localLang&&(this.localCode=this.transformCode(e.querySelector("code").innerText)),this.initResult(e)},initResult(e){if(!this.result)return;if(!this.codeResultEl){const t=document.createElement("div");e.appendChild(t),t.className="code-result";const n=document.createElement("i");n.className="ei-undo code-btn in-result",n.title="Refresh",n.onclick=()=>{this.run()},t.appendChild(n),this.codeResultEl=t}const t=this.localCode.replace(/"#jx\-app"/g,"__DOM__").replace(/document\.getElementById\('jx\-app'\)/g,"__DOM__");try{new Function("__DOM__",t)(this.codeResultEl)}catch(e){this.codeResultEl.innerHTML=`<span style="color: #f55">${e.toString()}</span>`}},jsbox(){s.code(this.localCode,this.localLang,this.env)},copy(){this.$toast(Object(i.a)(this.next.querySelector("code").innerText)?"Copy Success":"Copy Fail")},transformCode(e){return this.env=/from *['"]alins\-style['"]/.test(e)?"alins-style":"alins",e.replace(/\.mount\(\)/g,'.mount("#jx-app")').replace(/import ({.*?}) from '(.*?)'/g,(e,t,n)=>`${"alins"===n&&"alins"!==this.env?"/* cdn 引用时只需要引入alins-style即可*/\n":""}const ${t} = ${"alins"===this.env?"Alins":"AlinsStyle"}`)}}},c=(n(608),n(11)),r=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:""!==e.localCode,expression:'localCode!==""'}],ref:"runner",staticClass:"code-runner"},[t("span",{staticClass:"code-title"},[e._v(e._s(e.title))]),e._v(" "),t("span",{staticClass:"code-desc"},[e._v(e._s(e.result?e.desc:"Click the button on the right to run the code in jsbox"))]),e._v(" "),t("i",{staticClass:"ei-play code-btn",attrs:{title:"Open jsbox"},on:{click:e.jsbox}}),e._v(" "),t("i",{staticClass:"ei-copy code-btn",attrs:{title:"Copy code"},on:{click:e.copy}}),e._v(" "),t("i",{staticClass:"ei-undo code-btn",attrs:{title:"Refresh"},on:{click:e.run}}),e._v(" "),t("i",{staticClass:"code-btn",class:{"ei-eye-close":e.showCode.visible,"ei-eye-open":!e.showCode.visible},attrs:{title:e.showCode.visible?"Hide code":"Show code"},on:{click:e.toggleShowCode}}),e._v(" "),t("i",{directives:[{name:"show",rawName:"v-show",value:e.result&&!e.isEdit,expression:"result && !isEdit"}],staticClass:"ei-code code-btn",attrs:{title:"Turn on Editing"},on:{click:e.edit}})])}),[],!1,null,null,null);t.default=r.exports}}]);