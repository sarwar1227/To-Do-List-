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
button.addEventListener("click",function(){
	if(inputlength()>0)
		createlistelement()
})
input.addEventListener("keypress",function(event){
	if(inputlength()>0&&event.keyCode===13)
		createlistelement()
})