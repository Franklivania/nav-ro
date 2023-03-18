import axios from 'axios'

const FaceAPI = {
    faceColor: async function () {
        console.log('here')
        
        const apiKey = 'acc_29c9efc104e1da6';
        const apiSecret = '2c5cbd76dcf0587aaae3e3da19c4d351';

        const imageUrl = 'https://www.freeiconspng.com/uploads/obama-face-png-3.png';
        const url = 'https://api.imagga.com/v2/colors?image_url=' + encodeURIComponent(imageUrl);


        // todo
        try {
            const response = await axios.get(url, { username: apiKey, password: apiSecret });
            console.log(response);
        } catch (error) {
            console.log(error.response.body);
        }
    },

    faceAttributes: async function () {
        try {
            const API_KEY = 'RL86k-2luYJBrcRvIUR_dLMBHbQTPWgb'
            const API_SECRET = 'Q7VsGqWnO0JSt8oe9bqTp1usULLrNa8D'
            // can also be blob object
            const IMAGE_URL = 'https://www.freeiconspng.com/uploads/obama-face-png-3.png'
            const response = await axios.post(`https://api-us.faceplusplus.com/facepp/v1/skinanalyze?api_key=${API_KEY}&api_secret=${API_SECRET}&image_url=${IMAGE_URL}`)
            console.log(response);
            return response.data
        } catch (error) {
            console.error(error);
        }
    }
}

export default FaceAPI