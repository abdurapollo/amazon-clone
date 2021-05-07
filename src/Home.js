import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img 
                  className="home__image"
                  // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt=""
               />
               <div className="home__row">
                  <Product 
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
                    price={29.99}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5}
                  />
                  <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61lXk66xhaL._AC_UY327_FMwebp_QL65_.jpg"
                  />
               </div>
               <div className="home__row">
                  <Product 
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466.jpg"
                  />
                  <Product 
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Axela, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY327_FMwebp_QL65_.jpg"
                  />
                  <Product 
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71TJA+sJv2L._AC_UY327_FMwebp_QL65_.jpg"
                  />
               </div>
               <div className="home__row">
                  <Product 
                     id="3454323412"
                     title="Samsung 28 L Convection Microwave Oven (MC28H5033CK, Black)"
                     price={2345}
                     rating={4}
                     image="https://m.media-amazon.com/images/I/71yo-p9AbiL._AC_UY327_FMwebp_QL65_.jpg"
                  />
               </div>
            </div>
           
        </div>
    )
}

export default Home
