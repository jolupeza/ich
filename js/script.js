var j = jQuery.noConflict();

(function($){
	var $body = j('body'),
		$window = j(window);

	j(document).on('ready', function(){
		j('#js-display-text').on('click', function(ev){
			ev.preventDefault();

			var $this = j(this);
			var icon = $this.find('span');
			var about = j('.About');

			if($this.hasClass('active')) {
				about.fadeOut('slow', function() {
					icon.css('background-position', '-75px 0');
					$this.removeClass('active');
				});
			} else {
				about.fadeIn('slow', function(){
					icon.css('background-position', '-75px -22px');
					$this.addClass('active');
				});
			}
		});
	});
})(jQuery);