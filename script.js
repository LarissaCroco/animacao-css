document.addEventListener('DOMContentLoaded', function () {

	var audio = new Audio('./babyshark-acustico.m4a');
	audio = document.getElementById('audio');

	var audioButton = document.getElementsByClassName('audio-button');

	Array.from(audioButton).forEach(btn => {
		btn.addEventListener('click', playAudio.bind(this, btn));
	})

	function playAudio(button) {
		if (button.src.includes("play-button.svg")) {
			button.src = "./images/pause-button.svg";
			audio.play();
		} else {
			button.src = "./images/play-button.svg";
			audio.pause();
		}
	}
});

document.addEventListener('DOMContentLoaded', () => {
	// Fiz um exemplo para primeiro card
	(() => {
		'use strict';
		const imageBabyShark = document.querySelector('#imgBabyShark');
		const audioButton = document.querySelector('#audio1');

		imageBabyShark.addEventListener('mouseenter', () => {
			audioButton.dispatchEvent(new Event('click'));
		});

		imageBabyShark.addEventListener('mouseleave', () => {
			audioButton.dispatchEvent(new Event('click'));
		})
	})();
});
