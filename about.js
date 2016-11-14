var myimage=document.getElementById("bilder");

var imageArray=["img/siham.jpg","img/lars.jpg","img/idriss.jpg","img/Portrett.jpg"];
var index=0;
function changeimage(){
  bilder.setAttribute("src" , imageArray[index]);
  index++;
  if(index>= imageArray.length){
    index=0;

  }
}
var inter=setInterval(changeimage, 3000);
bilder.onclick=function(){
  clearInterval(inter);
}
