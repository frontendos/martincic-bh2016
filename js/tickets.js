
boolean imagePicked = false;
const int UNSELECTED_INDEX = -1;
int pickedImageIndex = UNSELECTED_INDEX;

function buyATicket () {

	if(!imagePicked){
		window.alert("Pick a buddy image first!");
		return;
	}

	// Validate form
	var nameHandle = $('ticket_name');
	var lastNameHandle = $('ticket_last_name');
	var name = nameHandle.val();
	var lastName = lastNameHandle.val();

	if(name.isEmpty())
	{
		window.alert("Name is empty.");
		return;
	}

	if(lastName.isEmpty()){
		window.alert("Last name is empty.");
	}

	nameHandle.innerHtml = "";
	lastNameHandle.innerHtml = "";
	deselectImage(pickedImageIndex);
	imagePicked = false;
	pickedImageIndex = UNSELECTED_INDEX;

	window.alert("Enjoy your trip to Mars. :)");
}

function deselectImage(index)
{
	// Deselect currently selected image
	if(pickedImageIndex == 1)
	{
		var buddy1 = $('buddy_1');
		buddy1.addClass('unselected')
		buddy1.removeClass('selected');
	} else (pickedImageIndex == 2){
		var buddy2 = $('buddy_2');
		buddy2.addClass('unselected')
		buddy2.removeClass('selected');
	} else (pickedImageIndex == 3){
		var buddy3 = $('buddy_3');
		buddy3.addClass('unselected')
		buddy3.removeClass('selected');
	} else if(pickedImageIndex == 4){
		var buddy4 = $('buddy_4');
		buddy4.addClass('unselected')
		buddy4.removeClass('selected');
	} else if(pickedImageIndex == 5){
		var buddy5 = $('buddy_5');
		buddy5.addClass('unselected')
		buddy5.removeClass('selected');
	} else if(pickedImageIndex == 6){
		var buddy6 = $('buddy_6');
		buddy6.addClass('unselected')
		buddy6.removeClass('selected');
	}
}

function setPictureEnabled(index){
	if(imagePicked)
	{
		deselectImage(index);
	}

	imagePicked = true;
	pickedImageIndex = index;

	// Select new image
	if(pickedImageIndex == 1)
	{
		var buddy1 = $('buddy_1');
		buddy1.addClass('selected')
		buddy1.removeClass('unselected');
	} else (pickedImageIndex == 2){
		var buddy2 = $('buddy_2');
		buddy2.addClass('selected')
		buddy2.removeClass('unselected');
	} else (pickedImageIndex == 3){
		var buddy3 = $('buddy_3');
		buddy3.addClass('selected')
		buddy3.removeClass('unselected');
	} else if(pickedImageIndex == 4){
		var buddy4 = $('buddy_4');
		buddy4.addClass('selected')
		buddy4.removeClass('unselected');
	} else if(pickedImageIndex == 5){
		var buddy5 = $('buddy_5');
		buddy5.addClass('selected')
		buddy5.removeClass('unselected');
	} else if(pickedImageIndex == 6){
		var buddy6 = $('buddy_6');
		buddy6.addClass('selected')
		buddy6.removeClass('unselected');
	}
}