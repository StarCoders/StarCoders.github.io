$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:nth-child(8)')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
