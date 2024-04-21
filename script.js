document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const cropDetails = document.querySelector('.crop-details');

    toggleButton.addEventListener('click', function() {
        cropDetails.classList.toggle('visible');
        const buttonText = cropDetails.classList.contains('visible') ? 'Hide Details' : 'Show Details';
        toggleButton.textContent = buttonText;
    });
});
