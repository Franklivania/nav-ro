import axios from 'axios'

const FaceAPI = {
    resolveSkinType: function(id) {
        if (id === 0) return 'oily skin'
        if (id === 1) return 'dry skin'
        if (id === 2) return 'normal skin'
        if (id === 3) return 'mixed skin'
        return 'not found'
    },

    faceColor: async function (IMAGE_URL) {     
        const apiKey = 'acc_29c9efc104e1da6';
        const apiSecret = '2c5cbd76dcf0587aaae3e3da19c4d351';

        try {
            const response = await axios.get(`https://api.imagga.com/v2/colors?image_url=${IMAGE_URL}`, {
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
    },

    faceAttributes: async function (IMAGE_URL) {
        try {
            const API_KEY = 'RL86k-2luYJBrcRvIUR_dLMBHbQTPWgb'
            const API_SECRET = 'Q7VsGqWnO0JSt8oe9bqTp1usULLrNa8D'
            
            const response = await axios.post(`https://api-us.faceplusplus.com/facepp/v1/skinanalyze?api_key=${API_KEY}&api_secret=${API_SECRET}&image_url=${IMAGE_URL}`)
         
            return response.data
        } catch (error) {
            console.error(error);
            return null
        }
    }
}

export default FaceAPI