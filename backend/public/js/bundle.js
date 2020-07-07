!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var o=["second","minute","hour","day","week","month","year"],a=["秒","分钟","小时","天","周","个月","年"],r={},s=function(e,t){r[e]=t},d=function(e){return r[e]||r.en_US},c=[60,60,24,7,365/7/12,12];function i(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function l(e,t){for(var n=e<0?1:0,o=e=Math.abs(e),a=0;e>=c[a]&&a<c.length;a++)e/=c[a];return(e=Math.floor(e))>(0===(a*=2)?9:1)&&(a+=1),t(e,a,o)[n].replace("%s",e.toString())}function u(e,t){return(+(t?i(t):new Date)-+i(e))/1e3}s("en_US",(function(e,t){if(0===t)return["just now","right now"];var n=o[Math.floor(t/2)];return e>1&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]})),s("zh_CN",(function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}));const m=new class{constructor(){this.URI="/api/books"}async getBooks(){const e=await fetch(this.URI);return await e.json()}async createBook(e){const t=await fetch(this.URI,{method:"POST",body:e});return await t.json()}async deleteBook(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"}),n=await t.json();return console.log(n),n}},f=new class{constructor(){this.URI="/api/emails"}async sendEmail(e){const t=await fetch(this.URI,{method:"POST",body:e});return await t.json()}};const p=new class{async renderBooks(){const e=await m.getBooks(),t=document.getElementById("books-cards");t.innerHTML="",e.forEach(e=>{const n=document.createElement("div");var o,a,r;n.className="",n.innerHTML=`\n                <div class="card m-2">\n                    <div class="row">\n                        <div class="col-md-4">\n                         <img src="${e.imagePath}" alt="" class="img-fluid"/>\n                        </div>\n                        <div class="col-md-8">\n                            <div class="card-block px-2">\n                                <h4 class="card-title">${e.title}</h4>\n                                <p class="card-text">${e.author}</p>\n                                <a href="" class="btn btn-danger delete" _id="${e._id}">X</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="card-footer">\n                        ${o=e.created_at,l(u(o,r&&r.relativeDate),d(a))}\n                    </div>\n                </div>\n            `,t.appendChild(n)})}async addNewBook(e){await m.createBook(e),this.clearBookForm(),this.renderBooks()}clearBookForm(){document.getElementById("book-form").reset()}renderMessage(e,t,n){const o=document.createElement("div");o.className=`alert alert-${t} message`,o.appendChild(document.createTextNode(e));const a=document.querySelector(".main-content"),r=document.querySelector("#book-form");a.insertBefore(o,r),setTimeout(()=>{document.querySelector(".message").remove()},1e3*n)}async deleteBook(e){await m.deleteBook(e),this.renderBooks()}async sendEmail(e){await f.sendEmail(e),this.clearEmailForm()}clearEmailForm(){document.getElementById("email-form").reset()}};document.addEventListener("DOMContentLoaded",()=>{p.renderBooks()}),document.getElementById("book-form").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("title").value,n=document.getElementById("author").value,o=document.getElementById("isbn").value,a=document.getElementById("image").files,r=new FormData;r.append("title",t),r.append("author",n),r.append("isbn",o),r.append("image",a[0]),p.addNewBook(r),p.renderMessage("Nuevo libro guardado","success",3),console.log(t,n,o,a)}),document.getElementById("books-cards").addEventListener("click",e=>{if(e.preventDefault(),e.target.classList.contains("delete")){const t=e.target.getAttribute("_id");p.deleteBook(t),p.renderMessage("Libro eliminado","danger",2)}}),document.getElementById("email-form").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("remitente").value,n=document.getElementById("asunto").value,o=document.getElementById("mensaje").value,a=new FormData;a.append("remitente",t),a.append("asunto",n),a.append("mensaje",o),p.sendEmail(a),p.renderMessage("Email guardado","success",3),console.log(t,n,o)})}]);
//# sourceMappingURL=bundle.js.map