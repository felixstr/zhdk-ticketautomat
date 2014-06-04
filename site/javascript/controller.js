var Controller = {
	current_screen: 'screensaver',
	last_screen: '',
	screens: ['screensaver', 'start', 'via', 'option', 'date', 'summary', 'pay'],
	
	route: {
		'brig': {
			'name': 'Brig',
			'via': [
				{
					'name': 'Olten-Bern-Lötschberg',
					'price_1': 147.00,
					'price_2': 84.00,
					'top': true
				},
				{
					'name': 'Göschenen',
					'price_1': 133.00,
					'price_2': 76.00,
					'top': true
				},
				{
					'name': 'Olten-Bern oder Biel-Lausanne',
					'price_1': 174.00,
					'price_2': 99.00,
					'top': false
				}
			],
			schedule: [
				{ 'via': 0, 'time': '08:32', 'duration': '2:08', 'change': 1 },
				{ 'via': 0, 'time': '09:02', 'duration': '2:09', 'change': 0 },
				{ 'via': 2, 'time': '09:04', 'duration': '3:58', 'change': 1 },
				{ 'via': 1, 'time': '09:09', 'duration': '4:31', 'change': 2 },
				{ 'via': 0, 'time': '10:02', 'duration': '2:09', 'change': 0 },
				{ 'via': 2, 'time': '10:04', 'duration': '3:58', 'change': 2 },
				{ 'via': 1, 'time': '10:09', 'duration': '4:31', 'change': 1 }
			]
		},
		'davos-platz': {
			'name': 'Davos Platz',
			'via': [
				{
					'name': 'Landquart',
					'price_1': 93.00,
					'price_2': 53.00,
					'top': true
				},
				{
					'name': 'Rorschach-Landquart',
					'price_1': 125.00,
					'price_2': 71.00
				}
			],
			schedule: [
				{ 'via': 0, 'time': '08:37', 'duration': '1:13', 'change': 0 },
				{ 'via': 1, 'time': '08:40', 'duration': '1:44', 'change': 3 }
			]
		},
		'kreuzlingen': {
			'name': 'Kreuzlingen',
			'via': [
				{
					'name': 'Weinfelden',
					'price_1': 53.00,
					'price_2': 30.00,
					'top': true
				},
				{
					'name': 'Schaffhausen',
					'price_1': 53.00,
					'price_2': 30.00,
					'top': false
				},
				{
					'name': 'Stein am Rhein',
					'price_1': 53.00,
					'price_2': 30.00,
					'top': false
				}
			],
			schedule: [
				{ 'via': 0, 'time': '08:37', 'duration': '1:13', 'change': 0 },
				{ 'via': 1, 'time': '08:40', 'duration': '1:44', 'change': 3 },
				{ 'via': 2, 'time': '08:48', 'duration': '1:38', 'change': 2 },
				{ 'via': 0, 'time': '09:07', 'duration': '1:21', 'change': 1 },
				{ 'via': 0, 'time': '09:37', 'duration': '1:13', 'change': 0 },
				{ 'via': 1, 'time': '09:40', 'duration': '1:44', 'change': 3 }
			]
		}
	},
	
	destinations: [
		{ key: 'bern', name: 'Bern' },
		{ key: 'basel', name: 'Basel' },
		{ key: 'baden', name: 'Baden' },
		{ key: 'bellinzona', name: 'Bellinzona' },
		{ key: 'baar', name: 'Baar' },
		{ key: 'bad-ragaz', name: 'Bad Ragaz' },
		{ key: 'brienz', name: 'Brienz' },		
		{ key: 'brienz-west', name: 'Brienz West' },		
		{ key: 'brienzwiler', name: 'Brienzwiler' },		
		{ key: 'brig', name: 'Brig' },
		{ key: 'brüttelen', name: 'Brüttelen' },
		{ key: 'bubikon', name: 'Bubikon' },		
		{ key: 'buelach', name: 'Bülach' },
		{ key: 'davos-dorf', name: 'Davos Dorf' },
		{ key: 'davos-platz', name: 'Davos Platz' },		
		{ key: 'dietikon', name: 'Dietikon' },		
		{ key: 'disentis-muster', name: 'Disentis Mustér' },
		{ key: 'aadorf', name: 'Aadorf' },
		{ key: 'celerina', name: 'Celerina' },
		{ key: 'effretikon', name: 'Effretikon' },
		{ key: 'frauenfeld', name: 'Frauenfeld' },
		{ key: 'giswil', name: 'Giswil' },
		{ key: 'hallwil', name: 'Hallwil' },
		{ key: 'interlaken', name: 'Interlaken Ost' },
		{ key: 'jona', name: 'Jona' },
		{ key: 'laufen', name: 'Laufen' },
		{ key: 'martigny', name: 'Martigny' },
		{ key: 'naters', name: 'Naters' },
		{ key: 'ostermundigen', name: 'Ostermundigen' },
		{ key: 'pontarlier', name: 'Pontarlier' },
		{ key: 'quartino', name: 'Quartino' },
		{ key: 'rheinfelden', name: 'Rheinfelden' },
		{ key: 'sargans', name: 'Sargans' },
		{ key: 'st-gallen', name: 'St. Gallen' },
		{ key: 'thalwil', name: 'Thalwil' },
		{ key: 'urdorf', name: 'Urdorf' },
		{ key: 'vevey', name: 'Vevey' },
		{ key: 'wädenswil', name: 'Wädenswil' },
		{ key: 'winterthur', name: 'Winterthur' },
		{ key: 'yverdon', name: 'Yverdon les Bains' },
		{ key: 'zermatt', name: 'Zermatt' },
		{ key: 'kilchberg', name: 'Kilchberg' },
		{ key: 'kaltbrunn', name: 'Kaltbrunn' },
		{ key: 'krummenau', name: 'Krummenau' },
		{ key: 'kreuzlingen', name: 'Kreuzlingen' },
		{ key: 'kreuzstrasse', name: 'Kreuzstrasse' },
		{ key: 'xion', name: 'Xion' }
	],
	
	selected_options_default: {
		destination: '',
		via: false,
		via_special: false,
		ticket_halbtax: 0,
		ticket_normal: 0,
		sbb_class: false,
		back: false,
		date_today: false
	},
	
	selected_options: {},
	
	init: function() {
		this.preload_images();
	
		this.selected_options = this.selected_options_default;
		this.selected_options = jQuery.extend(true, {}, this.selected_options_default);
		this.render_view(this.current_screen, 'screen_active');
				
		// verhindert das scrollen auf dem ipad
		document.ontouchmove = function(e) {
			e.preventDefault();
		}
	},
	
	reset: function() {
		$('body').removeClass('scroll-forward');
		$('body').removeClass('scroll-backward');
		
		this.last_screen = this.current_screen;
		$('body').removeClass('screen-'+this.last_screen);
		$('body').addClass('screen-'+this.current_screen);
		
		this.current_screen = 'start';
		this.selected_options = jQuery.extend(true, {}, this.selected_options_default);
		this.render_view(this.current_screen, 'screen_active');
	},
	
	next_screen: function(effect) {
		if (effect == undefined) { effect = true; }
		$('body').removeClass('scroll-forward');
		$('body').removeClass('scroll-backward');
		$('body').addClass('scroll-forward');
		
		var next_screen_name = this.get_next_screen_name();
		this.last_screen = this.current_screen;
		this.current_screen = next_screen_name;

		if (effect) {
			this.render_view(next_screen_name, 'screen_bottom');
			ScreenController.slideDown();
		} else {
			this.render_view(next_screen_name, 'screen_active');
		}
	},
	
	prev_screen: function() {
		$('body').removeClass('scroll-forward');
		$('body').removeClass('scroll-backward');
		$('body').addClass('scroll-backward');
		
		var prev_screen_name = this.get_prev_screen_name();
		this.last_screen = this.current_screen;
		this.current_screen = prev_screen_name;
		this.render_view(prev_screen_name, 'screen_top');
		ScreenController.slideUp();
	},
	
	show_information: function(type) {
		$('#slideRightContainer > div').hide();
		$('#slideRightContainer > #'+type).show();
		ScreenController.slideInRight();
	},
	
	hide_information: function() {
		ScreenController.slideOutRight();
	},
	
	render_view: function(screen_name, screen_container_class) {
		$('body').removeClass('screen-'+this.last_screen);
		$('body').addClass('screen-'+screen_name);
		// console.log(View.get(screen_name).render());
		var view_object = View.get(screen_name);
		$('.'+screen_container_class).html(view_object.render());
		$('#slideRightContainer div').html('');
		$('#slideRightContainer div#tool').html(view_object.render_tool());
		$('#slideRightContainer div#information').html(view_object.render_information());
		view_object.observe();	
		
		var static_site_object = View.get('static');
		if ($('#staticContainer').html() == '') {
			$('#staticContainer').html(static_site_object.render());
			$('footer').html(static_site_object.render_footer());
			$('header').html(static_site_object.render_header());
			static_site_object.controll_static();
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
	
	get_schedule: function() {
		var result = $([]);
		var route = this.get_route();
		$(route.schedule).each(function(i, item) {
			if (i < 6) {
				item.via_name = route.via[item.via].name;
				result.push(item);
			}
		});
		// console.log(result);
		return result;
	},
	
	get_step_nr: function() {
		return $.inArray(this.current_screen, this.screens);
	},
	
	radio_button: function($elements, callback) {
		$elements.each(function(i, item){
			Mobile.observe_button($(item), function() {
				$elements.removeClass('selected');
				$(item).addClass('selected');
				callback(i);
			});
			
		});
	},
	
	counter_element: function($element, callback) {
		var count = $element.find('div.number').text();
		
		$element.removeClass('empty');
		if (count == 0){ 
		    $element.addClass('empty');
		}
		
		Mobile.observe_button($element.find('button.decrease'), function() {
			if (count > 0){
				count--;
				$element.find('div.number').text(count);
				callback(count);
			} 
			
			$element.removeClass('empty');
			if (count == 0){ 
				$element.addClass('empty');
			}
		});
		Mobile.observe_button($element.find('button.increase'), function() {
			count++;
			$element.find('div.number').text(count);
			callback(count);
			
			$element.removeClass('empty');
			if (count == 0){ 
				$element.addClass('empty');
			}
		});
		
		
	},
	
	get_total: function() {
		var route = this.get_route();
		var via = route.via[this.selected_options.via];
	
		var price = {
			chf: 0,
			euro: 0
		};
		
		if (via) {
			if (this.selected_options.sbb_class == 1) {
				price.chf += (this.selected_options.ticket_halbtax*via.price_1)/2;
				price.chf += (this.selected_options.ticket_normal*via.price_1);
				
			} else {
				price.chf += (this.selected_options.ticket_halbtax*via.price_2)/2;
				price.chf += (this.selected_options.ticket_normal*via.price_2);
			}
	
			if (this.selected_options.back) {
				price.chf *= 2;
			}
			
			price.euro = (price.chf * 0.819).toFixed(2);
			price.chf = (price.chf).toFixed(2);
		}
		
		return price;
	},
	
	get_suggestions: function(input) {
		var result = [];
		$(this.destinations).each((function(i, item) {
			if (input.toLowerCase() == item.name.substr(0, input.length).toLowerCase()) {
			    item.route = false;
			    if (this.route[item.key] != undefined) {
			    	item.route = true;
			    }
			    result.push(item);
			}
		}).bind(this));
		
		// console.log(result);
		return result;
	},
	
	preload_images: function() {
	
		var images = [
			'bg_start2-werbung.jpg',
			'bg_start2.jpg',
			'einfach.svg',
			'einfachklein.svg',
			'icon_bar.svg',
			'icon_delete.svg',
			'icon_karte.svg',
			'minus.svg',
			'plus.svg',
			'retour.svg',
			'retourklein.svg',
			'sbb-logo.png'
		];
		$(images).each(function(i, item) {
			var image = new Image();
			image.onload = function() {
				// console.log(item);
			}
			image.src = 'view/image/'+item;
		});
		
	}
}