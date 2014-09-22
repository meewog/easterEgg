$(function(){
	// check to see if confetti container exists
	if(!$('#confetti').length)
	{
		return
	}

	// get the page width and the umber of items from the element
	var pageWidth		=$('.container').width(),
		confetti 		=$('#confetti'),
		numberOfItems	=confetti.data('number'),
		confettiWidth	=pageWidth/numberOfItems;

		// need to calculate the spacing between the confetti


		// create each item
		for(i=0;i<numberOfItems;i++)
		{
			setTimeout(function() 
			{
				var randNum=Math.floor(Math.random() * pageWidth) + 0;
				createConfetti
				(
					confetti,
					randomColor(),
					randNum
				)
			}, Math.floor(Math.random() * 3500) + 100);
		}
})

function randomColor()
{
	var allFlags=[];
	allFlags=
	[
		'01','02','03','04','05','06',
		'07','08','09','10','11','12',
		'13','14','15','16','17','18',
		'19','20','21','22','23','24',
		'25','26','27','28','29','30',
		'31','32','33','34','35','36'
	];

	// console.log( allFlags[Math.floor(Math.random() * 35) + 0]);
	return allFlags[Math.floor(Math.random() * 35) + 0]+'.png';
}

function createConfetti(container, color, width)
{
	// var left	=parseInt(id*width),
	var confettiId=Math.random().toString(36).substring(7);
	var html		=[];
	html=
	[
		'<img src="img/'+color+'" class="easterEggs hide"  data-id="'+confettiId+'" data-action="animate" style="left:'+width+'px;">'
	]

	container.append
	(
		html.join('')
	);
	$('.easterEggs[data-id="'+confettiId+'"]').fadeIn(1000);
	animateConfetti(confettiId);
}

function animateConfetti(confettiId)
{
	var delay 			=Math.floor(Math.random() * 3000) + 1500,
		removeDelay		=Math.floor(Math.random() * 1000) + 300;
	$('.easterEggs[data-id="'+confettiId+'"]').animate
	(

		{
			top: $(window).height(),			
		}, delay,
		function()
		{
			$('.easterEggs[data-id="'+confettiId+'"]').remove();
		}
	);
}