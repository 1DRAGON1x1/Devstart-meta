document.getElementById("btn_rass").addEventListener("click", function() {
    window.open("https://www.instagram.com/devstart_meta/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D", "_blank");
});

const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function changeSlide(nextIndex) {
    slides[currentIndex].classList.remove("active");
    slides[nextIndex].classList.add("active");
    currentIndex = nextIndex;
}

document.getElementById("prevBtn").addEventListener("click", () => {
    let nextIndex = (currentIndex - 1 + slides.length) % slides.length;
    changeSlide(nextIndex);
});

document.getElementById("nextBtn").addEventListener("click", () => {
    let nextIndex = (currentIndex + 1) % slides.length;
    changeSlide(nextIndex);
});

function toggleText(buttonId, textId, arrowId, hiddenClass) {
    let text = document.getElementById(textId);
    let buttonText = document.getElementById(buttonId).querySelector(".buttonText");
    let arrow = document.getElementById(arrowId);

    if (text.classList.contains(hiddenClass)) {
        text.classList.remove(hiddenClass);
        buttonText.textContent = "Скрыть текст";
        arrow.textContent = "▲";
    } else {
        text.classList.add(hiddenClass);
        buttonText.textContent = "Показать текст";
        arrow.textContent = "▼";
    }
}

document.getElementById("toggleButton").addEventListener("click", function() {
    toggleText("toggleButton", "hiddenText", "arrow", "hidden");
});

document.getElementById("toggleButton_2").addEventListener("click", function() {
    toggleText("toggleButton_2", "hiddenText_2", "arrow_2", "hidden_2");
});

document.getElementById("toggleButton_3").addEventListener("click", function() {
    toggleText("toggleButton_3", "hiddenText_3", "arrow_3", "hidden_3");
});

document.getElementById('Btn_btn').addEventListener("click", () => {
    document.getElementById("UserGmail").value = "";
    document.getElementById("UserName").value = "";
    document.getElementById("UserNomer").value = "";
    document.getElementById("UserMessage").value = "";
});

