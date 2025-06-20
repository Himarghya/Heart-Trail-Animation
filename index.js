var Mainbody = document.querySelector("body");
Mainbody.addEventListener("mousemove", (event) =>
{
   var xCoardinate = event.offsetX + "px";
   var yCoardinate = event.offsetY + "px";
   var span1 = document.createElement("span");
   var number = Math.ceil(Math.random() * 100);
   span1.style.height = number + "px";
   span1.style.width = number + "px";
   span1.style.left = xCoardinate;
   span1.style.top = yCoardinate;
   Mainbody.appendChild(span1);
   setTimeout(function(){
    Mainbody.removeChild(span1);
   },2000)
});