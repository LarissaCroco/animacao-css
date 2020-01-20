document.addEventListener('DOMContentLoaded', function() {
    
    var audio = new Audio('./babyshark-acustico.m4a');
    audio = document.getElementById('audio');

    var audioButton = document.getElementsByClassName('audio-button');

    Array.from(audioButton).forEach(btn => {
        btn.addEventListener('click', playAudio, false);
    })
 
    function playAudio(){
        Array.from(audioButton).forEach(btn => {
            console.log(btn.src);
            console.log(btn.src.includes("pause-button.svg"));

            if(btn.src.includes("play-button.svg")){
                btn.src = "./images/pause-button.svg";
                audio.play();
            } else{
                btn.src = "./images/play-button.svg";
                audio.pause();
            }
        })
    }
});
