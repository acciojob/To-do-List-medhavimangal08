//your code here
let btn=document.querySelector("#addTodoBtn")
let text=document.querySelector("#newTodoInput")
let orderlist=document.querySelector("#todoList")
btn.addEventListener("click", list)
function list() {
	if(text.value!=="") {
		let l = document.createElement("li");
		l.innerText = text.value;
		orderlist.appendChild(l);
		text.value = "";
	}
}