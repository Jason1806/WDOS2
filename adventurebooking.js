// Get references to the necessary HTML elements
const adventureOptions = document.getElementById('adventure-options');
const nationalityDropdown = document.getElementById('nationality');
const guideDropdown = document.getElementById('guide');
const adventureBookingButton = document.querySelector('.Areservations-button');
const displayAdventureBookings = document.getElementById('DisplayAdventureBookings');

// Add an event listener to the "Book Adventure" button
adventureBookingButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather values from the inputs
    const selectedAdventure = adventureOptions.value;
    const numberOfAdults = adultsInput.value;
    const numberOfChildren = childrenInput.value;
    const selectedNationality = nationalityDropdown.value;
    const selectedGuide = guideDropdown.value;

    // Create a new booking object or data structure to hold the information
    const adventureBooking = {
        Adventure: selectedAdventure,
        Adults: numberOfAdults,
        Children: numberOfChildren,
        Nationality: selectedNationality,
        Guide: selectedGuide
    };
};