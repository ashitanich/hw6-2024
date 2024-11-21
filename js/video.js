var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	    // Select the video element
		video = document.querySelector("#player1");

		// Turn off autoplay and looping
		video.autoplay = false;
		video.loop = false;
	
		// Initialize volume display
		document.querySelector("#volume").innerText = `${video.volume * 100}%`;

});

// Play the video and update volume info
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    document.querySelector("#volume").innerText = `${video.volume * 100}%`;
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// Skip ahead by 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");

    // Advance the video by 10 seconds
    video.currentTime += 10;

    // If the video length has been exceeded, reset to the start
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }

    // Log the current location of the video
    console.log(`Current time: ${video.currentTime}s`);
});


// Slow down the video by 10%
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");

    // Reduce playback rate by 10%
    video.playbackRate -= 0.1;

    // Ensure the playback rate does not go below a practical minimum
    if (video.playbackRate < 0.1) {
        video.playbackRate = 0.1;
    }

    // Log the new speed to the console
    console.log(`New speed: ${video.playbackRate.toFixed(2)}x`);
});

// Speed up the video by 10%
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");

    // Increase playback rate by 10%
    video.playbackRate += 0.1;

    // Ensure the playback rate does not exceed a practical maximum
    if (video.playbackRate > 3.0) {
        video.playbackRate = 3.0;
    }

    // Log the new speed to the console
    console.log(`New speed: ${video.playbackRate.toFixed(2)}x`);
});

// Mute or unmute the video
document.querySelector("#mute").addEventListener("click", function() {
    const muteButton = document.querySelector("#mute");

    if (video.muted) {
        // Unmute the video
        video.muted = false;
        muteButton.innerText = "Mute";
        console.log("Video unmuted");
    } else {
        // Mute the video
        video.muted = true;
        muteButton.innerText = "Unmute";
        console.log("Video muted");
    }
});

// Adjust the video volume using the slider
document.querySelector("#slider").addEventListener("input", function() {
    const volumeDisplay = document.querySelector("#volume");

    // Get the slider value and normalize it to a range of 0-1
    const volumeValue = this.value / 100;

    // Update the video volume
    video.volume = volumeValue;

    // Update the volume display text
    volumeDisplay.innerText = `${Math.round(volumeValue * 100)}%`;

    console.log(`Volume set to: ${Math.round(volumeValue * 100)}%`);
});

// Add the oldSchool class to the video
document.querySelector("#vintage").addEventListener("click", function() {
    console.log("Applying old-school styling");
    video.classList.add("oldSchool");
});

// Remove the oldSchool class from the video
document.querySelector("#orig").addEventListener("click", function() {
    console.log("Removing old-school styling");
    video.classList.remove("oldSchool");
});
