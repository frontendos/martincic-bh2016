/*
	By default, first image is shown, others are hidden
*/
int currentPic = 0;

function goToPrevious ()
{
	var nextPosition;
	if(currentPic == 0)
	{
		nextPosition = 2;
	}
	else if(currentPic == 1){
		nextPosition = 0;
	}
	else if(currentPic == 2){
		nextPosition = 1;
	}

	handle(nextPosition);
	currentPic = nextPosition;
}

function goToNext () 
{
	var nextPosition;
	if(currentPic  == 0)
	{
		nextPosition = 1;
	}
	else if(currentPic == 1){
		nextPosition = 2;
	}
	else if(currentPic == 2){
		nextPosition = 0;
	}

	handle(nextPosition);
	currentPic = nextPosition;
}

function handle (position)
{
	var firstImage = $('first_image');
	var secondImage = $('second_image');
	var thirdImage = $('third_image');
	switch(position)
	{
		case 0:{
			firstImage.addClass('active');
			firstImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 1:{
			secondImage.addClass('active');
			secondImage.removeClass('hidden');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 2:{
			thirdImage.addClass('active');
			thirdImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
		}
	}
}


/* Without inner method calling */
/*
function goToPrevious ()
{
	var nextPosition;
	if(currentPic == 0)
	{
		nextPosition = 2;
	}
	else if(currentPic == 1){
		nextPosition = 0;
	}
	else if(currentPic == 2){
		nextPosition = 1;
	}

	var firstImage = $('first_image');
	var secondImage = $('second_image');
	var thirdImage = $('third_image');
	switch(position)
	{
		case 0:{
			firstImage.addClass('active');
			firstImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 1:{
			secondImage.addClass('active');
			secondImage.removeClass('hidden');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 2:{
			thirdImage.addClass('active');
			thirdImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
		}
	}
	currentPic = nextPosition;
}

function goToNext () {
	var nextPosition;

	if(currentPic  == 0)
	{
		nextPosition = 1;
	}
	else if(currentPic == 1){
		nextPosition = 2;
	}
	else if(currentPic == 2){
		nextPosition = 0;
	}

	var firstImage = $('first_image');
	var secondImage = $('second_image');
	var thirdImage = $('third_image');
	switch(position)
	{
		case 0:{
			firstImage.addClass('active');
			firstImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 1:{
			secondImage.addClass('active');
			secondImage.removeClass('hidden');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
			thirdImage.addClass('hidden');
			thirdImage.removeClass('active');
			break;
		}
		case 2:{
			thirdImage.addClass('active');
			thirdImage.removeClass('hidden');
			secondImage.addClass('hidden');
			secondImage.removeClass('active');
			firstImage.addClass('hidden');
			firstImage.removeClass('active');
		}
	}

	currentPic = nextPosition;
}*/