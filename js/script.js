


// Get the search button and search form
const searchBtn = document.getElementById('search-btn');
const searchForm = document.querySelector('.search-form');

// Add click event listener to the search button
searchBtn.addEventListener('click', () => {
    // Toggle the visibility of the search form
    searchForm.classList.toggle('active');
});



function playVideo() {
    document.getElementById("myVideo").play();
}

function pauseVideo() {
    document.getElementById("myVideo").pause();
}

function stopVideo() {
    var video = document.getElementById("myVideo");
    video.pause();
    video.currentTime = 0;
}

function seekVideo() {
    var video = document.getElementById("myVideo");
    var seekBar = document.getElementById("seekBar");
    var time = video.duration * (seekBar.value / 100);
    video.currentTime = time;
}

// Update the seek bar as the video plays
document.getElementById("myVideo").addEventListener("timeupdate", function() {
    var video = document.getElementById("myVideo");
    var seekBar = document.getElementById("seekBar");
    var value = (100 / video.duration) * video.currentTime;
    seekBar.value = value;
});


