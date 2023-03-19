import axios from 'axios'

const ProductsAPI = {
    fetchProducts: async function (COLORS, SKIN_TYPE) {
        try {
            // const response = await axios.get(`https://navro.onrender.com/products?colors=${COLORS}&types=${SKIN_TYPE}`)
            const response = await axios.get(`https://navro.onrender.com/products`)
            return response.data
        } catch (error) {
            console.error(error);
            return null
        }
    }
}

export default ProductsAPI