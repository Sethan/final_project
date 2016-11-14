var myimage=document.getElementById("BilderAvOss");

var imageArray=["img/siham.jpg","img/lars.jpg","img/idriss.jpg","img/Portrett.jpg"];
var navnArray=["Siham","Lars","Idriss","img/demo_4.png"];
var index=0;

function changeimage(){
  BilderAvOss.setAttribute("src" , imageArray[index]);
  index++;
  if(index>= imageArray.length){
    index=0;

  }
}
var inter=setInterval(changeimage, 3000);
BilderAvOss.onclick=function(){
  clearInterval(inter);
}
