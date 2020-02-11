﻿/* <![CDATA[ */
$(document).ready(function () {
	'use strict';

	$('.hoverMap').hover(function () {
		$(this.id).add('.mapLink').addClass('disableStuff');
	});

	$('.mapLink').hover(function () {
		// Always keep the first hover map on the page as "hoverImage"
		var bw = parseInt($(this).css('borderLeftWidth'), 10);
		var position = $(this).position();
		var height = document.getElementById('hoverImage').offsetHeight;
		var width = document.getElementById('hoverImage').offsetWidth;
		var image_src = document.getElementById('hoverImage').src;

		// For "Set Rate Environment" Page for Scenario Builder 
		if ($(".hoverImage_RE")[0]){
			var height_RE = document.getElementById('hoverImage_RE').offsetHeight; // don't forget to change the var height
			var width_RE = document.getElementById('hoverImage_RE').offsetWidth; // don't forget to change the width
			var image_src_RE = document.getElementById('hoverImage_RE').src; // here too
		}

		// For "Set Adjustment Rules" Page for Scenario Builder
		if ($(".hoverImage_AR")[0]){
			var height_AR = document.getElementById('hoverImage_AR').offsetHeight;
			var width_AR = document.getElementById('hoverImage_AR').offsetWidth;
			var image_src_AR = document.getElementById('hoverImage_AR').src;
		}
				
		// For "Curve Comparison 2Charts" Page for Curve Comparison
		if ($(".hoverImage_CC2")[0]){
			var height_CC2 = document.getElementById('hoverImage_CC2').offsetHeight;
			var width_CC2 = document.getElementById('hoverImage_CC2').offsetWidth;
			var image_src_CC2 = document.getElementById('hoverImage_CC2').src;
		}
				
		// For "CD Maturity Schedule dashboard" Page for Scenario Builder 
		if ($(".hoverImage_CD")[0]){
			var height_CD = document.getElementById('hoverImage_CD').offsetHeight; // don't forget to change the var height
			var width_CD = document.getElementById('hoverImage_CD').offsetWidth; // don't forget to change the width
			var image_src_CD = document.getElementById('hoverImage_CD').src; // here too
		}
		
		// For "Scenario Output" Page for Scenario Output 
		if ($(".hoverImage_SO")[0]){
			var height_SO = document.getElementById('hoverImage_SO').offsetHeight; // don't forget to change the var height
			var width_SO = document.getElementById('hoverImage_SO').offsetWidth; // don't forget to change the width
			var image_src_SO = document.getElementById('hoverImage_SO').src; // here too
		}
		// For "Optimization Constraints" Page for Optimization Builder 
		if ($(".hoverImage_OC")[0]){
			var height_OC = document.getElementById('hoverImage_OC').offsetHeight; // don't forget to change the var height
			var width_OC = document.getElementById('hoverImage_OC').offsetWidth; // don't forget to change the width
			var image_src_OC = document.getElementById('hoverImage_OC').src; // here too
		}		
		// For "Optimization Dashboard" Page for Optimization Builder 
		if ($(".hoverImage_OO")[0]){
			var height_OO = document.getElementById('hoverImage_OO').offsetHeight; // don't forget to change the var height
			var width_OO = document.getElementById('hoverImage_OO').offsetWidth; // don't forget to change the width
			var image_src_OO = document.getElementById('hoverImage_OO').src; // here too
		}			
		// For "All Flows Market Dashboard" Page for Optimization Builder 
		if ($(".hoverImage_AF")[0]){
			var height_AF = document.getElementById('hoverImage_AF').offsetHeight; // don't forget to change the var height
			var width_AF = document.getElementById('hoverImage_AF').offsetWidth; // don't forget to change the width
			var image_src_AF = document.getElementById('hoverImage_AF').src; // here too
		}				
		// For "General Analytics2" hover over for General Analtycis page 
		if ($(".hoverImage_G2")[0]){
			var height_G2 = document.getElementById('hoverImage_G2').offsetHeight; // don't forget to change the var height
			var width_G2 = document.getElementById('hoverImage_G2').offsetWidth; // don't forget to change the width
			var image_src_G2 = document.getElementById('hoverImage_G2').src; // here too
		}				
		// For "General Analytics3 hover over for General Analytics page 
		if ($(".hoverImage_G3")[0]){
			var height_G3 = document.getElementById('hoverImage_G3').offsetHeight; // don't forget to change the var height
			var width_G3 = document.getElementById('hoverImage_G3').offsetWidth; // don't forget to change the width
			var image_src_G3 = document.getElementById('hoverImage_G3').src; // here too		
		}					
		// For "Bank Data Analytics Balances hover over for the Bank Data Analytics page 
		if ($(".hoverImage_BDA")[0]){
			var height_BDA = document.getElementById('hoverImage_BDA').offsetHeight; // don't forget to change the var height
			var width_BDA = document.getElementById('hoverImage_BDA').offsetWidth; // don't forget to change the width
			var image_src_BDA = document.getElementById('hoverImage_BDA').src; // here too
		}					
		// For "Balance Waterfall One Month hover over for the Bank Data Balance Waterfall page 
		if ($(".hoverImage_BWOM")[0]){
			var height_BWOM = document.getElementById('hoverImage_BWOM').offsetHeight; // don't forget to change the var height
			var width_BWOM = document.getElementById('hoverImage_BWOM').offsetWidth; // don't forget to change the width
			var image_src_BWOM = document.getElementById('hoverImage_BWOM').src; // here too
		}				

		// These "if" statements are new
		if(this.classList.contains('hoverImage')){					
			$(this).css({
				'background': 'url(' + image_src + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width + 'px ' + height + 'px'
			});
		} else if (this.classList.contains('hoverImage_RE')){
			$(this).css({
				'background': 'url(' + image_src_RE + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_RE + 'px ' + height_RE + 'px'
			});
		} else if (this.classList.contains('hoverImage_AR')){
			$(this).css({
				'background': 'url(' + image_src_AR + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_AR + 'px ' + height_AR + 'px'
				});
		} else if (this.classList.contains('hoverImage_CC2')){
			$(this).css({
				'background': 'url(' + image_src_CC2 + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_CC2 + 'px ' + height_CC2 + 'px'
				});
		} else if (this.classList.contains('hoverImage_CD')){
			$(this).css({
				'background': 'url(' + image_src_CD + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_CD + 'px ' + height_CD + 'px'
				});
		} else if (this.classList.contains('hoverImage_SO')){
			$(this).css({
				'background': 'url(' + image_src_SO + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_SO + 'px ' + height_SO + 'px'
				});
		} else if (this.classList.contains('hoverImage_OC')){
			$(this).css({
				'background': 'url(' + image_src_OC + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_OC + 'px ' + height_OC + 'px'
				});
		} else if (this.classList.contains('hoverImage_OO')){
			$(this).css({
				'background': 'url(' + image_src_OO + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_OO + 'px ' + height_OO + 'px'
				});
		} else if (this.classList.contains('hoverImage_AF')){
			$(this).css({
				'background': 'url(' + image_src_AF + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_AF + 'px ' + height_AF + 'px'
				});	
		} else if (this.classList.contains('hoverImage_G2')){
			$(this).css({
				'background': 'url(' + image_src_G2 + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_G2 + 'px ' + height_G2 + 'px'
				});	
		} else if (this.classList.contains('hoverImage_G3')){
			$(this).css({
				'background': 'url(' + image_src_G3 + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_G3 + 'px ' + height_G3 + 'px'
				});	
		} else if (this.classList.contains('hoverImage_BDA')){
			$(this).css({
				'background': 'url(' + image_src_BDA + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_BDA + 'px ' + height_BDA + 'px'
				});	
		} else if (this.classList.contains('hoverImage_BWOM')){
			$(this).css({
				'background': 'url(' + image_src_BWOM + ')',
				'background-position': 'top -' + (position.top + bw) + 'px' + ' ' + 'left -' + (position.left + bw) + 'px',
				'background-repeat': 'no-repeat',
				'background-size':  width_BWOM + 'px ' + height_BWOM + 'px'
				});	
				} // When adding a hover map, write the next "else if" statement here
		// Don't forget to change image_src, width, and height!
	},
	function () {
		$(this).css({
			'background-image': 'none'
		});
	});

	$('.mapLink').each(function () {
		var data = $(this).data();
		var title = $(this).attr('href');
		var target = 'false';
		var offsetX = 0;
		var offsetY = 0;
		var my = 'bottom left';
		var at = 'top right';

		if ($(this).attr('data-tooltip-atParent') === "true") {
			target = $(this).parent();
		}

		$(this).qtip({
			prerender: true,
			style: {
				tip: {
					corner: false
				},
				classes: 'qtip-bootstrap popUp'
			},
			show: {
				solo: true
			},
			position: {
				viewport: $(window),
				my: my,
				at: at,
				target: target,
				adjust: {
					method: 'shift',
					x: offsetX,
					y: offsetY
				}
			},
			content: {
				text: $('div' + title).html()
			},
			hide: {
				fixed: true,
				delay: 300
			}
		});

		for (var i in data) {
			$(this).qtip('api').set(i, data[i]);
		}
	});

	$('.mapLink').click(function (event) {
		event.preventDefault();
	});
});
/* ]]> */