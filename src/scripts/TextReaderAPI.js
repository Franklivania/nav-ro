const TextReaderAPI = {
    getVoices: function () {
        let voices = speechSynthesis.getVoices()

        if (!voices.length) {
            // some time the voice will not be initialized so we can call spaek with empty string
            // this will initialize the voices 
            let utterance = new SpeechSynthesisUtterance("")
            speechSynthesis.speak(utterance)
            voices = speechSynthesis.getVoices()
        }

        return voices
    },


    speak: function (text, sourceLanguage, voice, rate, pitch, volume) {
        // create a SpeechSynthesisUtterance to configure the how text to be spoken 
        let speakData = new SpeechSynthesisUtterance()
        
        speakData.volume = volume // From 0 to 1
        speakData.rate = rate // From 0.1 to 10
        speakData.pitch = pitch // From 0 to 2
        speakData.text = text
        speakData.lang = sourceLanguage
        speakData.voice = voice

        // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
        speechSynthesis.speak(speakData)
    },

    readText: function (text, sourceLanguage = 'en') {
        if ('speechSynthesis' in window) {
            const voices = this.getVoices()
            const rate = 1, pitch = 2, volume = 1

            this.speak(text, sourceLanguage, voices[0], rate, pitch, volume)
        } else {
            console.error('Speech Synthesis Not Supported');
        }
    }
}

export default TextReaderAPI