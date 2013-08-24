$(function(){
	
	// The name of the html element where all the activities will go
	var activities_jq = $('#squeego-activities');
	
	// Your squeego url
	var url = 'http://squeego.com/get-activities-for?id=' + activities_jq.data('squeegoId');
	
	
	
	/***
	 * Request data from server using AJAX. Use XDR for IE and standard jQuery AJAX for other browsers.
	 ***/
	if (window.XDomainRequest) {
		
		var xdr = new XDomainRequest();
		if (xdr) {
			xdr.onerror = error_loading_activities;
			xdr.onload = function() { load_data_into_dom(xdr.responseText) };
			xdr.open("get", url);
			xdr.send();
		} else {
			// Error using xdr
			activities_jq.html('<p>Error loading activities</p>');
		}
	
	// No XDomainRequest - use jQuery ajax
	} else {
		
		$.ajax({
			url: url,
			dataType: 'json'
					
		})
		.done(function(data) { 	load_data_into_dom(data)  })
		.fail(function() {
			error_loading_activities()
		});
		
	}
	
		
	/***
	 * Interpet the AJAX response from SqueeGo.
	 * 
	 * Response will either be straight text (e.g. 'id not found'), or JSON data of activities.
	 * 
	 ***/
	function load_data_into_dom( data ) {
			
		if (data == 'id not found') {
			activities_jq.html('<p>Error loading activities</p>');
		
		} else if (data == 'activities not found') {
			/* This will be executed if there were no activities in the SqueeGo database for your id. You can easily add some at squeego.com. 
			 * SqueeGo has a review process to ensure the quality of content on squeego.com but unreviewed activities are added to the SqueeGo database immediately. This means both unreviewed and reviewed activities are returned with your activity request - so you can get started straight away! */
			activities_jq.html('<p>Fun and interesting activities will appear here soon!</p>');
		
		} else {
					
			// If data is a string it will need to be converted to JavaScript. A response from IE (which uses XDR) will be a plain string. jQuery automatically parses the JSON string into a JavaScript object and so for non-IE (non-xdr) browsers, data is already a JavaScript object.
			if (typeof data === 'string') {
				data = $.parseJSON(data);
			}
			
			add_activities_to_dom(data);
		}
		
	}
	
	
	/***
	 * Executed if there was an AJAX error when contacting the SqueeGo server.
	 ***/
	function error_loading_activities() {
		/* This message will be displayed if there was an error retreiving the details from SqueeGo. This shouldn't actually occur */
		activities_jq.html('<p>Our activities would normally appear here but there was an error retreiving them from SqueeGo.</p>'); 
	}
	
	

	/***
	 * Example code which interprets the activities data in a similar way to the SqueeGo website. You can edit this code to interpret the data in any way you like. You could also use it to bring in data from other parts of your website. SqueeGo sends you all your activity data so you can do with it as you please.
	 * 
	 * This function does the main work of adding the activities data to the DOM (your web page).
	 ***/
	function add_activities_to_dom(activities) {
		
		// Showdown converts the details text into MarkDown HTML
		var converter = new Showdown.converter();

		
		for (i in activities) {
			
			var activity = activities[i];
			
			
			//activities_jq.append($('<div class="title-row">' + activity.name + '</div>\
			//<div>something else</div>'));
			
			
			activities_jq.append($('<div class="activity clearfix">\
				<div class="title-row">' + activity.name + '</div>\
				<div class="activity-info">\
					<div class="icons-column">\
						<div class="time clearfix">\
							<div class="sprite time-icon"></div>' + 
								(function(){
									var s = '';
									if (activity.date_ranges.length > 0) {
										s = s + '<table class="date-ranges" summary="Periods (date ranges) activity is avilable">\
										<tbody>' +
										(function(){
											for (var j=0; j<activity.date_ranges.length;j++) {
												s = s + '<tr>\
													<th>Available from</th>\
													<td>18/03/2013 <br>to 20/03/2013</td>\
												</tr>';
											}
											return s;
										})()
										s = s + '</tbody>\
										</table>';
									}
									return s;
								})() + 
							'<table class="times">\
								<tbody>\
									<tr>\
										<th>Monday</th>\
										<td>' + activity.monday_times + '</td>\
									</tr>\
									<tr>\
										<th>Tuesday</th>\
										<td>' + activity.tuesday_times + '</td>\
									</tr>\
									<tr>\
										<th>Wednesday</th>\
										<td>' + activity.wednesday_times + '</td>\
									</tr>\
									<tr>\
										<th>Thursday</th>\
										<td>' + activity.thursday_times + '</td>\
									</tr>\
									<tr>\
										<th>Friday</th>\
										<td>' + activity.friday_times + '</td>\
									</tr>\
									<tr>\
										<th>Saturday</th>\
										<td>' + activity.saturday_times + '</td>\
									</tr>\
									<tr>\
										<th class="sunday">Sunday</th>\
										<td class="sunday">' + activity.sunday_times + '</td>\
									</tr>' + 
									(function(){
										var s='';
										for (var j=0; j<activity.single_datetimes.length; j++) {
											s = s +
											'<tr>\
												<th>' + dateify(activity.single_datetimes[j].single_date) + '</th>\
												<td>' + activity.single_datetimes[j].times + '</td>\
											</tr>';
										}
										return s;
									})() + 							
								'</tbody>\
							</table>\
						</div><!--times-row-->\
						<div class="cost clearfix">\
							<div class="sprite cost-icon"></div>\
							<table class="cost-table">\
								<tbody>' + 
									(function(){
										var s = '';
										// Loop over prices and add rows as appropriate
										for (var j=0; j<activity.prices.length;j++) {
											s = s + 
											'<tr>\
												<th>' + activity.prices[j].price_type + '</th>\
												<td>' + dollarify(activity.prices[j].price) + '</td>\
											<tr>';
										}
										return s;
									})() +
								'</tbody>\
							</table>\
						</div><!-- costs row -->\
						<div class="other-icons">' + 
							(function(){
								var s = '';
								if (activity.cf_wheelchair == "checked") {
									s = s + '<img class="sprite wheelchair-icon" src="empty.png" alt="Wheelchair friendly" title="Wheelchair friendly">';
								}
								if (activity.cf_alcohol_permitted == "checked") {
									s = s + '<img class="sprite alcohol-icon" src="empty.png" alt="Alcohol served at venue" title="Alcohol served at venue">';
								}
								if (activity.cf_18plus == "checked") {
									s = s + '<img class="sprite eighteenplus-icon" src="empty.png" alt="Restricted to persons aged 18 and over" title="Restricted to persons aged 18 and over">';
								}
								if (activity.cf_visa == "checked") {
									s = s + '<img class="sprite visa-icon" src="empty.png" alt="Visa accepted" title="Visa accepted">';
								}
								if (activity.cf_mastercard == "checked") {
									s = s + '<img class="sprite mastercard-icon" src="empty.png" alt="Mastercard accepted" title="Mastercard accepted">';
								}
								if (activity.cf_eftpos == "checked") {
									s = s + '<img class="sprite eftpos-icon" src="empty.png" alt="EFTPOS accepted" title="EFTPOS accepted">';
								}
								return s;
							})() + 
						'</div>\
					</div>\
					<div class="details">' + 
						converter.makeHtml(activity.details) + 
						'<div class="details-icons">' + 
							(function(){
								var s = '';
								for (var j=0; j<activity.locations.length;j++) {
									// Loop over locations and add rows as appropriate
									s = s + 
									'<div class="details-icon-address location">\
										<img class="sprite address-icon" src="empty.png">' + 
										activity.locations[j] + 
									'</div>';
								}
								return s;
							})() + 
						'</div>' + 
						/* Activities can optionally have contacts */
						(function(){						
							var s = '';
							// Contacts are optionally so make sure there are some before adding rows for them
							if (activity.contacts.length > 0) {
								for (var j=0; j<activity.contacts.length;j++) {
									s = s + 
									'<div class="details-icons">\
										<div class="details-icon-heading">';
									if (activity.contacts[j].contact_type.toLowerCase() == 'phone') {
										s = s +
										'<div class="icon">\
											<img class="sprite phone-icon" src="empty.png">\
										</div>\
										Phone';
									} else if (activity.contacts[j].contact_type.toLowerCase() == 'twitter') {
										s = s +
										'<div class="icon">\
											<img class="sprite twitter-icon" src="empty.png">\
										</div>\
										Twitter';
									} else if (activity.contacts[j].contact_type.toLowerCase() == 'e-mail') {
										s = s +
										'<div class="icon">\
											<img class="sprite email-icon" src="empty.png">\
										</div>\
										E-mail';
									} else {
										s = s +
										'<div class="icon">\
											<img class="sprite no-icon" src="empty.png">\
										</div>' + 
										activity.contacts[j].contact_type;
									}
									s = s + 
										'</div>\
										<div class="details-icon-info">' + activity.contacts[j].contact + '</div>\
									</div>';
								}
							}
							//s = s + '</div>';
							return s;
						})() + 
						'<div class="comments">\
							<span class="sprite comments-icon action-link-button"></span>\
							<a href="' + activity.squeego_url + '">Discuss this activity on SqueeGo!</a>\
						</div>\
					</div><!-- end of details -->\
				</div>\
				<hr />\
			</div><!-- end of activities -->'));
		} // End of for loop
			

	}

});



