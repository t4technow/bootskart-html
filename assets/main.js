var navOffset = $('header').height() - 72;

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > navOffset) {
            $(".clr-nav").addClass("vlt");
			$("#mmenu").removeClass("drk")
			$("#mmenu").addClass("vlt")
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".clr-nav").removeClass("vlt");
		   $("#mmenu").removeClass("vlt")
			$("#mmenu").addClass("drk")

        }
    });
});

//nav
$(document).ready(function () {
	$("#search").click(function () {
		$(".h-nav-item").toggleClass("hide-item");
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

	$('.dd-cart-item .close-btn').click(function (e) { 
		e.preventDefault();
		
	});

	$('#clearAllFilters').click(function (e) { 
		e.preventDefault();
		$(".dd-menu > .li-item").removeClass("active");
		$(".colors").removeClass("active lni lni-checkmark");
		$(".sizes").removeClass("active");
		$(".brand input").prop('checked', false);
		$('.dd > .close-btn').hide();

	});
	
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

	
		if (!$(".dd-menu > .li-item").hasClass('active')) {
			$('.dd > .close-btn').hide();
		}
	
	

	$('.dd > .close-btn').click(function() {
		$(".dd-menu > .li-item").removeClass("active");
		$(this).hide();
	});

	$('.brands-dd > .close-btn').click(function() {
		$(".brand input").prop('checked', false);
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


$(document).ready(function () {
	let viewMode = localStorage.getItem('viewMode')

	if (viewMode === "grid") {
		gridView();
	}else if (viewMode === "list") {
		listView();
	}

	$("#gridV").click(function () {
		gridView();
		localStorage.setItem('viewMode', 'grid');
	});

	$("#listV").click(function () {
		listView();
		localStorage.setItem('viewMode', 'list');
	});

	function gridView() {
		viewMode = localStorage.getItem('viewMode');
		if (!$("#gridV").hasClass("active")) {
			$('#listV').removeClass("active");		
			$("#gridV").addClass("active");
			$('#gridShowcase').addClass("grid-3");
			$('#gridShowcase > .cgl').removeClass("list-content");
			$('#gridShowcase > .cgl').addClass("content");		
			$('#gridShowcase > .cgl > .img-holder > .content-overlay').removeClass("hide");
			$('.catL').addClass("hide");
			$('.catG').removeClass("hide");
			$('#gridShowcase > .cgl > .content-details').removeClass("d-flex");
			$('#gridShowcase > .cgl > .content-details > .wish').removeClass("wish-btn");
		}
	}

	function listView() {
		viewMode = localStorage.getItem('viewMode');
		if (!$('#listV').hasClass("active")) {
			$('#gridV').removeClass("active");
			$('#listV').addClass("active");

			$('#gridShowcase').removeClass("grid-3");
			$('#gridShowcase > .cgl').removeClass("content");
			$('#gridShowcase > .cgl').addClass("list-content");
			$('#gridShowcase > .cgl > .img-holder > .content-overlay').addClass("hide");
			$('.catL').removeClass("hide");
			$('.catG').addClass("hide");
			$('#gridShowcase > .cgl > .content-details').addClass("d-flex");
			$('#gridShowcase > .cgl > .content-details > .wish').addClass("wish-btn");
		}
	}	
});


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
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


