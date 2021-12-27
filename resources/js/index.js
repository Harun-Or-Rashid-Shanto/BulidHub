// nav
function openNav(){
  document.getElementById("myNav").style.width="100%";
}
function closeNav(){
  document.getElementById("myNav").style.width="0%";
}
// carousel
$('.carousel').carousel({
    interval:2000,
    pause:'hover',
    keyboard:true,
    wrap:true
});
// aos animation
  AOS.init();
// counter

// waypoint
$(".waypoint-nav").waypoint(function(direction){
  if(direction == "down"){
    $("nav").addClass("sticky");
  }
  else{
    $("nav").removeClass("sticky")
  }
})