var thumbnails = document.querySelectorAll('.thumbnail');
var slides = document.querySelectorAll('.slides video');
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.close');
var next = document.querySelector('.next');
var prev = document.querySelector('.prev');
var curSlide = 0

// PLAY THUMBNAIL VIDEOS ON HOVER 
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.play();
    });
    thumbnail.addEventListener('mouseout', () => {
        if (!thumbnail.paused) {
            thumbnail.pause();
        }
        thumbnail.currentTime = 0;
    });
});

// OPEN MODAL + PLAY RESPECTIVE VIDEO
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        modal.classList.add("show");
        modal.style.display = "flex";
        slides[index].style.display = "block";
        slides[index].play();
        curSlide = index
    });
});

// CLOSE MODAL + ESCAPE KEY
window.onclick = function (e) {
    if (e.target == modal) {
        modal.classList.remove("show");
        modal.style.display = "none";
        hideAll();
    }
};

closeBtn.onclick = (function () {
    modal.classList.remove("show");
    modal.style.display = "none";
    hideAll();
});

document.addEventListener("keydown", function (event) {
    if (event.code == "Escape") {
        modal.classList.remove("show");
        modal.style.display = "none";
        hideAll();
    };
});

// HIDE ALL + PAUSE ALL FUNCTION 
function hideAll() {
    slides.forEach((element, index) => {
        slides[index].style.display = "none";
        slides[index].style.display = "none";
        slides[index].pause();
    });
};

hideAll();

// PREV+NEXT BUTTONS + LEFT+RIGHT ARROW KEYS
next.onclick = function () {
    if (curSlide < slides.length - 1) {
        hideAll();
        curSlide = curSlide + 1;
        slides[curSlide].style.display = "block";
        slides[curSlide].play();
    };
};

document.addEventListener("keydown", function (event) {
    if (modal.style.display == "flex") {
        if (event.code === "ArrowRight") {
            if (curSlide < slides.length - 1) {
                hideAll();
                curSlide = curSlide + 1;
                slides[curSlide].style.display = "block";
                slides[curSlide].play();
            };
        };
    };
});

prev.onclick = function () {
    if (curSlide > 0) {
        hideAll();
        curSlide = curSlide - 1;
        slides[curSlide].style.display = "block";
        slides[curSlide].play();
    };
};

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowLeft") {
        if (modal.style.display == "flex") {
            if (curSlide > 0) {
                hideAll();
                curSlide = curSlide - 1;
                slides[curSlide].style.display = "block";
                slides[curSlide].play();
            };
        };
    };
});