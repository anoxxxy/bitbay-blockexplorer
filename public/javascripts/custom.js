/*!
 * custom.js
 * 
 *
 * Custom JS Settings for Bitbay Explorer
 */

$(document).ready(function() {
	
	//Check Theme settings
	var _getTheme = _get("theme");

	if(_getTheme[0]){
		//themeSettings = _getTheme[0];
		$('#theme_settings').attr('href','/themes/'+_getTheme[0]+'/bootstrap.min.css');
	}else{
		$('#theme_settings').attr('href','/themes/Cerulean/bootstrap.min.css');
	}
	
	//Get Request params
	function _get(value) {
		var dataArray = (document.location.search).match(/(([a-z0-9\_\[\]]+\=[a-z0-9\_\.\%\@]+))/gi);
		var r = [];
		if(dataArray) {
			for(var x in dataArray) {
				if((dataArray[x]) && typeof(dataArray[x])=='string') {
					if((dataArray[x].split('=')[0].toLowerCase()).replace(/\[\]$/ig,'') == value.toLowerCase()) {
						r.push(unescape(dataArray[x].split('=')[1]));
					}
				}
			}
		}
		return r;
	}

	//How to print a number with commas as thousands separators in JavaScript
		//https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
	/*
	numberWithCommas = function (x) {
		//return x.toString().replace(/\B(?=(\d{8})+(?!\d))/g, ",").toFixed(8);
		x.toString().replace(/\B(?=(\d{8})+(?!\d))/g, ",");
		alert('test: '+x);
		return x;
	}
	*/
	
	
	
	numberWithCommas = function (num) {
		var p = num.split(".");
		return "" + p[0].split("").reverse().reduce(function(acc, num, i, orig) {
			return  num=="-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
		}, "") + ".<small>" + p[1] + "</small>";
	}


	
	/*
	$('td.format_numbers').each(function(index){
		var $el = $(this);
		//alert ( $el.html() );
		$el.html( numberWithCommas($el.html()) );	
		// .total_received	.balance	.total_sent
		  
	});
	*/
	$('.format_numbers').each(function(index){
		var $el = $(this);
		//alert ( $el.html() );
		$el.html( numberWithCommas($el.html()) );	
		// .total_received	.balance	.total_sent
		  
	});
	
	
	//var td = $("#recent-table tbody > tr> td:nth-child(4)").html();
  //alert(td); 
  
	//$('table#recent-table tr').find("td:eq(3)").each(function(index){
		//http://jsbin.com/befovamuha/edit?html,js,output
	/*
	$('#recent-table tbody > tr > td:nth-child(4)').each(function(index){
		var $el = $(this);
		alert ( $el.html() );
		$el.html( numberWithCommas($el.html()) );	
		// .total_received	.balance	.total_sent
		  
	});
	*/
	
	
	
});

