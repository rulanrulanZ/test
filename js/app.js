var newLocation;


$(document).ready(function(){

  //bring down menu
  $(".nav").animate({top:'0px'}, 600);



  setTimeout(function(){
  	$(".filter-opt.all").trigger('click');
  },100);



  $('.link').click(function() {

    event.preventDefault();

    linkLocation = this.href;

    $('body').fadeOut(1000, newpage);

  });

  function newpage() {

    window.location = linkLocation;

  }


  //scrolling effect
  var lastScrollPos = 0;
  var targetHeight = $(".intro").outerHeight();
  $(window).scroll(function() {

      var scrollPos = $(document).scrollTop();
      var calc = String(scrollPos/4);
      var scrollPercent = (targetHeight - scrollPos) / targetHeight;

      if(lastScrollPos < scrollPos) {
        
        $(".intro").css({
          transform: 'translate3d(0px,-'+calc+'px, 0)',
          opacity: scrollPercent
        });

      } 
      else {
        $(".intro").css({
          transform: 'translate3d(0px,-'+calc+'px, 0)',
          opacity: scrollPercent
        });
      }

      lastScrollPos = scrollPos;
  });





  //fade effect
  $('.main').css('display', 'none');

  $('.main').fadeIn(2000);


  //smooth scrolling
  $(function() {
    $('a[href*=#top]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 800);
          return false;
        }
      }
    });
  });


});










