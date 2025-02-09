document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const closeMenu = document.querySelector(".close-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const homeLink = document.querySelector(".hide-on-mobile:nth-child(1)");
    const aboutLink = document.querySelector(".hide-on-mobile:nth-child(2)");
    const menuLinks = document.querySelectorAll(".mobile-menu a"); // All menu links
    const serviceLink = document.querySelector(".service-link"); // Services dropdown link
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Function to open the mobile menu
    function openMenu() {
        mobileMenu.classList.add("show");
        homeLink.style.display = "none";
        aboutLink.style.display = "none";
        closeMenu.style.display = "block"; // Show close button
        hamburger.style.display = "none";  // Hide hamburger
    }

    // Function to close the mobile menu
    function closeMobileMenu() {
        mobileMenu.classList.remove("show");
        homeLink.style.display = "block";
        aboutLink.style.display = "block";
        closeMenu.style.display = "none"; // Hide close button
        hamburger.style.display = "block"; // Show hamburger
    }

    // Open Mobile Menu Event
    hamburger.addEventListener("click", openMenu);

    // Close Mobile Menu Event
    closeMenu.addEventListener("click", closeMobileMenu);

    // Handle dropdowns
    document.querySelectorAll(".dropdown > a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let submenu = this.nextElementSibling;
            if (submenu) {
                submenu.parentElement.classList.toggle("show");
            }
        });
    });

    // Handle sub-dropdowns
    document.querySelectorAll(".sub-dropdown > a").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let subSubmenu = this.nextElementSibling;
            if (subSubmenu) {
                subSubmenu.parentElement.classList.toggle("show");
            }
        });
    });

    serviceLink.addEventListener("click", function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target) && !closeMenu.contains(event.target)) {
            closeMobileMenu();
        }
    });

    // Ensure clicking a section closes the menu EXCEPT Services
    menuLinks.forEach(link => {
        if (link !== serviceLink) { // Ignore the Services button
            link.addEventListener("click", function () {
                closeMobileMenu();
            });
        }
    });

    // Services dropdown should not close the mobile menu when clicked
    serviceLink.addEventListener("click", function (event) {
        event.preventDefault();
        let submenu = this.nextElementSibling;
        if (submenu) {
            submenu.parentElement.classList.toggle("show"); // Toggle dropdown
        }
    });

    // Clicking inside the dropdown opens the section & closes the menu
    dropdownItems.forEach(item => {
        item.addEventListener("click", function () {
            closeMobileMenu();
        });
    });
});
