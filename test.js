var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
function inputlength(){
	return input.value.length;
}
function createlistelement()
{
	var li=document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value=""
}
function addListAfterClick()
{
	if(inputlength()>0)
		createlistelement();
}
function addListAfterkeypress(event)
{
	if(inputlength()>0&&event.keyCode===13)
		createlistelement();
}
button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress",addListAfterkeypress);
