import React from 'react';
import './product.css'

const Product = (props) => {
    
    return (
        <div className="product-container">
            
            <div className="product-img">
                {
                    <img src={props.product.img} alt=""/>
                }
            </div>

            <div className="product-area">
                {
                      <p>{props.product.name}</p>

                }
                {
                     <p><small>{props.product.seller}</small></p>
                }
                <button onClick={()=>props.handleAddProduct(props.product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;