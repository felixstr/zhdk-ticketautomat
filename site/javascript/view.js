var View = {
	get: function(screen_name) {
		var result = null;
		
		switch(screen_name) {
			case 'start': 
				result = View_start;
			break;
			case 'via': 
				result = View_via;
			break;
			case 'option': 
				result = View_option;
			break;
			case 'date': 
				result = View_date;
			break;
			case 'summary': 
				result = View_summary;
			break;
			case 'pay': 
				result = View_pay;
			break;
			case 'static': 
				result = View_static;
			break;
		}
		
		if (result == null) {
			View_error.screen_name = screen_name;
			result = View_error;
		}
				
		return result;
	}
}


/**
* VIEW_START
*/
var View_start = {
	render: function() {
		var destination_button_text = "Zielort eingeben";
		var button_next = "";
		if (Controller.selected_options.destination != '') {
			var route = Controller.route[Controller.selected_options.destination];
			destination_button_text = route.name+' | Zielort ändern';
			
			button_next = "<button id='start_next'>weiter</button>";
		}
		// console.log(button_next);
		var result = "\
			<section id='start_wrapper'>\
				<section id='tabs'>\
					<ul>\
						<li class='current'><button id='tab_1'>Billette</button></li>\
						<li><button id='tab_2'>Spezial Billette</button></li>\
						<li><button id='tab_3'>Weiteres Angebot</button></li>\
					</ul>\
					<div class='tab current' id='tab_1_content'>\
						<h1>Bitte wählen Sie Ihre Strecke</h1>\
						<button id='start_departure'>Zürich HB | Abfahrtsort ändern</button>\
						<button id='start_destination'>"+destination_button_text+"</button>\
						"+button_next+"\
					</div>\
					<div class='tab' id='tab_2_content'>Spezial Billette</div>\
					<div class='tab' id='tab_3_content'>Weiteres Angebot</div>\
				</section>\
			</section>\
		";
		// console.log(result);
		return result;
	},
	
	render_information: function() {
		var result = "\
			<button id='start_keyboard_close'>schliessen</button>\
			<button id='start_keyboard_brig'>Brig</button>\
		";
			
		
		return result;
	},
	
	observe: function() {
		// tabs
		$('#tabs ul button').each(function(i, item) {
			Mobile.observe_button($(item), function() {
				$('.tab').removeClass('current');
				$('#'+$(item).attr('id')+'_content').addClass('current');
				
				$('#tabs ul li').removeClass('current');
				$(item).parent().addClass('current');
			});
		});
				
		// button observe
		Mobile.observe_button($('#start_next'), function() {
			Controller.next_screen();
		});
		Mobile.observe_button($('#start_destination'), function() {
			Controller.show_information();
		});
		
		Mobile.observe_button($('#start_keyboard_brig'), function() {
			Controller.selected_options.destination = 'brig';
			Controller.render_view('start', 'screen_active');
			Controller.hide_information();
		});
		Mobile.observe_button($('#start_keyboard_close'), function() {
			Controller.hide_information();
		});
	}
	
}

/**
* VIEW_VIA
*/
var View_via = {
	render: function() {
		var result = '';
		var current_route = Controller.get_route();
		result += "\
			<section class='content'>\
				<section class='ticket_selection'>\
					<h2>Ihre Auswahl</h2>\
					<div class='box'>\
						Zürich HB<br />"+current_route.name+"\
					</div>\
					<div class='box'>\
						via <span class='current_via'>"+current_route.via[Controller.selected_options.via]+"</span>\
					</div>\
				</selection>\
		";
		
		
		$(current_route.via).each(function(i, item) {
			result += "<button id='via_"+i+"' class='via_button "+(Controller.selected_options.via == i ? 'selected' : '')+"'>"+item+"</button>";
		});
		
		result += "\
				<button id='via_info'>Information zu den Vias</button>\
				<button id='via_different'>Anders Via wählen</button>\
		";
		
		result += "\
			</section>\
		";
		
		return result;
	},
	
	render_information: function() { 
		var result = 'via screen';
		result += "\
				<button id='via_info_back'>Zurück</button>\
		";
		return result;	
	},
	
	observe: function() {
		Controller.radio_button($('.via_button'), function(selected_i) {
			Controller.selected_options.via = selected_i;
			$('span.current_via').text(Controller.get_route().via[Controller.selected_options.via]);
		});
		
		Mobile.observe_button($('#via_info'), function() {
			Controller.show_information();
		});
		Mobile.observe_button($('#via_info_back'), function() {
			Controller.hide_information();
		});
		
		Mobile.observe_button($('#via_next'), function() {
			Controller.next_screen();
		});
		Mobile.observe_button($('#via_back'), function() {
			Controller.prev_screen();
		});
	}
	
}

