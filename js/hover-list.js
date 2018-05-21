jQuery('select[name*="price-value-list"] option').hover(
        function() {
            jQuery(this).addClass('highlight');
        }, function() {
            jQuery(this).removeClass('highlight');
        }
    );