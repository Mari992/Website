$(function() {
				var $section = $('#fun_facts');

				 function startCounter() {
				 	$('.count').each(function () {
            			var $this = $(this);
            		jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                		duration: 3000,
                		easing: 'swing',
                		step: function () {
                    		$this.text(Math.ceil(this.Counter));
                			}
            		});
        			});
			}


		$(document).bind('scroll', function(ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $section.offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            startCounter();
            // unbind event not to load scrolls again
            $(document).unbind('scroll');
        }
    });

		});

