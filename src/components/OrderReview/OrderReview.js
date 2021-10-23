import React from 'react';
import UseCart from '../../Hooks/UseCart';
import UseProducts from '../../Hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {

    const [products]= UseProducts();

    const [cart,setcart]= UseCart(products);
    console.log(cart);

    const handleRemove=key=>{
       const newCart=cart.filter(product=>product.key!==key);
            setcart(newCart);
           removeFromDb(key);

            

    }




    return (
        <div className="shop-container">

            <div className="product-container" >
                {
                    cart.map(product=><ReviewItem 
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    
                    
                    
                    ></ReviewItem>)
                }
            </div>

            <div>
                    {/* <h1>{products.length}</h1>
                    <h2>This is Order review</h2> */}
                    {/* <h3>{cart.length}</h3> */}
                    <Cart cart={cart}></Cart>
            </div>



           
            
        </div>
    );
};

export default OrderReview;