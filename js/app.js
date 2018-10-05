$(document).ready(function() {
  $(".slider").slider({
    indicators: false,
    height: 700,
    transition: 200,
    interval: 4000
  });
  $(".sidenav").sidenav();
  $(".sidenav li").click(() => {
    $(".sidenav").sidenav("close");
  });

  $(".carousel").carousel({
    dist: 0,
    padding: 0,
    // fullWidth: true,
    indicators: true,
    duration: 100
  });
  setTimeout(autoplay, 7000);
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 7000);
  }
  $(".modal").modal();
  $(".scrollspy").scrollSpy({
    scrollOffset: 75
  });
});
