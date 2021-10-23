import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const UseCart = (products) => {
    const [cart, setcart] = useState([]);


    useEffect(() => {
      if(products.length){
          const saveCart=getStoredCart();
          const storedCart=[];
          for (const key in saveCart){
              const addProduct=products.find(product=>product.key===key)



              if(addProduct){
                const quantity=saveCart[key];
                addProduct.quantity=quantity;
                storedCart.push(addProduct);
            }
          }
                 setcart(storedCart);

       
      }
    }, [products])



    // useEffect(() => {
    //     if(products.length){
    //       const saveCart=getStoredCart();
  
    //       const storedCart=[];
  
    //       console.log(saveCart);
    //       for(const key in saveCart){
    //           console.log(key,saveCart[key]); //key aikhane property.
    //           console.log(saveCart[key]); //key aikhane property.
  
    //           console.log(key);
    //         //   console.log(products);
    //         const addedProduct=products.find(product=>product.key===key); //---key related value kuje nea
    //         if(addedProduct){
    //             const quantity=saveCart[key];
    //             console.log(addedProduct);
    //             addedProduct.quantity=quantity;//quality namer property add kora hoiase.
    //           storedCart.push(addedProduct);
  
              
    //         }
    //       //   console.log(key,addedProduct);
  
    //     }
    //   //   console.log(storedCart);
  
    //     setcart(storedCart);
        
    //     }
    //   }, [products])


// console.log(cart);

    return [cart,setcart]
};

export default UseCart;