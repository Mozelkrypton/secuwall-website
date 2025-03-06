document.addEventListener("DOMContentLoaded", function () {
    // Sidebar Toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".sidebar").classList.toggle("active");
    });

    // Lightbox functionality for gallery images
    document.querySelectorAll(".gallery-img").forEach(img => {
        img.addEventListener("click", function () {
            openLightbox(this);
        });
    });

    // Email validation
    document.querySelector("form").addEventListener("submit", function (event) {
        let email = document.getElementById("email").value;
        let emailError = document.getElementById("email-error");
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            emailError.style.display = "block";
            event.preventDefault();
        } else {
            emailError.style.display = "none";
        }
    });

    // Toggle Pricing Plans
    document.querySelector("button[onclick='togglePricing()']").addEventListener("click", function () {
        let basicPrice = document.getElementById("basic-price");
        let premiumPrice = document.getElementById("premium-price");
        
        if (basicPrice.innerText.includes("/month")) {
            basicPrice.innerText = "$99.99/year";
            premiumPrice.innerText = "$199.99/year";
        } else {
            basicPrice.innerText = "$9.99/month";
            premiumPrice.innerText = "$19.99/month";
        }
    });

    // Function to open lightbox
    function openLightbox(img) {
        let lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");
        lightbox.innerHTML = `<img src="${img.src}" class="lightbox-img">`;
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener("click", function () {
            document.body.removeChild(lightbox);
        });
    }
});
function showFeature(featureId) {
    // Hide all feature sections
    document.querySelectorAll('.feature-content').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected feature
    document.getElementById(featureId).style.display = 'block';
}

// Show the first feature by default
document.addEventListener("DOMContentLoaded", function () {
    showFeature('vulnerability');
});
