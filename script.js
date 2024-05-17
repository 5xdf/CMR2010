function topNavOpen() {
  // window.alert("open");
  document.getElementById("home").style.opacity = "1";
  document.getElementById("contact").style.opacity = "1";
  document.getElementById("about").style.opacity = "1";
    document.getElementById("home").style.padding = "14px 16px";
  document.getElementById("contact").style.padding = "14px 16px";
  document.getElementById("about").style.padding = "14px 16px";
        document.getElementById("home").style.fontSize = "17px";
 document.getElementById("contact").style.fontSize = "17px";
 document.getElementById("about").style.fontSize = "17px";

}
function topNavClose() {
  document.getElementById("home").style.opacity = "0";
  document.getElementById("contact").style.opacity = "0";
  document.getElementById("about").style.opacity = "0";
    document.getElementById("home").style.padding = "14px 0px";
  document.getElementById("contact").style.padding = "14px 0px";
  document.getElementById("about").style.padding = "14px 0px";
      document.getElementById("home").style.fontSize = "0px";
 document.getElementById("contact").style.fontSize = "0px";
 document.getElementById("about").style.fontSize = "0px";
}
window.addEventListener('scroll', doParallax);
function doParallax(){
   var positionY = window.pageYOffset/2;
   document.body.style.backgroundPosition = "0 -" + positionY + "px";
}