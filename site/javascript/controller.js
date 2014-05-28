var Controller = {
	current_screen: 'via',
	screens: ['start', 'via', 'option', 'summary', 'pay'],
	
	route: {
		'brig': {
			'name': 'Brig',
			'via': ['Olten-Bern-Lötschberg', 'Göschenen', 'Olten-Bern oder Biel-Lausanne'],
			'price_1': 55.50,
			'price_2': 30.50
		}
	},
	
	selected_options: {
		destination: 'brig',
		via: 0,
		sbb_class: 2,
		back: false
	},
	
	init: function() {
		this.render_view(this.current_screen, 'screen_active');
				
		// verhindert das scrollen auf dem ipad
		document.ontouchmove = function(e) {
			e.preventDefault();
		}
	},
	
	next_screen: function() {
		var next_screen_name = this.get_next_screen_name();
		this.current_screen = next_screen_name;
		this.render_view(next_screen_name, 'screen_bottom');
		ScreenController.slideDown();
	},
	
	prev_screen: function() {
		var prev_screen_name = this.get_prev_screen_name();
		this.current_screen = prev_screen_name;
		this.render_view(prev_screen_name, 'screen_top');
		ScreenController.slideUp();
	},
	
	show_information: function() {
		ScreenController.slideInRight();
	},
	
	hide_information: function() {
		ScreenController.slideOutRight();
	},
	
	render_view: function(screen_name, screen_container_class) {
		// console.log(View.get(screen_name).render());
		var view_object = View.get(screen_name);
		$('.'+screen_container_class).html(view_object.render());
		$('#slideRightContainer').html('');
		$('#slideRightContainer').html(view_object.render_information());
		view_object.observe();	
		
		var static_site_object = View.get('static');
		if ($('#staticContainer').empty()) {
			$('#staticContainer').html(static_site_object.render());
		}
		static_site_object.controll();
	},
	
	get_next_screen_name: function() {
		var result; 
		var thiss = this;
		$.each(this.screens, function(i, item) {
			if (item == thiss.current_screen) {
				result = thiss.screens[i+1];
			}
		});
		
		return result;
	},
	
	get_prev_screen_name: function() {
		var result; 
		var thiss = this;
		$.each(this.screens, function(i, item) {
			if (item == thiss.current_screen) {
				result = thiss.screens[i-1];
			}
		});
		
		return result;
	},
	
	get_route: function() {
		return this.route[this.selected_options.destination];
	},
	
	radio_button: function($elements, callback) {
		$elements.each(function(i, item){
			$(item).click(function() {
				$elements.removeClass('selected');
				$(item).addClass('selected');
				callback(i);
			});
			
		});
	}
}