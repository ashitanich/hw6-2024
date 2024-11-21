var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
		video = document.querySelector("#player1");
		video.autoplay = false;
		video.loop = false;
		document.querySelector("#volume").innerText = `${video.volume * 100}%`;

});

// Play the video and update volume info
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
    const volumeValue = video.volume * 100; 
    document.querySelector("#volume").innerText = `${Math.round(volumeValue)}%`;
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// Skip ahead by 10 seconds
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip Ahead");
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;}
    console.log(`Current time: ${video.currentTime}s`);
});


// Slow down the video by 10%
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow Down");
    video.playbackRate -= 0.1;
    if (video.playbackRate < 0.1) {
        video.playbackRate = 0.1;}
    console.log(`New speed: ${video.playbackRate.toFixed(2)}x`);
});

// Speed up the video by 10%
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed Up");
    video.playbackRate += 0.1;
    if (video.playbackRate > 3.0) {
        video.playbackRate = 3.0;}
    console.log(`New speed: ${video.playbackRate.toFixed(2)}x`);
});

// Mute or unmute the video
document.querySelector("#mute").addEventListener("click", function() {
    const muteButton = document.querySelector("#mute");

    if (video.muted) {
        video.muted = false;
        muteButton.innerText = "Mute";
        console.log("Video unmuted");
    } else {
        video.muted = true;
        muteButton.innerText = "Unmute";
        console.log("Video muted");
    }
});

// Adjust the video volume using the slider
document.querySelector("#slider").addEventListener("input", function() {
    const volumeDisplay = document.querySelector("#volume");
    const volumeValue = this.value / 100;
    video.volume = volumeValue;
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
