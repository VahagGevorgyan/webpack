(()=>{"use strict";let e=document.getElementById("new-task"),t=document.getElementsByTagName("button")[0],n=document.getElementById("incomplete-tasks"),l=function(){let t=function(e){let t=document.createElement("li"),n=document.createElement("input"),l=document.createElement("label"),o=document.createElement("input"),c=document.createElement("button"),i=document.createElement("button");return l.innerText=e,n.type="checkbox",o.type="text",c.innerText="Edit",c.className="edit",i.innerText="Delete",i.className="delete",t.appendChild(n),t.appendChild(l),t.appendChild(o),t.appendChild(c),t.appendChild(i),t}(e.value);n.appendChild(t),a(t,i),e.value=""},o=function(){let e=this.parentNode;console.log(this.parentNode);let t=e.querySelector("input[type=text]"),n=e.querySelector("label");e.classList.contains("editMode")?n.innerText=t.value:t.value=n.innerText,e.classList.toggle("editMode")},c=function(){let e=this.parentNode;e.parentNode.removeChild(e)},i=function(){console.log("Complete Task...");let e=this.parentNode;completedTasksHolder.appendChild(e),a(e,d)},d=function(){console.log("Incomplete Task...");let e=this.parentNode;n.appendChild(e),a(e,i)};t.onclick=l,t.addEventListener("click",l),t.addEventListener("click",(function(){console.log("AJAX Request")}));let a=function(e,t){console.log("bind list item events");let n=e.querySelector("input[type=checkbox]"),l=e.querySelector("button.edit"),i=e.querySelector("button.delete");l.onclick=o,i.onclick=c,n.onchange=t};for(let e=0;e<n.children.length;e++)a(n.children[e],i)})();