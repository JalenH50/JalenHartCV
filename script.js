document.addEventListener("DOMContentLoaded", function() {
    var Ebutton = document.querySelector(".Experience-Button");
    var Econtent = document.querySelector(".Experience-Content");
    var Rbutton = document.querySelector(".References-Button");
    var Rcontent = document.querySelector(".References-Content");
    var Lbutton = document.querySelector(".Coding-Languages-Button")
    var Lcontent = document.querySelector(".Coding-Languages-Content")

    Ebutton.addEventListener("click", function() {
        if (Econtent.classList.contains("open")) {
            Econtent.style.height = Econtent.scrollHeight + "px";
            requestAnimationFrame(() => {
                Econtent.style.height = "0";
            });
            
            Econtent.addEventListener("transitionend", () => {
                Econtent.style.display = "none";
                Econtent.style.height = "";
            }, { once: true });
            
            Ebutton.textContent = "Experience ▶";
            Econtent.classList.remove("open");
        } else {
            Econtent.style.display = "block";
            const height = Econtent.scrollHeight + "px";
            Econtent.style.height = "0";
            requestAnimationFrame(() => {
                Econtent.style.height = height;
            });
            
            Econtent.classList.add("open");
            Ebutton.textContent = "Experience ▼";
        }
    });

    Rbutton.addEventListener("click", function() {
        if (Rcontent.classList.contains("open")) {
            Rcontent.style.height = Rcontent.scrollHeight + "px";
            requestAnimationFrame(() => {
                Rcontent.style.height = "0";
            });
            
            Rcontent.addEventListener("transitionend", () => {
                Rcontent.style.display = "none";
                Rcontent.style.height = "";
            }, { once: true });
            
            Rbutton.textContent = "References ▶";
            Rcontent.classList.remove("open");
        } else {
            Rcontent.style.display = "block";
            const height = Rcontent.scrollHeight + "px";
            Rcontent.style.height = "0";
            requestAnimationFrame(() => {
                Rcontent.style.height = height;
            });
            
            Rcontent.classList.add("open");
            Rbutton.textContent = "References ▼";
        }
    });

    Lbutton.addEventListener("click", function() {
        if (Lcontent.classList.contains("open")) {
            Lcontent.style.height = Lcontent.scrollHeight + "px";
            requestAnimationFrame(() => {
                Lcontent.style.height = "0";
            });
            
            Lcontent.addEventListener("transitionend", () => {
                Lcontent.style.display = "none";
                Lcontent.style.height = "";
            }, { once: true });
            
            Lbutton.textContent = "Coding Languages ▶";
            Lcontent.classList.remove("open");
        } else {
            Lcontent.style.display = "block";
            const height = Lcontent.scrollHeight + "px";
            Lcontent.style.height = "0";
            requestAnimationFrame(() => {
                Lcontent.style.height = height;
            });
            
            Lcontent.classList.add("open");
            Lbutton.textContent = "Coding Languages ▼";
        }
    });
})
