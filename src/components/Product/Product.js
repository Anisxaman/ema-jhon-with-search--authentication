import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props);
    const {name,img,seller,price,stock,star}=props.pproduct;
// ------------------------font awesome----------------
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div>
                    <img className="img" src={img} alt="" />
            </div>
            
            <div>
                    <h4 className="product-name"> {name}</h4>
                    <p><small>by:{seller}</small></p>
                    <p>Price: {price}</p>
                    <p><small>only {stock} left in stock-order soon</small></p>
                    <Rating className='icon'
                    initialRating={star}  
                    emptySymbol="far fa-star "
                    // emptySymbol="fas fa-star-o fa-2x"
                    // fullSymbol="fas fa-star fa-2x"
                    fullSymbol="fas fa-star"
                     readonly/>
                    <br />
                    <button  onClick={()=>props.handleAddToCart(props.pproduct)}
                    className="btn-regular"> {element}  Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;