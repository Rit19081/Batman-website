var video = document.getElementById("backgroundAudio");
    function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }