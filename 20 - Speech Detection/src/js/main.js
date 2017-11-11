window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognation = new SpeechRecognition();
recognation.interimResults = true;

let p = document.createElement("p");
words = document.querySelector(".words");
words.appendChild(p);

recognation.addEventListener("result", e => {
	const transcript = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join("");
	p.textContent(transcript);
	if (e.results[0].isFinale) {
		p = document.createElement("p");
		words.appendChild(p);
	}
});

recognation.addEventListener("end", recognation.start);
recognation.start();
