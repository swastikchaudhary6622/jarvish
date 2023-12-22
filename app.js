const btn = document.querySelector('.talk')
const content = document.querySelector('.content')


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

    else if(hour>12 && hour<17){
        speak("Good Afternoon Master...")
    }

    else{
        speak("Good Evenining Sir...")
    }

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
    if(message.includes('hello jarvish') || message.includes('hello') || message.includes('hi jarvish')){
        speak("Hello Sir, How May I Help You?");
    }
    else if(message.includes('tell me about you') || message.includes('who are you') || message.includes('tel me about your maker') || message.includes('who is your creator')|| message.includes('tel me about your maker') || message.includes('jarvis who is your creator')){
        speak("Sir, I am a type week ai made by Swastik Chaudhary and santosh sen and krit Chaurasia from class 9b .  , How may I help you sir?");
    }
    else if(message.includes("open google")){
        window.open("https://google.com", "_blank");
        speak("Opening Google...")
    }
    else if(message.includes('where is my house key') || message.includes('jarvis where is my house key') || message.includes('where is my key') || message.includes('jarvis where is my key')|| message.includes('jarvis where is the key of my house') || message.includes('where is the key of the house')){
        speak("Sir, your key is under the white flower pot.   or     under the doorstep mat.     .     Take your keys Sir.");
    }
    else if(message.includes("tell me about vishwa bharati public school") || message.includes('jarvis tell me about visva bharati public school')|| message.includes('jarvis show me the home page of visva bharati public school') || message.includes('tell me all about visva bharati public school') || message.includes('jarvis tell me all about visva bharati public school')|| message.includes('jarvis where is the key of my house') || message.includes('where is the key of the house')){
        window.open("https://www.vbpsgn.com/", "_blank");
        speak("Vishwa Bharati Public School Greater Noida, located on prime land amidst the lush green ambience of the most modern township of the country was opened on 3rd April 2003. The school affiliated to CBSE, with classes from Play Group to Class XII is equipped with all requisites necessary for a good school such as Pre Primary Activity room, General Science, Mathematics, Computer, Chemistry, Physics, Biology labs, Library, Audio-visual, activity rooms and a huge playground")
    }
    else if(message.includes("open youtube")){
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...")
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
	    speak(finalText);
  
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speak(finalText);
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speak(finalText);
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speak(finalText);
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }

    else if(message.includes('world')) {
        window.open('Word:///')
        const finalText = "Opening Word";
        speak(finalText);
    }

    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speak(finalText);
    }
}