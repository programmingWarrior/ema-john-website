import React, { useState } from 'react';
import './shop.css'
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [product, setProduct]= useState(first10);
    
    const handleAddProduct = (product) => {
        console.log("product add",product);
    }
    
    return (
        <div className="shop-container">
            <div className="product-area">
                
                <ul>
                    {
                        product.map((prd)=><Product
                         product={prd}
                         handleAddProduct ={handleAddProduct}
                         ></Product>)
                    }
                </ul>
        </div>

        <div className="cart-area">
            <h2>This is Cart Area</h2>
        </div>
        </div>
    );
};

export default Shop;