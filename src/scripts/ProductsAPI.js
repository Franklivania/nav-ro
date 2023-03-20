import axios from 'axios'

const ProductsAPI = {
    fetchProducts: async function (COLORS, SKIN_TYPE, ACNE = 'false', SKINSPOT = 'false', BLACKHEAD = 'false') {
        try {
            const response = await axios.get(`https://navro.onrender.com/products?colors=${COLORS}&types=${SKIN_TYPE}&acne=${ACNE}&skinspot=${SKINSPOT}&blackhead=${BLACKHEAD}`)
            return response.data
        } catch (error) {
            console.error(error);
            return null
        }
    },

    fetchProduct: async function (ID) {
        try {
            const response = await axios.get(`https://navro.onrender.com/products/${ID}`)
            return response.data
        } catch (error) {
            console.error(error);
            return null
        }
    }
}

export default ProductsAPI