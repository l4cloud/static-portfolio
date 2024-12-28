
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': true,
				'scrollingSpeed': 600,
				'scrollOverflow': true,
				'scrolloverflowmacstyle': false,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})
