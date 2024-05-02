var images = ['img/pic1.png', 'img/pic2.png', 'img/pic3.png'];

var currentIndex = 0;
var previousIndex = -1;

var bannerContainer = document.getElementById('banner-container');

function start() {
    let interval = (Number(document.getElementById("switchingTime").value)) * 1000;
    setInterval(changeImage, interval);    
}

function changeImage() {
    var newIndex = Math.floor(Math.random() * images.length);
    // Ensure the same image is not displayed consecutively
    while (newIndex === currentIndex || newIndex === previousIndex) {
        newIndex = Math.floor(Math.random() * images.length);
    }
    previousIndex = currentIndex;
    currentIndex = newIndex;

    // Create new image element
    var img = new Image();
    img.src = images[currentIndex];
    img.classList.add('banner-img');

    // Remove the previous image
    var prevImage = document.querySelector('.banner-img');
    if (prevImage) {
        prevImage.classList.remove('show');
        setTimeout(function () {
            bannerContainer.removeChild(prevImage);
        });
    }

    // Add the new image
    bannerContainer.appendChild(img);
    setTimeout(function () {
        img.classList.add('show');
    }, 50); // Add a slight delay to ensure smooth transition
}
