// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdowns
    const dropdowns = document.querySelectorAll(".status-dropdown");

    // Add event listener to each dropdown
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("change", function() {
            const selectedOption = this.value;
            const photo = this.closest(".photo");
            const photoName = photo.querySelector("img").alt;
            console.log(`Voucher ${photoName} marked as: ${selectedOption}`);
            // You can send this information to a server or store it locally
            // For demonstration, we'll just log it to the console
        });
    });
});