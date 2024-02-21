const btn = document.querySelector('.talk')
const content = document.querySelector('.content')
const turn_on = document.querySelector("#turn_on");
const jarvis_intro = document.querySelector("#j_intro");
const time = document.querySelector("#time");
const machine = document.querySelector(".machine");

function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);

}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Boss...")
    }

    else if(hour>12 && hour<15){
        speak("Good Afternoon Master...")
    }

    else if(hour>15 && hour<19){
        speak("Good Evenining Boss...")
    }

    else{
        speak("Good Night Sir...")
    }

}

// show waether
function weather(location) {
    location = noida
    const weatherCont = document.querySelector(".temp").querySelectorAll("*");
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=48ddfe8c9cf29f95b7d0e54d6e171008`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
      if (this.status === 200) {
        let data = JSON.parse(this.responseText);
        weatherCont[0].textContent = `Location : ${data.name}`;
        weatherCont[1].textContent = `Country : ${data.sys.country}`;
        weatherCont[2].textContent = `Weather type : ${data.weather[0].main}`;
        weatherCont[3].textContent = `Weather description : ${data.weather[0].description}`;
        weatherCont[4].src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        weatherCont[5].textContent = `Original Temperature : ${ktc(
          data.main.temp
        )}`;
        weatherCont[6].textContent = `feels like ${ktc(data.main.feels_like)}`;
        weatherCont[7].textContent = `Min temperature ${ktc(data.main.temp_min)}`;
        weatherCont[8].textContent = `Max temperature ${ktc(data.main.temp_max)}`;
        weatherStatement = `sir the weather in ${data.name} is ${
          data.weather[0].description
        } and the temperature feels like ${ktc(data.main.feels_like)}`;
      } else {
        weatherCont[0].textContent = "Weather Info Not Found";
      }
    };
  
    xhr.send();
  }

window.addEventListener('load', ()=>{
    speak("Initializing JARVIS..");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition =  new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());

}

btn.addEventListener('click', ()=>{
    content.textContent = "Listening...."
    recognition.start();
})

function takeCommand(message){
    if(message.includes('hello')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }

    else if(message.includes("open youtube") || message.includes('on youtube') || message.includes('in youtube')){
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak("This is what i found on Youtube regarding " + message + '')
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes("open chat gpt")){
        window.open("https://chat.openai.com", "_blank");
        speak("Opening Chat Gpt...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("on wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('message papa ji')) {
        window.open(`whatsapp://send?phone=9717992109&text=${message.replace("message papa ji", "")}`, "_blank");
        const finalText = "Okay let's message papa ji";
        speak(finalText);
    }
    
    else if(message.includes('message monu mama ji')) {
        window.open(`whatsapp://send?phone=6395753641&text=${message.replace("message monu mama ji", "")}`, "_blank");
        const finalText = "Okay let's message monu mama ji";
        speak(finalText);
    }

    else if(message.includes('message sonu mama ji')) {
        window.open(`whatsapp://send?phone=+918750656552&text=${message.replace("message sonu mama ji", "")}`, "_blank");
        const finalText = "Okay let's message sonu mama ji";
        speak(finalText);
    }

    else if(message.includes('message mummy ji')) {
        window.open(`whatsapp://send?phone=9891923364&text=${message.replace("message mummy ji", "")}`, "_blank");
        const finalText = "Okay let's message Mummy ji";
        speak(finalText);
    }

    else if(message.includes('message shilu mausi ji')) {
        window.open(`whatsapp://send?phone=+917982057634&text=${message.replace("message shilu mausi ji", "")}`, "_blank");
        const finalText = "Okay let's message Mummy ji";
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
        wishMe();
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('document')) {
        window.open("https://docs.google.com/document/u/0/?ec=asw-docs-hero-goto")
        const finalText = "Okay I am Opening" + message + '';
        speak(finalText);
    }

    else if(message.includes('on spotify') || message.includes('in spotify') || message.includes('the music')) {
        window.open(`spotify:search:${message.replace("on spotify", "")}`, "_blank")
        const finalText = "Okay I am searching" + message + '';
        speak(finalText);
    }
    
    else if(message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    
    else if(message.includes("notepad")){
        window.open('Notepad:///');
        speak("Opening Notepad...")
    }
    
    else if(message.includes('document')) {
        window.open("https://docs.google.com/document/u/0/?ec=asw-docs-hero-goto")
        const finalText = "Okay I am Opening" + message + '';
        speak(finalText);
    }

    else if(message.includes('microsoft office')) {
        window.open("https://portal.office.com")
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    else if(message.includes('translate')){
        window.open(`https://translate.google.co.in/?hl=en&sl=en&tl=hi&text=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    else if(message.includes('amazon') || message.includes('on amazon') || message.includes('in amazon')){
        window.open(`https://www.amazon.in/s?k=${message.replace("amazon", "")}`, "_blank");
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    else if(message.includes('on bing ai') || message.includes('ai') || message.includes('bing ai')){
        window.open(`https://www.bing.com/search?q=${message.replace(" ", "+")}&showconv=1`, "_blank");
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }
    
    else if(message.includes('microsoft word') || message.includes('ms office word') || message.includes('ms word')) {
    window.open("Word:\\\\")
    const finalText = "Okay let's" + message + '';
    speak(finalText);
    }

    else if(message.includes("weather")) {
        speak("opening the weather report sir");
        let a = window.open(
        `https://www.google.com/search?q=weather+in+${
            JSON.parse(localStorage.getItem("jarvis_setup")).location
        }`
        );
        windowsB.push(a)
    }

    else if(message.includes('microsoft powerpoint')) {
        window.open("Powerpoint:\\\\")
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    else if(message.includes('vlc')) {
        window.open("vlc:\\\\")
        const finalText = "Okay let's" + message + '';
        speak(finalText);
    }

    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}
