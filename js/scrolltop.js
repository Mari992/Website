//Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    return false;

  }); // click() scroll top EMD