/**
* VIEW_OPTION
*/
var View_option = {
	render: function() {
		var result = '';
		var current_route = Controller.get_route();
		result += "\
			<section class='content'>\
				<section class='ticket_selection'>\
					<h2>Ihre Auswahl</h2>\
					<div class='box'>\
						Zürich HB<br />"+current_route.name+"\
					</div>\
					<div class='box'>\
						via <span class='current_via'>"+current_route.via[Controller.selected_options.via]+"</span>\
					</div>\
					<div class='box'>\
						<div class='ticket_halbtax'><span class='ticket_halbtax_count'>"+Controller.selected_options.ticket_halbtax+"</span> x Halbtax / Kind</div>\
						<div class='ticket_normal'><span class='ticket_normal_count'>"+Controller.selected_options.ticket_normal+"</span> x Erwachsen</div>\
					</div>\
				</section>\
		";
		
		
		result += "\
				<div class='group_box ticket_count_halbtax_box'>\
					<div class='number ticket_halbtax_input'>"+Controller.selected_options.ticket_halbtax+"</div>\
					<button class='decrease' id='decrease_halbtax'>-</button>\
					<button class='increase' id='incerase_halbtax'>+</button>\
				</div>\
				<div class='group_box ticket_count_normal_box'>\
					<div class='number ticket_normal_input'>"+Controller.selected_options.ticket_normal+"</div>\
					<button class='decrease' id='decrease_normal'>-</button>\
					<button class='increase' id='incerase_normal'>+</button>\
				</div>\
		";
		
		result += "\
			</section>\
		";
		
		return result;
	},
	
	render_information: function() { return '';	},
	
	observe: function() {
		if (Controller.selected_options.ticket_halbtax == 0) {
			$('.ticket_halbtax').hide();
		}
		if (Controller.selected_options.ticket_normal == 0) {
			$('.ticket_normal').hide();
		}
		
		
		Controller.counter_element($('.ticket_count_halbtax_box'), function(count) {
			Controller.selected_options.ticket_halbtax = count;
			
			$('span.ticket_halbtax_count').text(Controller.selected_options.ticket_halbtax);

			if (Controller.selected_options.ticket_halbtax <= 0) {
				$('.ticket_halbtax').hide();
			} else {
				$('.ticket_halbtax').show();
			}
		});
		
		
		Controller.counter_element($('.ticket_count_normal_box'), function(count) {
			Controller.selected_options.ticket_normal = count;
			
			$('span.ticket_normal_count').text(Controller.selected_options.ticket_normal);
			
			if (Controller.selected_options.ticket_normal <= 0) {
				$('.ticket_normal').hide();
			} else {
				$('.ticket_normal').show();
			}
		});
	}
	
	
	
	
}

/**
* VIEW_OPTION
*/
var View_date = {
	render: function() {
		var result = 'date';
		return result;
	},
	
	render_information: function() { return '';	},
	
	observe: function() {
		
	}
	
}

/**
* VIEW_SUMMARY
*/
var View_summary = {
	render: function() {
		var result = 'summary 123';
		result += "\
			<button id='summary_pay'>Bezahlen</button>\
		";
		return result;
	},
	
	render_information: function() { return '';	},
	
	observe: function() {
		Mobile.observe_button($('#summary_pay'), function() {
			Controller.next_screen();
		});
	}
	
}

/**
* VIEW_PAY
*/
var View_pay = {
	render: function() {
		var result = 'pay';
		result += "\
			<button id='pay_cancel'>Abbrechen</button>\
		";
		return result;
	},
	
	render_information: function() { return '';	},
	
	observe: function() {
		Mobile.observe_button($('#pay_cancel'), function() {
			Controller.prev_screen();
		});
	}
	
}


/**
* VIEW_STATIC
*/
var View_static = {
	rendered: false,
	
	render: function() {
		var result = "";
		
		result = "\
		    <nav>\
		    	<button id='static_back'>zurück</button>\
		    	<button id='static_next'>weiter</button>\
		    </nav>\
		";
		
		return result;
	},
		
	controll: function() {
		if ($.inArray(Controller.current_screen, ['via', 'option', 'date']) > -1) {
			$('nav').show();
		} else if (Controller.current_screen == 'summary') {
			$('nav').show();
			$('#static_next').hide();
		} else {
			$('nav').hide();
		}
		
		Mobile.observe_button($('#static_next'), function() {
			Controller.next_screen();
		});
		Mobile.observe_button($('#static_back'), function() {
			Controller.prev_screen();
		});
	}
	
}

/**
* VIEW_ERROR
*/
var View_error = {
	screen_name: '',
	
	render: function() {
		return 'error: dieser screen gibt es nicht "'+this.screen_name+'"';
	},
	
	render_information: function() { return '';	},
	
	observe: function() {}
}
