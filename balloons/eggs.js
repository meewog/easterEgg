$(
	function()
	{
		start()
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
	var balloonHeight=$('#balloon1').height()*1.4;
	$('#balloon1').animate
	(
		{
			top: '-'+balloonHeight+'px'
		},3400
	)

	$('#balloon2').animate
	(
		{
			top: '-'+balloonHeight+'px'
		},2400
	)
}