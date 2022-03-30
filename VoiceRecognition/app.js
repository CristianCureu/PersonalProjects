// For this one, u must use Google Chrome
// And u should ask things that contain 'how are you' and 'what's up' if u want to bring back a greeting
// And u should say 'dark mode' and 'light mode' to modify the theme.
// This can be applied to lots of projects

const talk = document.querySelector(".talk");
const content = document.querySelector(".content");
const container = document.querySelector(".container");

const greetings = [
  "Doing good, hopefully your are good too",
  "Just good stuff, thanks for asking",
  "Everything is fine",
];

const SpeechRecognition = window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("microphone is activated, u can talk now");
};

recognition.onresult = function (event) {
  const currentResult = event.resultIndex;
  const transcript = event.results[currentResult][0].transcript;
  content.innerText = transcript;
  talkToMe(transcript);
};

talk.addEventListener("click", () => {
  recognition.start();
});

function talkToMe(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "i dont know what you said";
  if (message.includes("how are you") || message.includes("what's up")) {
    const finalMessage =
      greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalMessage;
  }
  if (message.includes("what is your name")) {
    speech.text = "My name is yohanis";
  }
  if (message.includes("dark mode")) {
    speech.text = "You are now in dark mode";
    container.classList.add("active");
    talk.classList.add("activeBtn");
    content.style.color = "white";
  }
  if (message.includes("light mode")) {
    speech.text = "you returned to light mode";
    container.classList.remove("active");
    talk.classList.remove("activeBtn");
    content.style.color = "black";
  }
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
