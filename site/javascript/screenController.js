var ScreenController = {
	
	init: function() {
		
	},
	
	slideDown: function() {
		$('body').addClass('slideDown');

		$('section#slideContainer').on('webkitTransitionEnd', function(item) {
			// console.log('juhu', item);
			if ($('body').hasClass('slideDown')) {
				$('body').removeClass('slideDown');
				
				if ($('#screen_1').hasClass('screen_top')) {
					$('#screen_1').removeClass('screen_top').addClass('screen_bottom');
				} else if ($('#screen_1').hasClass('screen_active')) {
					$('#screen_1').removeClass('screen_active').addClass('screen_top');
				} else if ($('#screen_1').hasClass('screen_bottom')) {
					$('#screen_1').removeClass('screen_bottom').addClass('screen_active');
				}
				
				if ($('#screen_2').hasClass('screen_top')) {
					$('#screen_2').removeClass('screen_top').addClass('screen_bottom');
				} else if ($('#screen_2').hasClass('screen_active')) {
					$('#screen_2').removeClass('screen_active').addClass('screen_top');
				} else if ($('#screen_2').hasClass('screen_bottom')) {
					$('#screen_2').removeClass('screen_bottom').addClass('screen_active');
				}
				
				if ($('#screen_3').hasClass('screen_top')) {
					$('#screen_3').removeClass('screen_top').addClass('screen_bottom');
				} else if ($('#screen_3').hasClass('screen_active')) {
					$('#screen_3').removeClass('screen_active').addClass('screen_top');
				} else if ($('#screen_3').hasClass('screen_bottom')) {
					$('#screen_3').removeClass('screen_bottom').addClass('screen_active');
				}
				
				
				$('.screen_active').after($('.screen_bottom'));
			}
			
		});
		
	},
	
	slideUp: function() {
		$('body').addClass('slideUp');

		$('section#slideContainer').on('webkitTransitionEnd', function(item) {
			// console.log('juhu', item);
			if ($('body').hasClass('slideUp')) {
				$('body').removeClass('slideUp');
				
				if ($('#screen_1').hasClass('screen_top')) {
					$('#screen_1').removeClass('screen_top').addClass('screen_active');
				} else if ($('#screen_1').hasClass('screen_active')) {
					$('#screen_1').removeClass('screen_active').addClass('screen_bottom');
				} else if ($('#screen_1').hasClass('screen_bottom')) {
					$('#screen_1').removeClass('screen_bottom').addClass('screen_top');
				}
				
				if ($('#screen_2').hasClass('screen_top')) {
					$('#screen_2').removeClass('screen_top').addClass('screen_active');
				} else if ($('#screen_2').hasClass('screen_active')) {
					$('#screen_2').removeClass('screen_active').addClass('screen_bottom');
				} else if ($('#screen_2').hasClass('screen_bottom')) {
					$('#screen_2').removeClass('screen_bottom').addClass('screen_top');
				}
				
				if ($('#screen_3').hasClass('screen_top')) {
					$('#screen_3').removeClass('screen_top').addClass('screen_active');
				} else if ($('#screen_3').hasClass('screen_active')) {
					$('#screen_3').removeClass('screen_active').addClass('screen_bottom');
				} else if ($('#screen_3').hasClass('screen_bottom')) {
					$('#screen_3').removeClass('screen_bottom').addClass('screen_top');
				}
				
				
				$('.screen_active').before($('.screen_top'));
			}
			
		});
		
	},
	
	slideInRight: function() {
		$('body').addClass('slideInRight');
	},
	
	slideOutRight: function() {
		$('body').removeClass('slideInRight');
	}
	
}