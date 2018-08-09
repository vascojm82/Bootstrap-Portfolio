function centerNavList(){
  if($(window).width() < 981) { //559
     $(".nav-list").addClass("justify-content-center");
     $(".nav-list").removeClass("justify-content-end");
  }else{
    $(".nav-list").addClass("justify-content-end");
    $(".nav-list").removeClass("justify-content-center");
  }
}

$(document).ready(function(){
    centerNavList();
    console.log($(window).width());
});

$(window).resize(function(){
    centerNavList();
    console.log($(window).width());
});
