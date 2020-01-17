document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('./babyshark-acustico.m4a');
    audio = document.getElementById('audio');
    console.log(audio);

    var shark = document.getElementsByClassName('image');
    console.log(shark);
    Array.from(shark).forEach(img => {
        console.log(img);
        img.addEventListener('click', playAudio, false);
    })
    
    function update(){
        console.log(audio.currentTime, audio.duration);
    }
    
    function playAudio(){
        console.log(audio);
        audio.play();
        console.log(audio.currentTime, audio.duration);
    }
});
