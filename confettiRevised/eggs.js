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
		var randNum=Math.floor(Math.random() * pageWidth) + 0;
		createConfetti
		(
			confetti,
			randomColor(),
			i,
			randNum
		)
	}

	setTimeout(function(){
		showFlags();
	}, 5000)
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

function createConfetti(container, color, id, width)
{
	// var left	=parseInt(id*width),
	html		=[];
	html=
	[
		'<img src="img/'+color+'" class="easterEggs" data-id="'+id+'" data-action="animate" style="left:'+width+'px;">'
	]

	container.append
	(
		html.join('')
	);
	$('.easterEggs').fadeIn(0);

	setTimeout(function()
	{
		animateConfetti(id);
	}, Math.floor(Math.random() * 3500) + 100);

	
}

function animateConfetti(id)
{
	var delay			=Math.floor(Math.random() * 3000) + 1500,
		randomHeight	=Math.floor(Math.random() * 100) +0,
		heightDecimal	=randomHeight/100,
		windowHeight	=$(window).height(),
		thisHeight		=windowHeight*heightDecimal;
	$('.easterEggs[data-id="'+id+'"]').animate
	(
		{
			top: thisHeight,
			// duration: 900,
			complete: function()
			{
				delete thisHeight,randomHeight,heightDecimal,windowHeight;
				$(this).remove();
			}		
		},delay
	)
}

function showFlags()
{
	var flags 			=$('.artist'),
		windowWidth		=$(window).width()/2,
		windowHeight	=$(window).height()/2,
		carpetWidth		=$(window).width()*0.7,
		flagWidth		=$('.artist').width()-50,
		flagHeight		=$('.artist').height();

	$(flags[0]).css
	(
		{
			'left': windowWidth-flagWidth+'px'
		}
	).animate
	(
		{
			
			'top': windowHeight-63+carpetWidth/4+'px'
		},
		1000
	);

	$(flags[1]).css
	(
		{
			'left': windowWidth,
		}
	).animate
	(
		{
			'top': windowHeight-62-carpetWidth/4+'px'
		},
		1500
	);
}

function showFlagsBkp()
{
	var flags 			=$('.artist'),
		windowWidth		=$(window).width()/2,
		windowHeight	=$(window).height()/2,
		carpetWidth		=$(window).width()*0.7,
		flagWidth		=$('.artist').width()-50,
		flagHeight		=$('.artist').height(),

		flag1			=
		{
			'left': windowWidth-flagWidth+'px',
			'top': windowHeight-63+carpetWidth/4+'px'
		},

		flag2			=
		{
			'left': windowWidth,
			'top': windowHeight-62-carpetWidth/4+'px'
		};

	$(flags[0]).fadeTo
	(
		'slow', 1
	).css
	(
		flag1
	)

	$(flags[1]).fadeTo
	(
		'slow', 1
	).css
	(
		flag2
	)
}