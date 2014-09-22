$('.beer').hoverIntent
(
	{
		over: 	fillBeer,
		out:  	drainBeer,
		timeout: 0,
		interval: 300
	}
);

function fillBeer()
{
	$('#liquid')
	.animate
	(
		{
			top: '380px'
		},
		1500
	);

	setTimeout
	(
		function()
		{
			$('.bubble').show();
		}, 500
	);
	
}

function drainBeer()
{
	$('#liquid')
	.animate
	(
		{
			top: '110%'
		},
		700
	);

	setTimeout
	(
		function()
		{
			$('.bubble').hide();
		}, 0
	);
}