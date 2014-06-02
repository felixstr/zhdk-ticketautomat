var View = {
	get: function(screen_name) {
		var result = null;
		
		if (screen_name == undefined) {
			screen_name = Controller.current_screen;
		}
		
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
		var destination_button = "<div class='button_wrap button_h_s button_t_normal button_w_l'><button id='start_destination'>Zielort wählen</button></div>";
		var button_next = "";
		if (Controller.selected_options.destination != '') {
			var route = Controller.route[Controller.selected_options.destination];
			destination_button = "\
				<div class='value'>"+route.name+"</div>\
				<div class='button_wrap button_h_s button_t_normal button_w_a'><button id='start_destination'>Ändern</button></div>\
			";
		
			button_next = "<div class='button_wrap button_h_s button_t_important button_w_m'><button id='start_next'>Weiter</button></div>";
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
						<div class='box_left'>\
							<label>Von</label>\
							<div class='button_container'>\
								<div class='input'>\
									<div class='value'>Zürich HB</div>\
									<div class='button_wrap button_h_s button_t_normal button_w_a'><button id='start_departure'>Ändern</button></button></div>\
								</div>\
							</div>\
						</div>\
						<div class='box_right'>\
							<label>Nach</label>\
							<div class='button_container'>\
								<div class='input'>\
									"+destination_button+"\
								</div>\
							</div>\
						</div>\
						<div class='box_bottom'>\
							"+button_next+"\
						</div>\
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
			<button id='start_information_close'>schliessen</button>\
		";
			
		return result;
	},
	
	render_tool: function() {
		var result = "\
			<section class='keyboard_top'>\
				<h1>Bitte Zielort eingeben</h1>\
				<div class='textfield'><span class='input'></span><span class='line'>|</span></div>\
				<div class='top_destination'>\
					<label>Am häufigsten benutzte Zielorte</label>\
					<div class='button_wrap button_h_m button_w_l button_t_normal'><button>Bern</button></div>\
					<div class='button_wrap button_h_m button_w_l button_t_normal'><button>Basel</button></div>\
					<div class='button_wrap button_h_m button_w_l button_t_normal'><button>Luzern</button></div>\
				</div>\
				<div class='result'></div>\
			</section>\
			<section class='keyboard_bottom'>\
				<div class='row row_1'>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_q'>Q</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_w'>W</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_e'>E</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_r'>R</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_t'>T</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_z'>Z</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_u'>U</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_i'>I</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_o'>O</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_p'>P</button></div>\
				</div>\
				<div class='row row_2'>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_a'>A</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_s'>S</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_d'>D</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_f'>F</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_g'>G</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_h'>H</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_j'>J</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_k'>K</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_l'>L</button></div>\
				</div>\
				<div class='row row_3'>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_y'>Y</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_x'>X</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_c'>C</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_v'>V</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_b'>B</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_n'>N</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_m'>M</button></div>\
					<div class='button_wrap button_h_m button_w_s button_t_key'><button class='char char_dot'>.</button></div>\
					<div class='button_wrap button_h_m button_w_m button_t_key'><button class='del'>del</button></div>\
				</div>\
				<div class='row row_4'>\
					<div class='button_wrap button_h_m button_t_key button_w_l'><button class='char char_space'>Leerzeichen</button></div>\
				</div>\
				<div class='button_wrap button_h_s button_t_normal button_w_a'><button id='start_keyboard_close'>Abbrechen</button></div>\
			</section>\
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
		
		
		Mobile.observe_button($('#start_information_close'), function() {
			Controller.hide_information();
		});
		
		Mobile.observe_button($('#start_destination'), function() {
			Controller.show_information('tool');
		});
		
		
		// keyboard
		Mobile.observe_button($('#start_keyboard_close'), function() {
			Controller.hide_information();
			$('.keyboard_top .textfield .input').text('');
		});
		
		$('.keyboard_top .result').hide();
		
		this.update_keyboard();
		
		$('.keyboard_bottom .row button').each((function(i, item) {
			Mobile.observe_button($(item), (function() {
				if (!$(item).hasClass('inactive')) {
					var text = $('.keyboard_top .textfield .input').text();
					
					if ($(item).text() == 'del') {
						text = text.substring(0, text.length - 1);
					} else if ($(item).text() == 'Leerzeichen') {
						text += ' ';
					} else {
						text += $(item).text();
					}
					$('.keyboard_top .textfield .input').text(text);
					
					this.update_keyboard();
					
					
					if ($('.keyboard_top .textfield .input').text() == '') {
						$('.keyboard_top .result').hide();
						$('.keyboard_top .top_destination').show();
					} else {
						$('.keyboard_top .result').show();
						$('.keyboard_top .top_destination').hide();
						$('.keyboard_top .result').text('');
						// result suggestions
						var suggestions = Controller.get_suggestions($('.keyboard_top .textfield .input').text());
						console.log(suggestions);
						
						$(suggestions).each(function(i, item) {
							if (i < 3) {
								$('.keyboard_top .result').append('<div class="button_wrap button_h_m button_w_l button_t_normal"><button id="start_keyboard_'+item.key+'">'+item.name+'</button></div>');
						
								if (item.route) {
									Mobile.observe_button($('#start_keyboard_'+item.key), function() {
									    Controller.selected_options.destination = item.key;
									    Controller.selected_options.via = 0;
									    Controller.render_view('start', 'screen_active');
									    Controller.hide_information();
									});
								}
							
							}
						});
											
						
					}
				}
			}).bind(this));
		}).bind(this));
		
		
	},
	
	update_keyboard: function() {
		var input_text = $('.keyboard_top .textfield .input').text();
		var suggestions = Controller.get_suggestions($('.keyboard_top .textfield .input').text());
		var keys = [];
		$(suggestions).each(function(i, item) {
			keys.push(item.name.charAt(input_text.length).toLowerCase());
		});
		$.unique(keys);
		console.log(keys);
		$('.keyboard_bottom .char').addClass('inactive');
		$(keys).each(function(i, item) {
			if (item == '.') { item = 'dot'; }
			if (item == ' ') { item = 'space'; }
			$('.char_'+item).removeClass('inactive');
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
			<section class='content_left'>\
				<h1>Bitte wählen Sie Ihren Reiseweg</h1>\
				<label>Fahrstrecke via</label>\
				<div class='button_container'>\
		";
		
		
		$(current_route.via).each(function(i, item) {
			result += "<div class='button_wrap button_h_m button_t_normal button_w_l'><button id='via_"+i+"' class='via_button "+(Controller.selected_options.via == i ? 'selected' : '')+"'>via "+item.name+"</button></div>";
		});
		
		result += "\
					<div id='button_via_info' class='button_wrap button_h_s button_t_second button_w_m2'><button id='via_info'>Information zu den Vias</button></div>\
					<div id='button_different_via' class='button_wrap button_h_m button_t_normal button_w_l'><button id='via_different'>Anders Via wählen</button></div>\
				</div>\
		";
		
		result += "\
			</section>\
		";
		
		return result;
	},
	
	render_tool: function() { 
		var result = 'via screen';
		result += "\
				<div class='button_wrap button_h_s button_t_normal button_w_a'><button id='via_tool_back'>Schliessen</button></div>\
		";
		return result;
	},
	
	render_information: function() { 
		var result = 'via help';
		result += "\
				<div class='button_wrap button_h_s button_t_normal button_w_a'><button id='via_info_back'>Schliessen</button></div>\
		";
		return result;	
	},
	
	observe: function() {
		Controller.radio_button($('.via_button'), function(selected_i) {
			Controller.selected_options.via = selected_i;
			$('span.cart_via').text(Controller.get_route().via[Controller.selected_options.via].name);
			View_static.render_total();
		});
		
		Mobile.observe_button($('#via_info'), function() {
			Controller.show_information('tool');
		});
		Mobile.observe_button($('#via_info_back'), function() {
			Controller.hide_information();
		});
		Mobile.observe_button($('#via_tool_back'), function() {
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
		result += "\
			<section class='content_left'>\
				<h1>Bitte wählen Sie Ihre Optionen</h1>\
		";
		
		
		result += "\
				<div class='box_left'>\
					<label>Anzahl Billette<br />Erwachsen mit Halbtax/Kind</label>\
					<div class='button_container'>\
						<div class='group_box ticket_count_halbtax_box'>\
							<div class='button_wrap button_h_m button_t_normal button_w_s'><button class='decrease' id='decrease_halbtax'>-</button></div>\
							<div class='number ticket_halbtax_input'>"+Controller.selected_options.ticket_halbtax+"</div>\
							<div class='button_wrap button_h_m button_t_normal button_w_s'><button class='increase' id='incerase_halbtax'>+</button></div>\
						</div>\
					</div>\
				</div>\
				<div class='box_right'>\
					<label>Anzahl Billette<br />Erwachsene ohne Halbtax</label>\
					<div class='button_container'>\
						<div class='group_box ticket_count_normal_box'>\
							<div class='button_wrap button_h_m button_t_normal button_w_s'><button class='decrease' id='decrease_normal'>-</button></div>\
							<div class='number ticket_normal_input'>"+Controller.selected_options.ticket_normal+"</div>\
							<div class='button_wrap button_h_m button_t_normal button_w_s'><button class='increase' id='incerase_normal'>+</button></div>\
						</div>\
					</div>\
				</div>\
		";
		result += "\
				<div class='box_left'>\
					<label>Fahrart</label>\
					<div class='button_container radio_group'>\
						<div class='button_wrap button_h_m button_t_normal button_w_m'><button class='direction_button "+(Controller.selected_options.back == false ? 'selected' : '')+"' id='option_direction_easy'>--></button></div>\
						<div class='button_wrap button_h_m button_t_normal button_w_m'><button class='direction_button "+(Controller.selected_options.back == true ? 'selected' : '')+"' id='option_direction_retour'><--></button></div>\
					</div>\
				</div>\
				<div class='box_right'>\
					<label>Klasse</label>\
					<div class='button_container radio_group'>\
						<div class='button_wrap button_h_m button_t_normal button_w_m'><button class='sbb_class_button "+(Controller.selected_options.sbb_class == 1 ? 'selected' : '')+"' id='option_class_1'>1. Klasse</button></div>\
						<div class='button_wrap button_h_m button_t_normal button_w_m'><button class='sbb_class_button "+(Controller.selected_options.sbb_class == 2 ? 'selected' : '')+"' id='option_class_2'>2. Klasse</button></div>\
					</div>\
				</div>\
		";
		
		result += "\
			</section>\
		";
		
		return result;
	},
	
	render_information: function() { return '';	},
	render_tool: function() { return ''; },
	
	observe: function() {
		
		
		
		Controller.counter_element($('.ticket_count_halbtax_box'), (function(count) {
			Controller.selected_options.ticket_halbtax = count;
			
			$('span.ticket_halbtax_count').text(Controller.selected_options.ticket_halbtax);

			if (Controller.selected_options.ticket_halbtax <= 0) {
				$('.cart_ticket_halbtax').hide();
			} else {
				$('.cart_ticket_halbtax').show();
			}
			
			View_static.render_box_option();
			View_static.render_total();
			View_static.handle_next_button();
		}).bind(this));
		
		
		Controller.counter_element($('.ticket_count_normal_box'), (function(count) {
			Controller.selected_options.ticket_normal = count;
			
			$('span.ticket_normal_count').text(Controller.selected_options.ticket_normal);
			
			if (Controller.selected_options.ticket_normal <= 0) {
				$('.cart_ticket_normal').hide();
			} else {
				$('.cart_ticket_normal').show();
			}
			
			View_static.render_box_option();
			View_static.render_total();
			View_static.handle_next_button();
		}).bind(this));
		
		Controller.radio_button($('.direction_button'), (function(selected_i) {
			Controller.selected_options.back = (selected_i == 1);
			console.log(Controller.selected_options.back);
			if (Controller.selected_options.back) {
				$('div.cart_direction').removeClass('direction_easy');
				$('div.cart_direction').addClass('direction_retour');
			} else {
				$('div.cart_direction').addClass('direction_easy');
				$('div.cart_direction').removeClass('direction_retour');
			}
			
			View_static.render_box_date();
			View_static.render_total();
		}).bind(this));
		
		Controller.radio_button($('.sbb_class_button'), (function(selected_i) {
			Controller.selected_options.sbb_class = (selected_i == 0 ? 1 : 2);
			
			$('span.cart_sbb_class').text(Controller.selected_options.sbb_class);
			
			View_static.render_total();
		}).bind(this));
	}
	
	
	
}

/**
* VIEW_OPTION
*/
var View_date = {
	render: function() {
		var result = '';
				
		
		result += "\
			<section class='content_left'>\
				<h1>Bitte wählen Sie Ihr Reisedatum</h1>\
		";
		
		
		result += "\
				<div class='button_container'>\
					<div class='group_box'>\
						<div class='button_wrap button_h_m button_t_normal button_w_l'><button class='selected' id='date_today_button'>"+View_static.render_date_formatted()+"</button></div>\
						<div class='button_wrap button_h_m button_t_normal button_w_l'><button id='date_later_button'>Späteres Datum</button></div>\
					</div>\
				</div>\
		";
		
		result += "\
			</section>\
		";
		
		return result;
	},
	
	render_information: function() { return '';	},
	render_tool: function() { return ''; },
	observe: function() {
		Controller.selected_options.date_today = true;
	}
	
}

/**
* VIEW_SUMMARY
*/
var View_summary = {
	render: function() {
		var result = '';
		/*
		result += "\
			<button id='summary_pay' class='red'>Bezahlen</button>\
		";
		*/
		return result;
	},
	
	render_information: function() { return '';	},
	render_tool: function() { return ''; },
	
	observe: function() {
		/*
		Mobile.observe_button($('#summary_pay'), function() {
			Controller.next_screen();
		});
		*/
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
	render_tool: function() { return ''; },
	
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
			<section class='content_right'>\
				<section class='ticket_selection'>\
					<h2>Ihre Auswahl</h2>\
					<div class='box box_route'>\
						<div class='column_1'>Strecke</div>\
						<div class='column_2'>Zürich HB<br /><span class='cart_destination'></span></div>\
					</div>\
					<div class='box'>\
						<div class='column_1'>Via</div>\
						<div class='column_2'>via <span class='cart_via'></span></div>\
					</div>\
					<div class='box box_option'>\
						<div class='column_1'>Billette</div>\
						<div class='column_2'>\
							<div class='cart_ticket_halbtax'><span class='cart_ticket_halbtax_count'></span> x Halbtax / Kind</div>\
							<div class='cart_ticket_normal'><span class='cart_ticket_normal_count'></span> x Erwachsen</div>\
						</div>\
						<div class='column_1' style='clear:right;'>Fahrart</div>\
						<div class='column_2'><div class='cart_direction'>icon</div></div>\
						<div class='column_1'>Klasse</div>\
						<div class='column_2'><div><span class='cart_sbb_class'></span>. Klasse</div></div>\
					</div>\
					<div class='box box_date'>\
						<div class='column_1'>Gültig</div>\
						<div class='column_2'><div class='cart_date'></div></div>\
					</div>\
					<div class='box box_total'>\
						<div class='column_1'>Zu Bezahlen</div>\
						<div class='column_2'>\
							<div class='cart_total_chf'>CHF <span></span></div>\
							<div class='cart_total_euro'>€ <span></span></div>\
						</div>\
					</div>\
				</section>\
				<div id='button_static_pay' class='button_wrap button_h_s button_w_l button_t_important'><button id='static_pay' >Betrag Bezahlen</button></div>\
			    <nav>\
			    	<div class='button_wrap button_h_s button_w_m button_t_normal'><button id='static_back'>Zurück</button></div>\
					<div class='slider_wrapper'>\
						<div class='line_back'></div>\
						<div class='line_front'></div>\
						<div class='bullet'>1</div>\
						<div class='bullet'>2</div>\
						<div class='bullet'>3</div>\
						<div class='bullet'>4</div>\
						<div class='bullet'>5</div>\
						<div class='bullet_current'>2</div>\
					</div>\
					<div class='button_wrap button_h_s button_w_m button_t_important'><button id='static_next'>Weiter</button></div>\
			    </nav>\
			</section>\
		";
		
		return result;
	},
	
	render_footer: function() {
		var result = '';
		result = "\
		    <div class='button_wrap button_h_s button_w_a button_t_normal'><button id='static_cancel'>Abbrechen</button></div>\
		    <div class='button_wrap button_h_s button_w_a button_t_second'><button id='static_help'>Hilfe</button></div>\
		    <div id='language'>\
		    	<div class='button_wrap button_h_s button_w_s button_t_second'><button class='second'>FR</button></div>\
		    	<div class='button_wrap button_h_s button_w_s button_t_second'><button class='second'>IT</button></div>\
		    	<div class='button_wrap button_h_s button_w_s button_t_second'><button class='second'>EN</button></div>\
		    </div>\
		";
		return result;
	},
	
	render_header: function() {
		var result = '';
		
		var current_date = new Date();
		var weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
		var months = ['Jan', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
		var day_text = weekdays[current_date.getDay()];
		var month_text = months[current_date.getMonth()];
		
		var current_month = (current_date.getMonth()+1);
		var current_day = (current_date.getDate());
		var date_formatted = day_text+', '+((current_day < 10 ? "0"+current_day : current_day)+". "+month_text+" "+current_date.getFullYear());
		
		result = "\
		    <div id='date'>"+date_formatted+"</div>\
			<canvas id='clock' width='70' height='70'></canvas>\
			<img id='logo' src='view/image/sbb-logo.png' alt='sbb-logo' />\
		";
		return result;
	},
		
	controll_static: function() {
		Mobile.observe_button($('#static_next'), function() {
			console.log('next-button');
			Controller.next_screen();
		});
		Mobile.observe_button($('#static_back'), function() {
			Controller.prev_screen();
		});
		Mobile.observe_button($('#static_cancel'), function() {
			Controller.reset();
		});
		Mobile.observe_button($('#static_help'), function() {
			Controller.show_information('information');
		});
		
		
		var clock = new StationClock("clock");
		clock.body = StationClock.NoBody;
		clock.dial = StationClock.SwissStrokeDial;
		clock.hourHand = StationClock.SwissHourHand;
		clock.minuteHand = StationClock.SwissMinuteHand;
		clock.secondHand = StationClock.BarSecondHand;
		clock.boss = StationClock.RedBoss;
		clock.minuteHandBehavoir = StationClock.BouncingMinuteHand;
		clock.secondHandBehavoir = StationClock.OverhastySecondHand;
		
		window.setInterval(function() { clock.draw() }, 50);
		
	},
	
	controll: function() {
		// slider update
		$('.slider_wrapper').attr('class', 'slider_wrapper step_'+Controller.current_screen);
		$('.slider_wrapper .bullet_current').text(Controller.get_step_nr());
		
		// right content visibility
		if ($.inArray(Controller.current_screen, ['via', 'option', 'date', 'summary']) > -1) {
			if (
				(Controller.last_screen == 'start' && Controller.current_screen == 'via') ||
				(Controller.last_screen == 'pay' && Controller.current_screen == 'summary')
			) {
				// $('.content_right').css('visibility', 'visible');
				$('.content_right').css('opacity', '1');
			}
			
		} else {
			
			$('.content_right').css('opacity', '0');
			// $('.content_right').css('visibility', 'hidden');
		}
		
		// pay-button
		$('#button_static_pay').hide();
		if (Controller.current_screen == 'summary') {
			$('.ticket_selection').on('webkitTransitionEnd', function() {
				$('#button_static_pay').show();
			});
		}
		
		
		// footer cancel button update
		if ($.inArray(Controller.current_screen, ['via', 'option', 'date', 'summary']) > -1) {
			$('#static_cancel').show();
		} else {
			$('#static_cancel').hide();
		}
		
		// footer help button update
		if ($.inArray(Controller.current_screen, ['via', 'option', 'date', 'summary']) > -1) {
			$('#static_help').show();
		} else {
			$('#static_help').hide();
		}
		
		// footer language buttons update
		if (Controller.current_screen == 'start') {
			$('#language').show();
		} else {
			$('#language').hide();
		}
		
		// cart update
		if ($.inArray(Controller.current_screen, ['date']) > -1) {
			
			
		}
		if ($.inArray(Controller.current_screen, ['via', 'option', 'date']) > -1) {
			var current_route = Controller.get_route();
			$('.cart_destination').text(current_route.name);
			$('.cart_via').text(current_route.via[Controller.selected_options.via].name);
			
			this.render_box_date();
			this.render_box_option();
			this.render_total();
			
		}
		
		
		this.handle_next_button();
		// $('nav').show();
	},
	
	handle_next_button: function() {
		if (Controller.current_screen == 'option') {
			if (Controller.selected_options.ticket_halbtax == 0 && Controller.selected_options.ticket_normal == 0) {
				$('#static_next').hide();
			} else {
				$('#static_next').show();
			}
		} else if (Controller.current_screen == 'summary' || Controller.current_screen == 'pay') {
			$('#static_next').hide();
		} else {
			$('#static_next').show();
		}
	},
	
	render_box_option: function() {
		if (Controller.selected_options.ticket_normal == 0 && Controller.selected_options.ticket_halbtax == 0) {
		    $('.box_option').hide();
		} else {
		    $('.cart_ticket_halbtax').show();
		    $('.cart_ticket_normal').show();
		    if (Controller.selected_options.ticket_halbtax == 0) {
		    	$('.cart_ticket_halbtax').hide();
		    } else {
			    $('.cart_ticket_halbtax_count').text(Controller.selected_options.ticket_halbtax);
		    }
		    if (Controller.selected_options.ticket_normal == 0) {
		        $('.cart_ticket_normal').hide();
		    }else {
			    $('.cart_ticket_normal_count').text(Controller.selected_options.ticket_normal);
		    }
		    
		    $('.cart_sbb_class').text(Controller.selected_options.sbb_class);
		    
		    $('.box_option').show();
		}
	},
	
	render_box_date: function() {
		if (Controller.selected_options.date_today == false) {
			$('.box_date').hide();
		} else {
		
			$('.cart_date').text(this.render_date_formatted());
			$('.box_date').show();
		}
	},
	
	render_total: function() {
		
		var total = Controller.get_total();
		
		if (total.chf == 0) {
			$('.box_total').hide();
		} else {
			$('.cart_total_chf span').text(total.chf);
			$('.cart_total_euro span').text(total.euro);
		
			$('.box_total').show();
		}
	},
	
	render_date_formatted: function() {
		var current_date = new Date();
		var current_month = (current_date.getMonth()+1);
		var current_day = (current_date.getDate());
		var date_formatted = ((current_day < 10 ? "0"+current_day : current_day)+"."+(current_month < 10 ? "0"+current_month : current_month)+"."+current_date.getFullYear());
		
		
		if (Controller.selected_options.back) {
		    var back_date = new Date(current_date.getTime()+(9*24*60*60*1000));
		    var back_month = (back_date.getMonth()+1);
		    var back_day = (back_date.getDate());
		    var back_date_formatted = ((back_day < 10 ? "0"+back_day : back_day)+"."+(back_month < 10 ? "0"+back_month : back_month)+"."+back_date.getFullYear());
		
		    date_formatted = "Gültig von "+date_formatted+" bis "+back_date_formatted;
		} else {
		    date_formatted = "Gültig Heute ("+date_formatted+")";
		}
		
		return date_formatted;
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
	render_tool: function() { return ''; },
	
	observe: function() {}
}
