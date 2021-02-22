function playSound(event) {
	const keyCode =
		event.type == "keydown" ? event.keyCode : this.getAttribute("data-key");
	const key = document.querySelector('.key[data-key="' + keyCode + '"]');
	const audio = document.querySelector('audio[data-key="' + keyCode + '"]');
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		key.classList.add("playing");
	}
}
function removeTransform() {
	this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("click", playSound));
keys.forEach((key) => key.addEventListener("transitionend", removeTransform));
window.addEventListener("keydown", playSound);
