var Mobile = {
	mobile: false,
	ios: false,
	webappStandalone: false,
	
	init: function() {
		this.mobile = ('ontouchstart' in document.documentElement);		
		this.ios = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		this.webappStandalone = window.navigator.standalone != undefined && window.navigator.standalone;
	},
	
	observe_button: function(element, callback) {
		// console.log('element', element);
		if (this.mobile) {			
			var startX = 0;
			var startY = 0;
			var reset = false;
			element.on('touchstart', function(e){
				e.stopPropagation();
				element.addClass('touch');
				// console.log(e.originalEvent);
				startX = e.originalEvent.touches[0].clientX;
				startY = e.originalEvent.touches[0].clientY;
				reset = false				
			});
			element.on('touchmove', function(e){
				moved = true;
				if (reset) {
					element.removeClass('touch');
				} else {
					if (Math.abs(e.originalEvent.touches[0].clientX - startX) > 20 || Math.abs(e.originalEvent.touches[0].clientY - startY) > 20) {
						reset = true;
					}
				}
			});
			element.on('touchend', function() {
				element.removeClass('touch');
				if (!reset) {
					console.log('mobile', element);
					callback(element);
				}				
			});
		} else {
			element.on('mousedown', function(){
				element.addClass('active');
			});
			element.on('mouseout', function(){
				element.removeClass('active');
			});
			element.on('mouseup', function(){
				element.removeClass('active');
			});
			element.on('click', callback);
		}
		
		return element;
	}
}