import React, { useEffect, useRef, useState } from 'react'
import './Results.scss'
import SkinTone from '../../scripts/SkinTone'
import FaceAPI from '../../scripts/FaceAPI'
import { Link, useLocation } from 'react-router-dom'
import ProductsAPI from '../../scripts/ProductsAPI'
import Navbar from '../../Components/Navbar/Navbar'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const Results = () => {

  const [color, setColor] = useState({})

  const [products, setProducts] = useState([])
  const [skinAttributes, setSkinAttributes] = useState(null)
  const [skinUrl, setSkinUrl] = useState('')

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

      setSkinUrl(url)

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

      setColor({
        backgroundColor: `rgb(${tone.r}, ${tone.g}, ${tone.b})`
      })
    }

    fetchData()
  }, [])

  const navStyle = {
    backgroundColor: '#A85C3A'
  }

  const lensStyle = {
    position: 'fixed',
    top: '20%',
    right: '10%',
    padding: '1rem',
    background: '#A85C3A',
    color: '#fefefe',
    borderRadius: '20%',
    boxShadow: '0.02rem 0.02rem 0.5rem #0e0e0e',
    transition: 'all 0.3s ease-in-out',
  }

  return (
    <div className='results'>
      <Navbar style={navStyle}/>
      
      <Link to='/lens' onMouseEnter={() => TextReaderAPI.readText('Lens')} style={lensStyle}><i class="fa-solid fa-camera fa-2x "></i></Link>
      <div className='r_container'>
        <div className='r_page'>
          {skinAttributes && (
            <div className='skin'>
              <h3 onMouseEnter={() => TextReaderAPI.readText('Your skin profile')} className='r_name'>Your skin profile</h3>
              <div className='profile'>
                <div className='image'>
                  <img src={skinUrl} />
                  <div onMouseEnter={() => TextReaderAPI.readText(skinAttributes.tone)} style={color} className='color'>{skinAttributes.tone}</div>
                </div>
                <div className='attr'>
                  <p onMouseEnter={() => TextReaderAPI.readText('Acne. ' + skinAttributes.acne)}>Acne : <span>{skinAttributes.acne}</span></p>
                  <p onMouseEnter={() => TextReaderAPI.readText('Skin Type. ' + skinAttributes.type)}>Skin Type : <span>{skinAttributes.type}</span></p>
                  <p onMouseEnter={() => TextReaderAPI.readText('Blackhead. ' + skinAttributes.blackhead)}>Blackhead : <span>{skinAttributes.blackhead}</span></p>
                  <p onMouseEnter={() => TextReaderAPI.readText('Skin spot. ' + skinAttributes.skinspot)}>Skin Spot : <span>{skinAttributes.skinspot}</span></p>
                </div>
              </div>
            </div>
          )}


          {products.length > 0 &&
            (
              <div className='recommend'>
                <h3 className='r_name' onMouseEnter={() => TextReaderAPI.readText('Recommended products for you')}>Recommended products for you</h3>
                <div className='products'>
                  {
                    products.map((product, index) => (
                      <Link to={`/details/${product._id}`} id='path'>
                        <div className='product'>
                          <div className='r_image'>
                            <span onMouseEnter={() => TextReaderAPI.readText(product.categories[0])} className='r_category'>{product.categories[0]}</span>
                            <img className='product_image' src={product.images[0]} />
                          </div>
                          <div className='detail'>
                            <p className='brand' onMouseEnter={() => TextReaderAPI.readText(product.brand)}>{product.brand}</p>
                            <h3 className='name' onMouseEnter={() => TextReaderAPI.readText(product.name)}>{product.name}</h3>
                            <p className='price' onMouseEnter={() => TextReaderAPI.readText(product.price + ' dollars')}>${product.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  }
                </div>
              </div>

            )
          }
        </div>
      </div>
    </div>
  )
}

export default Results