/***
 * Convenience function to convert the price (stored as cents by SqueeGo) into dollars and cents 
 ***/
function dollarify(amount) {
	// Instead of having a 0 value - say 'Free' instead.
	if (amount == 0)
		return 'Free';
	
	// Add a dollar sign and decimal point to the number	
	amount = amount.toString();
	return '$' + amount.slice(0,-2) + '.' + amount.slice(-2);
}

/***
 * Convenience function to convert a SqueeGo stored date (yyyymmdd) into a normal date dd mmm.
 ***/
function dateify(d) {
	d = new Date(d.slice(0,4), d.slice(4,6)-1, d.slice(6,8))
	
	var curr_date = d.getDate();
	var sup = "";
	if (curr_date == 1 || curr_date == 21 || curr_date ==31)
	   {
	   sup = "st";
	   }
	else if (curr_date == 2 || curr_date == 22)
	   {
	   sup = "nd";
	   }
	else if (curr_date == 3 || curr_date == 23)
	   {
	   sup = "rd";
	   }
	else
	   {
	   sup = "th";
	   }

	var curr_month = d.getMonth();
	var curr_year = d.getFullYear();

	return curr_date + "<SUP>" + sup + "</SUP> " + m_names[curr_month] + " " + curr_year;
}
var m_names = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
