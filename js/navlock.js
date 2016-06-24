$(window).scroll(function(){
  // $('#nav_wrapper').toggleClass('scrolling', $(window).scrollTop() > $('#header').offset().top);

  //can be rewritten long form as:
  var scrollPosition, headerOffset, isScrolling;
  scrollPosition = $(window).scrollTop();
  headerOffset = $('#header').offset().top;
  isScrolling = scrollPosition > headerOffset;
  $('#nav_wrapper').toggleClass('scrolling', isScrolling);
});
