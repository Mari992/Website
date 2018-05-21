$(function() {
      $( 'ul.about-tabs li' ).on( 'click', function() {
            $( this ).parent().find( 'li.selected' ).removeClass( 'selected' );
            $( this ).addClass( 'selected' );
      });
});