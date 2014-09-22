$(
	function()
	{
		start()
		positionBalloons
	}
)


function start()
{
	addBalloons()
}

function addBalloons()
{
	$('body').append
	(
		'<img id="balloon1" class="artist" src="img/balloon1.png" /><img id="balloon2" class="artist" src="img/balloon2.png" />'
	)

	animateBalloons()
}

function animateBalloons()
{
	$('#balloon1').animate
	(
		{
			top: '50px'
		},2400
	)

	$('#balloon2').animate
	(
		{
			top: '120px'
		},3400
	)

	setTimeout(function() 
	{
		console.log('trigger')
		balloonsUpAndAway()
	}, 7000);
}

function balloonsUpAndAway()
{
	$('#balloon1').animate
	(
		{
			top: '-500px'
		},3400
	)

	$('#balloon2').animate
	(
		{
			top: '-500px'
		},2400
	)
}

function positionBalloons()
{
	var		width=$('.body').width()

	console.log(width)
}