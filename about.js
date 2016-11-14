var myimage=document.getElementById("bilde");

var imageArray=["img/siham.jpg","img/lars.jpg","img/idriss.jpg","img/Portrett.jpg"];
var index=0;
function changeimage(){
  bilde.setAttribute("src" , imageArray[index]);
  index++;
  if(index>= imageArray.length){
    index=0;

  }
}
var inter=setInterval(changeimage, 3000);
bilde.onclick=function(){
  clearInterval(inter);
}
