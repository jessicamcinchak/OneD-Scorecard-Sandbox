/*
* Creates the sliders that play change in data by year
* Using bootstrap-slider.js (https://github.com/seiyria/bootstrap-slider)
*/

function generateSlider(dataset) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));

    $( "#mapSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1,
		tooltip: 'always'
	});
	
    $( "#pinwheelSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1,
		tooltip: 'always'
	});
	
    $( "#nationalHeatChartSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1,
		tooltip: 'always'
	});	

    $( "#barChartSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1,
		tooltip: 'always'
	});	
	
	/*
    $( "#cityHeatChartSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1
	});
	*/	

    $( "#cityDonutChartSlider" ).slider({
		value: maxYear,
		min: minYear,
		max: maxYear,
		step: 1,
		tooltip: 'always'
	});	
			
};


$(document).ready(function(){
	// build event listeners on slider
	$( "#mapSlider" ).on( 'slideStop', function( event ) {
		orderPinwheels = $( ".pinwheelChangeMap" ).val();
		updatePinwheelsByYearMap(event.value, orderPinwheels);
	} );	

	$( "#pinwheelSlider" ).on( 'slideStop', function( event ) {
		orderPinwheels = $( ".pinwheelChangeArray" ).val();
		updatePinwheelsByYearArray(event.value, orderPinwheels);
	} );

	$( "#nationalHeatChartSlider" ).on( 'slideStop', function( event ) {
		var city = $( ".nationalCircularHeatChartDropdown" ).val();
		updateCircularHeatChart(event.value, city);
	} );

	$( "#barChartSlider" ).on( 'slideStop', function( event ) {
		var city = $( "#selectCity" ).val();
		var order = $( "#selectOrder" ).val();
		var indicator = $( "#selectIndicator" ).val();
		updateBarChartData(event.value, indicator, order, city);
	} );

	/*
	$( "#cityHeatChartSlider" ).on( 'slideStop', function( event ) {
		var cityFilter = $( ".cityHeatChartDropdown" ).val();
		updateCityCircularHeatChartData(event.value, cityFilter);
	} );
	*/

	$( "#cityDonutChartSlider" ).on( 'slideStop', function( event ) {
		var cityFilter = $( "#selectCityDonut" ).val();
		var indicator = $( "#selectIndicatorDonut" ).val();
		updateCityDonutChartData(event.value, cityFilter, indicator);
	} );

});

// function to start and stop the map animation
function playStopAnimationMap(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playMap(yearCount, maxYear, state);
}

// function to start and stop the map animation
function playStopAnimationArray(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playArray(yearCount, maxYear, state);
}

// function to start and stop the map animation
function playStopAnimationHeatChart(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playHeatChart(yearCount, maxYear, state);
}

// function to start and stop the map animation
function playStopBarChart(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playBarChart(yearCount, maxYear, state);
}

// function to start and stop the map animation
/*
function playStopAnimationHeatChartCity(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playHeatChartCity(yearCount, maxYear, state);
}
*/

// function to start and stop the map animation
function playStopAnimationDonutChartCity(state) {
	// set up initial min and max years and ensure they are integers
	var minYear = parseInt(d3.min(dataset, function(d) { return d.year; }));
	var maxYear = parseInt(d3.max(dataset, function(d) { return d.year; }));
	var yearCount = minYear;
	playDonutChartCity(yearCount, maxYear, state);
}


var delayTimeout = 0;
function playMap(yearCount, maxYear, state) { 	 
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
   		  orderPinwheels = $( ".pinwheelChangeMap" ).val();   		   
 	      $( "#mapSlider" ).slider( 'setValue', yearCount );		  
		  updatePinwheelsByYearMap(yearCount, orderPinwheels);
		  yearCount++;
 	      if (yearCount<=maxYear) {
 			 delayTimeout = 2000;
 	      	 playMap(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);
	   delayTimeout = 0;						
	} else {
		window.clearTimeout(this.timeoutID);
	}        
};

function playArray(yearCount, maxYear, state) { 	 
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
   		  orderPinwheels = $( ".pinwheelChangeArray" ).val();   		   
 	      $( "#pinwheelSlider" ).slider( 'setValue', yearCount );
		  updatePinwheelsByYearArray(yearCount, orderPinwheels);
		  yearCount++;
 	      if (yearCount<=maxYear) {
 			 delayTimeout = 4000;
 	      	 playArray(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);
	   delayTimeout = 0;						
	} else {
		window.clearTimeout(this.timeoutID);
	}        
}; 

function playHeatChart(yearCount, maxYear, state) {  
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
 	      $( "#nationalHeatChartSlider" ).slider( 'setValue', yearCount );
  		  var city = $( ".nationalCircularHeatChartDropdown" ).val();  
		  updateCircularHeatChart(yearCount, city);
		  yearCount++;
 	      if (yearCount<=maxYear) {
			 delayTimeout = 2000;
 	      	 playHeatChart(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);	
	   delayTimeout = 0;					
	} else {
		window.clearTimeout(this.timeoutID);
	}        
}; 

function playBarChart(yearCount, maxYear, state) {  
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
 	      $( "#barChartSlider" ).slider( 'setValue', yearCount );
  		  var city = $( "#selectCity" ).val();
		  var order = $( "#selectOrder" ).val();
		  var indicator = $( "#selectIndicator" ).val();
  		  updateBarChartData(yearCount, indicator, order, city);
		  yearCount++;
 	      if (yearCount<=maxYear) {
			 delayTimeout = 2000;
 	      	 playBarChart(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);
	   delayTimeout = 0;			
	} else {
		window.clearTimeout(this.timeoutID);
	}        
}; 

/*
function playHeatChartCity(yearCount, maxYear, state) {  
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
 	      $( "#cityHeatChartSlider" ).slider( 'setValue', yearCount );
  		  var cityFilter = $( ".cityHeatChartDropdown" ).val();
  		  updateCityCircularHeatChartData(yearCount, cityFilter);
		  yearCount++;
 	      if (yearCount<=maxYear) {
			 delayTimeout = 2000;
 	      	 playHeatChartCity(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);	
	   delayTimeout = 0;					
	} else {
		window.clearTimeout(this.timeoutID);
	}        
};
*/

function playDonutChartCity(yearCount, maxYear, state) {  
	if (state == 'play') {
 	   this.timeoutID = setTimeout(function () {
 	      $( "#cityDonutChartSlider" ).slider( 'setValue', yearCount );
  		  var cityFilter = $( "#selectCityDonut" ).val();
  		  var indicator = $( "#selectIndicatorDonut" ).val();
  		  updateCityDonutChartData(yearCount, cityFilter);
		  yearCount++;
 	      if (yearCount<=maxYear) {
			 delayTimeout = 2000;
 	      	 playDonutChartCity(yearCount, maxYear, state);
 	      }      
 	   }, delayTimeout);	
	   delayTimeout = 0;					
	} else {
		window.clearTimeout(this.timeoutID);
	}        
};   

