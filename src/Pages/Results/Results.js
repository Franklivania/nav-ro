import React, { useEffect, useState } from 'react'
import './Results.scss'
// import SkinTone from '../../scripts/SkinTone'
// import FaceAPI from '../../scripts/FaceAPI'
// import { useLocation } from 'react-router-dom'
import ProductsAPI from '../../scripts/ProductsAPI'

const Results = () => {

  const [products, setProducts] = useState([])
  // const [skintone, setSkintone] = useState(null)
  // const [skintype, setSkintype] = useState(null)

  // const location = useLocation()

  // const getSkinTone = async (base64) => {
  //   const faceData = await FaceAPI.faceColor(base64)
  //   if (!faceData) return null

  //   const foreColors = faceData.result.colors.foreground_colors
  //   const tones = []

  //   foreColors.forEach(color => {
  //     const tone = SkinTone.findClosestColor({
  //       r: color.r, g: color.g, b: color.b
  //     })

  //     if (tone) tones.push(tone)
  //   })

  //   if (tones.length === 0) return null
  //   else return tones.sort(tone => tone.id)[0]
  // }

  // const getSkinType = async (url) => {
  //   const attr = await FaceAPI.faceAttributes(url)
  //   return attr.result.skin_type.skin_type
  // }

  // const getProducts = async (colors, type) => {
  //   return await ProductsAPI.fetchProducts(colors, type)
  // }

  const getProducts = async () => {
    return await ProductsAPI.fetchProducts()
  }

  useEffect(() => {
    const fetchData = async () => {
      // const search = location.search;
      // const url = new URLSearchParams(search).get("faceurl");

      // if (!url) {
      //   console.error('Face url not passed');
      //   return
      // }

      // const tone = await getSkinTone(url)

      // setSkintone(tone)

      // if (!tone) {
      //   console.error('No skin tones were match');
      //   return
      // }

      // let type = await getSkinType(url)
      // if (!type) { type = 404 /* not found */ }

      // const readableSkintype = FaceAPI.resolveSkinType(type)
      // setSkintype(readableSkintype)

      // const products = await getProducts(tone.name, readableSkintype)
      const products = await getProducts()
      if (!products) {
        console.error('Fetching products failed');
        return
      }

      setProducts(products)
      console.log(products);
    }

    fetchData()
  }, [])

  return (
    <div className='container'>
      <h3>Results</h3>
    </div>
  )
}

export default Results