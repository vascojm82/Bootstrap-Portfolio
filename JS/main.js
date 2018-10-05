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

    $( ".show-tooltip" ).tooltip({
      show: {
        effect: "slideDown",
        delay: 250
      },
      track:true
    });

    $( ".hide-tooltip" ).tooltip({
      hide: {
        effect: "explode",
        delay: 0
      },
      track:true
    });
});
$(window).resize(function(){
    centerNavList();
    console.log($(window).width());
});
