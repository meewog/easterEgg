$(
	function()
	{
		start();
	}
)


function start()
{
	console.log('start')

	addBalloons()

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
	}, 5000);

}

function addBalloons()
{
	$('body').append
	(
		'<img id="balloon1" class="artist" src="img/balloon1.png" /><img id="balloon2" class="artist" src="img/balloon2.png" />'
	)
}