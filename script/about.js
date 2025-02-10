

function toggleDetails() {
    const aboutDetails = document.getElementById('aboutDetails');
    const developerDetails = document.getElementById('developerDetails');
    const toggleIcon = document.getElementById('toggleIcon');

    if (developerDetails.style.display === 'none' || developerDetails.style.display === '') {
        developerDetails.style.display = 'block';
        aboutDetails.style.display = 'none';
        toggleIcon.classList.remove('fa-chevron-down');
        toggleIcon.classList.add('fa-chevron-up');
    } else {
        developerDetails.style.display = 'none';
        aboutDetails.style.display = 'block';
        toggleIcon.classList.remove('fa-chevron-up');
        toggleIcon.classList.add('fa-chevron-down');
    }
}

// Function to show/hide the back button based on scroll position
function handleScroll() {
    const backButtonContainer = document.querySelector('.back-button-container');
    const aboutContainer = document.querySelector('.about-container');

    // Check if the user has scrolled past the height of the about container
    if (window.scrollY > aboutContainer.offsetHeight) {
        backButtonContainer.style.display = 'block'; // Show the button
    } else {
        backButtonContainer.style.display = 'none'; // Hide the button
    }
}

// Check if the device is mobile
function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

// Event listener for scroll on mobile devices
if (isMobileDevice()) {
    window.addEventListener('scroll', handleScroll);
}

// Initial call to set the button visibility on page load
handleScroll(); // Call this to ensure the button is hidden on load

// Function to go back to the previous page
function goBack() {
    window.history.back();
}