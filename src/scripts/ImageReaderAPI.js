import axios from 'axios'

const ImageReaderAPI = {
    getTextFrom: async function (IMAGE_URL) {
        const apiKey = 'acc_29c9efc104e1da6';
        const apiSecret = '2c5cbd76dcf0587aaae3e3da19c4d351';

        try {
            const response = await axios.get(`https://api.imagga.com/v2/text?image_url=${IMAGE_URL}`, {
                auth: {
                    username: apiKey,
                    password: apiSecret
                }
            })

            return response.data
        } catch (error) {
            console.log(error);
            return null
        }
    }
}

export default ImageReaderAPI