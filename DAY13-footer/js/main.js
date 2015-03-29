(function($){
	$('#unb > ul > li > a:contains(English)').on('click', function(e) {
	  e.preventDefault();
	  $(this).next().css('display', 'block');
	})
})(window.jQuery);