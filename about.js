var myimage=document.getElementById("bilder");
var myName=document.getElementById("Navn");
var imageArray=["img/siham.jpg","img/lars.jpg","img/idriss.jpg","img/demo_4.png"];
var NameArray=[Siham,Lars,Idriss,Demo4];
var index=0;
function changeimage(){
  bilder.setAttribute("src" , imageArray[index]);
  index++;
  if(index>= imageArray.length){
    index=0;
  }
}
var inter=setInterval(changeimage, 3000);
Navn.onclick=function(){clearInterval(inter);
bilder.onclick=function(){
  clearInterval(inter);
}
