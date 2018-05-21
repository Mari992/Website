var waypoint = new Waypoint({
  element: document.getElementById('about-us'),
  handler: function(direction) {
    $(".meter > span").each(function() {
					$(this)
						.data("origWidth", $(this).width())
						.width(0)
						.animate({
							width: $(this).data("origWidth")
						}, 900);
				});
  }
})