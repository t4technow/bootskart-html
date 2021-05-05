$(document).ready(function(){
	
	$('#price-range-submit').hide();

	$("#min_price,#max_price").on('change', function () {

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());

	  if (min_price_range > max_price_range) {
		$('#max_price').val(min_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });
	  
	});


	$("#min_price,#max_price").on("paste keyup", function () {                                        

	  $('#price-range-submit').show();

	  var min_price_range = parseInt($("#min_price").val());

	  var max_price_range = parseInt($("#max_price").val());
	  
	  if(min_price_range == max_price_range){

			max_price_range = min_price_range + 100;
			
			$("#min_price").val(min_price_range);		
			$("#max_price").val(max_price_range);
	  }

	  $("#slider-range").slider({
		values: [min_price_range, max_price_range]
	  });

	});


	$(function () {
		cat = $('#displayShowcase').data('item'); 
		if (cat == 'shoes') {
			var minv = 0;
			var maxv = 1500;
			var vals = [150, 1000];
			var st = 10;
		} 
		else if(cat  == 'laptop') {
			var minv = 100;
			var maxv = 12500;
			var vals = [500, 9000];
			var st = 100;
		}

	  $("#slider-range").slider({
		
		range: true,
		orientation: "horizontal",
		min: minv,
		max: maxv,
		values: vals,
		step: st,

		slide: function (event, ui) {
		  if (ui.values[0] == ui.values[1]) {
			  return false;
		  }
		  
		  $("#min_price").val(ui.values[0]);
		  $("#max_price").val(ui.values[1]);
		}
	  });

	  $("#min_price").val($("#slider-range").slider("values", 0));
	  $("#max_price").val($("#slider-range").slider("values", 1));

	});

	$("#slider-range,#price-range-submit").click(function () {

	  var min_price = $('#min_price').val();
	  var max_price = $('#max_price').val();

	//   $("#searchResults").text("Here List of products will be shown which are cost between " + min_price  +" "+ "and" + " "+ max_price + ".");
	// if ($('.content').parseInt(data("price")) <= max_price && $('.content').parseInt(data("price")) >= min_price) {
	// 	$('.content').removeClass("hide");
	// }
	// else {
	// 	$('.content').removeClass("hide");
	// }

	// console.log(('.content').data("price"))

	});

});