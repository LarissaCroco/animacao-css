document.addEventListener('DOMContentLoaded', function() {
    
    var audio = new Audio('./babyshark-acustico.m4a');
    audio = document.getElementById('audio');

    var audioButton = document.getElementsByClassName('audio-button');

    Array.from(audioButton).forEach(btn => {
        btn.addEventListener('click', playAudio.bind(this, btn));
    })
 
    function playAudio(button){
        console.log('button => ', button);

        if(button.src.includes("play-button.svg")){
            button.src = "./images/pause-button.svg";
            audio.play();
        } else{
            button.src = "./images/play-button.svg";
            audio.pause();
        }
    }
});
