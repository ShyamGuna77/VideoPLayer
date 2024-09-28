const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Functions

function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function UpdatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
       play.innerHTML= '<i class="fa fa-pause fa-2x"></i>'
    }
}


function UpdateProgress(){
  progress.value = video.currentTime/video.duration * 100;
  //Update Minutes 

  let mins = Math.floor(video.currentTime/60);
  if(mins < 10){
    mins = '0'+String(mins);
  }
  //Get  Secs 
  let secs = Math.floor(video.currentTime%60);
  if(secs < 10){
    secs = '0'+String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}


function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


function setVideoprogress(){
    video.currentTime =(+progress.value*video.duration )/100;
    //The Value + urinary operator converts input text(usually thy are strings) strings to numbers
    
}

//Event Listners 


video.addEventListener('click',toggleVideoStatus); 
video.addEventListener('pause',UpdatePlayIcon);
video.addEventListener('play',UpdatePlayIcon);
video.addEventListener('timeupdate',UpdateProgress);

play.addEventListener('click',toggleVideoStatus);

stop.addEventListener('click',stopVideo);

progress.addEventListener('change',setVideoprogress);


