const SpeechSDK = require('microsoft-cognitiveservices-speech-sdk')

const serviceRegion = "westus"
const speechConfig = SpeechSDK.SpeechTranslationConfig.fromSubscription("8c857a412d4a4414945c7af7cfe90970", serviceRegion)

const LoginPhrases = ['log in', 'sign in']
const SignUpPhrases = ['register', 'sign up']

const SpeechAPI = {
    voiceToText: function (callback, sourceLanguage = "en-US", targetLanguage = "en") {
        speechConfig.speechRecognitionLanguage = sourceLanguage;
        speechConfig.addTargetLanguage(targetLanguage)

        const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput()

        let text = ""
        let recognizer = new SpeechSDK.TranslationRecognizer(speechConfig, audioConfig)

        recognizer.recognizeOnceAsync(
            function (result) {
                if (result.reason === SpeechSDK.ResultReason.TranslatedSpeech) {
                    let translation = result.translations.get(targetLanguage)
                    text += translation

                    callback(text)
                }

                recognizer.close()
                recognizer = undefined
            },
            function (error) {
                recognizer.close()
                recognizer = undefined

                console.error(error);
            });
    },

    voiceCommand: async function (callback, sourceLanguage = "en-US", targetLanguage = "en") {
        this.voiceToText((result) => {
            console.log(result);

            LoginPhrases.forEach(phrase => {
                if (result.toLowerCase().includes(phrase)) {
                    callback('ACTION_LOGIN')
                    return
                }
            })

            SignUpPhrases.forEach(phrase => {
                if (result.contains(phrase)) {
                    callback('ACTION_SIGNUP')
                    return
                }
            })
        }, sourceLanguage, targetLanguage)
    }
}

export default SpeechAPI