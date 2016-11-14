var myimage=document.getElementById("bilder");
var myimage=document.getElementById("navn");
var imageArray=["img/siham.jpg","img/lars.jpg","img/idriss.jpg","img/demo_4.png"];
var navnArray=["Siham","Lars","Idriss","img/demo_4.png"];
var index=0;
var ind=0;
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
function changenavn(){
  navn.setAttribute("src" , navnArray[ind]);
  ind++;
   if(ind>= navnArray.length){
    ind=0;

  }
}
var inter=setInterval(changenavn, 3000);
navn.onclick=function(){
  clearInterval(inter);
}
