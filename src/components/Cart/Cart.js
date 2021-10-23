import "./Cart.css"
import React from 'react';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

const Cart = (props) => {

const his= useHistory();
    const Order=()=>{
        his.push("/shipping")
    }


    const {cart}=props;
console.log(cart);

    let total=0;
    let totalQuantity=0;
    for(const product of cart){

       if(!product.quantity){
        //    product.quantity=1;
       }
        console.log(product);
        // total=total+product.price;
        total=total+product.price*product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }
    return (
        <div className="cart">
             <h3>Order Summary:  </h3>
            {/* <h5 className="item">Items Order: {props.cart.length}  </h5> */}
            <h5 className="item">Items Order: {totalQuantity}  </h5>
            <br />
            <p>Total : {total.toFixed(2)}</p>
            <button onClick={()=>Order()}
                    
                    className="btn-primary rounded p-1"
                ><FontAwesomeIcon icon={faShoppingCart} /> Place Order</button>
            
        </div>
    );
};

export default Cart;