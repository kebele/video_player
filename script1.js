const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const mute = document.getElementById('mute');
const volumeSlider = document.getElementById('volumeSlider');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const fullScreen = document.getElementById('fullScreen');


//play and pause video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else {
        video.pause();
    }
}

//mute audio
function audioStatus(){
    // return true;
    if(video.muted){
        video.muted = false;
        mute.innerHTML = `<i class="fas fa-volume-up fa-2x"></i>`
    }else {
        // video.pause();
        video.muted = true;
        mute.innerHTML = `<i class="fas fa-volume-mute fa-2x"></i>`
    }
}


//update play/pause icon
function updatePlayIcon(){
    // return true;
    if(video.paused){
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

//stop the video
function stopVideo(){
    // return true;
    video.currentTime = 0;
    video.pause();
}

//update progress & timestamp
function updateProgress(){
    // return true;
    // console.log(video.currentTime)
    // console.log(video.duration)
    progress.value = (video.currentTime / video.duration) * 100;

    // get the minutes
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    // get seconds
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
}

//set video time to progress
function setVideoProgress(){
    // return true;
    video.currentTime = (+progress.value * video.duration) / 100;
}

//set volume
function setVolume(){
    // return true;
    video.volume = volumeSlider.value / 100;
    if(volumeSlider.value == 0){
        mute.innerHTML = `<i class="fas fa-volume-mute fa-2x"></i>`
    } else {
        mute.innerHTML = `<i class="fas fa-volume-up fa-2x"></i>`
    }
}

//toggle full screen
function toggleFullScreen(){
    if(video.requestFullscreen){
        video.requestFullscreen();
    }else if(video.webkitRequestFullScreen){
        video.webkitRequestFullScreen();
    }else if(video.mozRequestFullScreen){
        video.mozRequestFullScreen();
    }
}



// event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
mute.addEventListener('click', audioStatus);
volumeSlider.addEventListener('change', setVolume);
fullScreen.addEventListener('click', toggleFullScreen)