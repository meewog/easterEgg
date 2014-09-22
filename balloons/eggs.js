$(
	function()
	{
		start();
	}
)


function start()
{
	console.log('start')

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

}