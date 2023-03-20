import React, { useEffect, useState } from 'react'
import './Results.scss'
import SkinTone from '../../scripts/SkinTone'
import FaceAPI from '../../scripts/FaceAPI'
import { useLocation } from 'react-router-dom'
import ProductsAPI from '../../scripts/ProductsAPI'

const Results = () => {

  const [products, setProducts] = useState([])
  const [skinAttributes, setSkinAttributes] = useState(null)

  const location = useLocation()

  const getSkinTone = async (base64) => {
    const faceData = await FaceAPI.faceColor(base64)
    console.log(faceData);

    if (!faceData) return null

    const foreColors = faceData.result.colors.foreground_colors
    const tones = []

    foreColors.forEach(color => {
      const tone = SkinTone.findClosestColor({
        r: color.r, g: color.g, b: color.b
      })

      console.log(tone);

      if (tone) tones.push(tone)
    })

    if (tones.length === 0) return null
    else return tones.sort(tone => tone.id)[0]
  }

  const getAttributes = async (url) => {
    const attr = await FaceAPI.faceAttributes(url)
    console.log(attr);

    return {
      skintype: attr.result.skin_type.skin_type,
      skinspot: attr.result.skin_spot.value,
      blackhead: attr.result.blackhead.value,
      acne: attr.result.acne.value
    }
  }

  const getProducts = async (color, type, acne, skinspot, blackhead) => {
    return await ProductsAPI.fetchProducts(color, type, acne, skinspot, blackhead)
  }

  useEffect(() => {
    const fetchData = async () => {
      const search = location.search;
      const url = new URLSearchParams(search).get("faceurl");

      if (!url) {
        console.error('Face url not passed');
        return
      }

      const tone = await getSkinTone(url)

      if (!tone) {
        console.error('No skin tones were match');
        return
      }

      const attr = await getAttributes(url)

      let skintype = FaceAPI.resolveSkinType(404)
      let blackhead = 'false'
      let skinspot = 'false'
      let acne = 'false'

      if (attr) {
        skintype = FaceAPI.resolveSkinType(attr.skintype)
        blackhead = attr.blackhead === 0 ? 'false' : 'true'
        skinspot = attr.skinspot === 0 ? 'false' : 'true'
        acne = attr.acne === 0 ? 'false' : 'true'
      }

      setSkinAttributes({
        tone: tone.name,
        color: { r: tone.r, g: tone.g, b: tone.b },
        type: skintype,
        acne: acne,
        skinspot: skinspot,
        blackhead: blackhead
      })

      const result = await getProducts(tone.name, skintype, acne, skinspot, blackhead)

      if (!result) {
        console.error('Fetching products failed');
        return
      }

      setProducts(result.data)

      console.log(skinAttributes);
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