
/* Handles the header section selection logic */
function select (position) 
{
	var gallerySelector = $('gallery_id');
	var crewSelector = $('crew_id');
	var ticketSelector = $('ticket_id');

	var gallerySection = $('section_gallery');
	var crewSection = $('section_crew');
	var ticketSection = $('section_ticket');

	if(position == 1)
	{
		gallerySelector.addClass('active');
		gallerySelector.removeClass('hidden');
		gallerySection.addClass('active');
		gallerySection.removeClass('hidden');

		crewSelector.addClass('hidden');
		crewSelector.removeClass('active');
		crewSection.addClass('hidden');
		crewSection.removeClass('active');

		ticketSelector.addClass('hidden');
		ticketSelector.removeClass('active');
		ticketSection.addClass('hidden');
		ticketSectiin.removeClass('active');
	}
	else if(position == 2)
	{
		crewSelector.addClass('active');
		crewSelector.removeClass('hidden');
		crewSection.addClass('active');
		crewSection.removeClass('hidden');

		gallerySelector.addClass('hidden');
		gallerySelector.removeClass('active');
		gallerySection.addClass('hidden');
		gallerySection.removeClass('active');

		ticketSelector.addClass('hidden');
		ticketSelector.removeClass('active');
		ticketSection.addClass('hidden');
		ticketSectiin.removeClass('active');
	}
	else if(position == 3)
	{
		ticketSelector.addClass('active');
		ticketSelector.removeClass('hidden');
		ticketSection.addClass('active');
		ticketSection.removeClass('hidden');

		gallerySelector.addClass('hidden');
		gallerySelector.removeClass('active');
		gallerySection.addClass('hidden');
		gallerySection.removeClass('active');

		crewSelector.addClass('hidden');
		crewSelector.removeClass('active');
		crewSection.addClass('hidden');
		crewSection.removeClass('active');
	}
}