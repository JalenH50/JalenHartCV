document.addEventListener("DOMContentLoaded", function() {
    var Ebutton = document.querySelector(".Experience-Button");
    var Econtent = document.querySelector(".Experience-Content");
    var Rbutton = document.querySelector(".References-Button");
    var Rcontent = document.querySelector(".References-Content");

    Ebutton.addEventListener("click", function() {
        if (Econtent.style.display === "block") {
            Econtent.style.display = "none";
            Ebutton.textContent = "Experience ▶"; // Update button text to show more
        } else {
            Econtent.style.display = "block";
            Ebutton.textContent = "Experience ▼"; // Update button text to show less
        }
    });

    Rbutton.addEventListener("click", function() {
        if (Rcontent.style.display === "block") {
            Rcontent.style.display = "none";
            Rbutton.textContent = "References ▶"; // Update button text to show more
        } else {
            Rcontent.style.display = "block";
            Rbutton.textContent = "References ▼"; // Update button text to show less
        }
    });
});