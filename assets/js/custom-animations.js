(function($) {
	$(document).ready(function() {

		/*Animations Only for Desktop
		if ($(this).width() > 1007) {*/
		if ($(this).width() > 1024) {

			$('.block-180').scrollAnimate({
				startScroll: 0,
				endScroll: 200,
				cssProperty: 'top',
				before: -80,
				after: 0
			}).scrollAnimate({
				startScroll: 0,
				endScroll: 200,
				cssProperty: 'opacity',
				before: 0.6,
				after: 1
			});



			$('.block-170').scrollAnimate({
				startScroll: 500,
				endScroll: 1000,
				cssProperty: 'left',
				before: -35,
				after: 0
			}).scrollAnimate({
				startScroll: 500,
				endScroll: 1000,
				cssProperty: 'opacity',
				before: 0.05,
				after: 1
			});

			$('.block-160').scrollAnimate({
				startScroll: 700,
				endScroll: 1000,
				cssProperty: 'right',
				before: -35,
				after: 0
			}).scrollAnimate({
				startScroll: 700,
				endScroll: 1000,
				cssProperty: 'opacity',
				before: 0.05,
				after: 1
			});



			$('.block-150').scrollAnimate({
				startScroll: 1100,
				endScroll: 1400,
				cssProperty: 'top',
				before: -100,
				after: 0
			}).scrollAnimate({
				startScroll: 1100,
				endScroll: 1400,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-140').scrollAnimate({
				startScroll: 1300,
				endScroll: 1350,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1300,
				endScroll: 1350,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-130').scrollAnimate({
				startScroll: 1350,
				endScroll: 1400,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1350,
				endScroll: 1400,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-120').scrollAnimate({
				startScroll: 1400,
				endScroll: 1450,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1400,
				endScroll: 1450,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-110').scrollAnimate({
				startScroll: 1450,
				endScroll: 1500,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1400,
				endScroll: 1550,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-100').scrollAnimate({
				startScroll: 1550,
				endScroll: 1600,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1550,
				endScroll: 1600,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-90').scrollAnimate({
				startScroll: 1600,
				endScroll: 1650,
				cssProperty: 'top',
				before: 0,
				after: 0
			}).scrollAnimate({
				startScroll: 1600,
				endScroll: 1650,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});




			$('.block-80').scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'top',
				before: -100,
				after: 0
			}).scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-70').scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'left',
				before: -10,
				after: 0
			}).scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-60').scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'top',
				before: 80,
				after: 0
			}).scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-50').scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'right',
				before: -10,
				after: 0
			}).scrollAnimate({
				startScroll: 1800,
				endScroll: 2100,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

			$('.block-40').scrollAnimate({
				startScroll: 2100,
				endScroll: 2200,
				cssProperty: 'top',
				before: 50,
				after: 0
			}).scrollAnimate({
				startScroll: 2100,
				endScroll: 2200,
				cssProperty: 'opacity',
				before: 0,
				after: 1
			});

		}

		// $('section.grid_9.t-b-spacing, section.grid_3.t-b-spacing').scrollAnimate({
		// 	startScroll: 100,
		// 	endScroll: 500,
		// 	cssProperty: 'top',
		// 	before: -200,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 100,
		// 	endScroll: 500,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#six_step_process h2').scrollAnimate({
		// 	startScroll: 500,
		// 	endScroll: 600,
		// 	cssProperty: 'top',
		// 	before: -35,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 500,
		// 	endScroll: 600,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#six_step_process .sm-hd').scrollAnimate({
		// 	startScroll: 600,
		// 	endScroll: 700,
		// 	cssProperty: 'top',
		// 	before: -35,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 600,
		// 	endScroll: 700,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#six_step_process p.cont').scrollAnimate({
		// 	startScroll: 800,
		// 	endScroll: 1000,
		// 	cssProperty: 'top',
		// 	before: 80,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 800,
		// 	endScroll: 1000,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });


		// $('#three_greate_reasons h2').scrollAnimate({
		// 	startScroll: 1000,
		// 	endScroll: 1300,
		// 	cssProperty: 'top',
		// 	before: -35,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1000,
		// 	endScroll: 1300,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#three_greate_reasons p.sm-hd').scrollAnimate({
		// 	startScroll: 1100,
		// 	endScroll: 1400,
		// 	cssProperty: 'top',
		// 	before: -35,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1100,
		// 	endScroll: 1400,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#three_greate_reasons .content ul li:nth-child(1)').scrollAnimate({
		// 	startScroll: 1150,
		// 	endScroll: 1400,
		// 	cssProperty: 'left',
		// 	before: -10,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1150,
		// 	endScroll: 1400,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#three_greate_reasons .content ul li:nth-child(2)').scrollAnimate({
		// 	startScroll: 1200,
		// 	endScroll: 1600,
		// 	cssProperty: 'top',
		// 	before: 80,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1200,
		// 	endScroll: 1600,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#three_greate_reasons .content ul li:nth-child(3)').scrollAnimate({
		// 	startScroll: 1300,
		// 	endScroll: 1600,
		// 	cssProperty: 'right',
		// 	before: -10,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1300,
		// 	endScroll: 1600,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });

		// $('#before_footer .grid_9').scrollAnimate({
		// 	startScroll: 1500,
		// 	endScroll: 1800,
		// 	cssProperty: 'top',
		// 	before: 50,
		// 	after: 0
		// }).scrollAnimate({
		// 	startScroll: 1500,
		// 	endScroll: 1800,
		// 	cssProperty: 'opacity',
		// 	before: 0,
		// 	after: 1
		// });


		/*Adding class grid_3*/
		$( ".four-cols .views-row" ).addClass( "grid_3" );

	});
}(jQuery));
