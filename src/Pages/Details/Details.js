import React, { useEffect, useState } from 'react'
import ProductsAPI from '../../scripts/ProductsAPI'
import { useLocation } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import './Details.scss'
import TextReaderAPI from '../../scripts/TextReaderAPI'

const Details = () => {

    const location = useLocation()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getProduct = async () => {
            const ids = location.pathname.split('/')
            const result = await ProductsAPI.fetchProduct(ids[ids.length - 1])
            setProduct(result.data)
        }

        getProduct()
    }, [])

    return (
        <div className='details'>
            <Navbar />
            <div className='container'>
                {product && (
                    <div className='grid'>
                        <div className='left'>
                            <img src={product.images[0]} className='cover_image' />
                            <div className='images'>
                                {
                                    product.images.map((image, index) => (
                                        <img src={image} className='alt_image' />
                                    ))
                                }
                            </div>
                            <a className='product_link' href={product.url} onMouseEnter={() => TextReaderAPI.readText('Buy Product')} target='_blank'>Buy Product <i className='fa-solid fa-arrow-right'></i></a>
                        </div>
                        <div className='right'>
                            <p onMouseEnter={() => TextReaderAPI.readText(product.brand)} className='brand'>Brand: {product.brand}</p>
                            <h3 onMouseEnter={() => TextReaderAPI.readText(product.name)} className='name'>{product.name}</h3>
                            <p onMouseEnter={() => TextReaderAPI.readText(product.categories[0])} className='category'>{product.categories[0]}</p>
                            <p onMouseEnter={() => TextReaderAPI.readText(product.description)} className='desc'>{product.description}</p>
                            <p onMouseEnter={() => TextReaderAPI.readText(product.price + ' dollars')} className='price'>Price: ${product.price.toFixed(2)}</p>

                            <p className='color_name' onMouseEnter={() => TextReaderAPI.readText('Colors')}>Colors</p>
                            <div className='colors'>
                                {
                                    product.colors.map((color, index) => (
                                        <p onMouseEnter={() => TextReaderAPI.readText(color)}>{color}</p>
                                    ))
                                }
                            </div>

                            <p className='how_to_use_name' onMouseEnter={() => TextReaderAPI.readText('How to use')}>How to use</p>
                            <ol className='how_to_use'>
                                {
                                    product.how_to_use.map((htu, index) => (
                                        <li onMouseEnter={() => TextReaderAPI.readText(htu)}>{htu}</li>
                                    ))
                                }
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default Details