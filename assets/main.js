//nav
$(document).ready(function () {
	$("#search").click(function () {
		$(".nav-item").toggleClass("hide-item");
		$(".search-form").toggleClass("hide-item");
		$(".sc").toggleClass("lni-search-alt lni-close");
	});

	// $(document).click(function () {
	//   if ($('#mmenu').hasClass('show')) {
	//     $('.navbar').addClass('vlt');
	//   }
	//   else {
	//     $('.navbar').removeClass('vlt');
	//   }
	// });


	window.addEventListener(
		"scroll",
		() => {
			document.body.style.setProperty(
				"--scroll",
				window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
			);
		},
		false
	);

	
	$(".colors").click(function () {
		if (!$(this).hasClass("active lni lni-checkmark")) {
			$(".colors").removeClass("active lni lni-checkmark");
			$(this).addClass("active lni lni-checkmark");
		}

		// var clr = $(this).data('color');

		// var allAttributes = jQuery('.slide-img').map(function() { /* example: .class */
		//   return jQuery(this).data('color'); /* example: id */
		// }).get();

		// if (clr == $('.slide-img').data('color')) {

		// var slideNo = $('.slide-img').data('test');
		// $('.slider-main').slick('slickGoTo', slideNo);
		//   console.log(slideNo);
		// }
		// else{
		//   console.log("no");
		// }
	});

	$('.li-item > a').click(function(event){
		event.preventDefault();
	  });

	$(".sizes").click(function () {
		if (!$(this).hasClass("active")) {
			$(".sizes").removeClass("active");
			$(this).addClass("active");
		}
	});

	$(".filter-dropper").click(function (){
		$(this).parent().find(".filter-drop").toggleClass("show");
	});

	$(".dd-menu > .li-item").click(function() {
		if (!$(this).hasClass("active")) {
			$(".dd-menu > .li-item").removeClass("active");
			$(this).addClass("active");
		}
		if ($(".dd-menu > .li-item").hasClass('active')) {
			$('.dd > .close-btn').show();
		}
	});

	$('.dd > .close-btn').ready(function() {
		if (!$(".dd-menu > .li-item").hasClass('active')) {
			$('.dd > .close-btn').hide();
		}
	});
	

	$('.dd > .close-btn').click(function() {
		$(".dd-menu > .li-item").removeClass("active");
	});

	$('.brands-dd > .close-btn').click(function() {

		$(".brand input").prop('checked', false);
	});	

	$("#gridV").click(function () {
		if (!$(this).hasClass("active")) {
			$('#listV').removeClass("active");		
			$(this).addClass("active");
			$('#gridShowcase').addClass("grid-3");
			$('#gridShowcase > .cgl').removeClass("list-content");
			$('#gridShowcase > .cgl').addClass("content");		
			$('#gridShowcase > .cgl > .img-holder > .content-overlay').removeClass("hide");
			$('.catL').addClass("hide");
			$('.catG').removeClass("hide");
			$('#gridShowcase > .cgl > .content-details').removeClass("d-flex");
			$('#gridShowcase > .cgl > .content-details > .wish').removeClass("wish-btn");

		}
	});

	$("#listV").click(function () {
		if (!$(this).hasClass("active")) {
			$('#gridV').removeClass("active");
			$(this).addClass("active");

			$('#gridShowcase').removeClass("grid-3");
			$('#gridShowcase > .cgl').removeClass("content");
			$('#gridShowcase > .cgl').addClass("list-content");
			$('#gridShowcase > .cgl > .img-holder > .content-overlay').addClass("hide");
			$('.catL').removeClass("hide");
			$('.catG').addClass("hide");
			$('#gridShowcase > .cgl > .content-details').addClass("d-flex");
			$('#gridShowcase > .cgl > .content-details > .wish').addClass("wish-btn");
		
			// $('#listShowcase').removeClass("hide");
			// $('#gridShowcase').addClass("hide");

			// if ($('#listShowcase').hasClass("hide")) {
			// 	$(this).removeClass("hide");
			// 	$('#gridShowcase').addClass("hide");
			// }
		}
	});

});

$(document).ready(function () {
	$(".offer-slider").slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});

	// filter
	$(".filter-nav li a").on("click", function () {
		var filter = $(this).data("filter");
		$(".offer-slider").slick("slickUnfilter");

		if (filter == "shoes") {
			$(".offer-slider").slick("slickFilter", ".shoes");
			$(".filter-nav li a").removeClass("active");
			$(this).addClass("active");
		} else if (filter == "laptop") {
			$(".offer-slider").slick("slickFilter", ".laptop");
			$(".filter-nav li a").removeClass("active");
			$(this).addClass("active");
		} else if (filter == "mobile") {
			$(".offer-slider").slick("slickFilter", ".mobile");
			$(".filter-nav li a").removeClass("active");
			$(this).addClass("active");
		} else if (filter == "all") {
			$(".offer-slider").slick("slickUnfilter");
			$(".filter-nav li a").removeClass("active");
			$(this).addClass("active");
		}
	});

	// PRODUCT DETAIL PAGE
	$(".slider-main").slick({
		slidesToShow: 1,
		arrows: false,
		asNavFor: ".slider-nav",
		vertical: true,
		autoplay: false,
		verticalSwiping: true,
	});

	$(".slider-nav").slick({
		slidesToShow: 4,
		asNavFor: ".slider-main",
		vertical: true,
		focusOnSelect: true,
		autoplay: false,
		centerMode: true,
	});

	$(window).on("resize orientationchange", function () {
		if ($(window).width() > 1200) {
			$(".slider-nav").slick("unslick");
			$(".slider-nav").slick({
				slidesToShow: 4,
				asNavFor: ".slider-main",
				vertical: true,
				focusOnSelect: true,
				autoplay: false,
				centerMode: true,
			});
		}
	});

});

function increaseCount(a, b) {
	var input = b.previousElementSibling;
	var value = parseInt(input.value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	input.value = value;
}
function decreaseCount(a, b) {
	var input = b.nextElementSibling;
	var value = parseInt(input.value, 10);
	if (value > 1) {
		value = isNaN(value) ? 0 : value;
		value--;
		input.value = value;
	}
}
