(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){o&&(e=o);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(c)throw i}}}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.d({},{L:()=>d});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.todos=[]}var n,r,a;return n=e,(r=[{key:"nuevoTodo",value:function(e){this.todos.push(e)}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e}))}},{key:"marcaCompletado",value:function(e){var n,o=t(this.todos);try{for(o.s();!(n=o.n()).done;){var r=n.value;if(r.id==e){r.completado=!r.completado;break}}}catch(e){o.e(e)}finally{o.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado}))}}])&&o(n.prototype,r),a&&o(n,a),e}();var a=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date},i=document.querySelector(".todo-list"),l=document.querySelector(".new-todo"),c=document.querySelector(".clear-completed"),u=function(e){var t='<li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n    <div class="view">\n        <input class="toggle" type="checkbox" ').concat(e.completado?"checked":"",">\n        <label>").concat(e.tarea,'</label>\n        <button class="destroy"></button>\n    </div>\n    <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,i.append(n.firstElementChild),n.firstElementChild};l.addEventListener("keyup",(function(e){if(13===e.keyCode&&l.value.length>0){var t=new a(l.value);d.nuevoTodo(t),console.log(d),u(t),l.value=""}})),i.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,o=n.getAttribute("data-id");t.includes("input")?(d.marcaCompletado(o),n.classList.toggle("completed")):t.includes("button")&&(d.eliminarTodo(o),i.removeChild(n)),console.log(d)})),c.addEventListener("click",(function(){d.eliminarCompletados();for(var e=i.children.length-1;e>=0;e--){var t=i.children[e];1==t.classList.contains("completed")&&i.removeChild(t)}}));var d=new r,s=new a("Aprender JavaScript");d.nuevoTodo(s),console.log(d),u(s)})();