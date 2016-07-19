var whatTop = document.querySelector('body').scrollTop;


window.onscroll = function(){
   document.querySelector('header').style.backgroundPosition = "0px " + (whatTop*-1) + "px";
};
