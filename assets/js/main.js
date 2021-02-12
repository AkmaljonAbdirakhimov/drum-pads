function playSound(event) {
	var dataKey =
		event.type == "keydown"
			? (dataKey = event.keyCode)
			: (dataKey = this.getAttribute("data-key"));

	const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
	const key = document.querySelector(`.key[data-key="${dataKey}"]`);

	if (audio) {
		audio.currentTime = 0; // rewind to the start
		audio.play();

		key.classList.add("playing");
	}
}
function removeTransition(event) {
	if (event.propertyName == "transform") {
		this.classList.remove("playing");
	}
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playSound));
window.addEventListener("keydown", playSound);
