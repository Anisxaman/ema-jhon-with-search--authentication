import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);
    const [displayProducts,setdisplayProducts]=useState([]);


    useEffect(() => {
        fetch("./products.json")
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data);
            setdisplayProducts(data);
        })
    
    }, [])
// ------------------------------------(for retrive data from local store)-------------------------
    useEffect(() => {
      if(products.length){
        const saveCart=getStoredCart();

        const storedCart=[];

        console.log(saveCart);
        for(const key in saveCart){
            console.log(key,saveCart[key]); //key aikhane property -value asbe na.
            console.log(saveCart[key]); //key aikhane property.

            console.log(key);
          //   console.log(products);
          const addedProduct=products.find(product=>product.key===key); //---key related value kuje nea
          if(addedProduct){
              const quantity=saveCart[key];
              console.log(addedProduct);
              addedProduct.quantity=quantity;//quality namer property add kora hoiase.
            storedCart.push(addedProduct);

///key onujai j product paoya gese oi product a quantity set kore dea.
            
          }
        //   console.log(key,addedProduct);

      }
    //   console.log(storedCart);

      setcart(storedCart);
      
      }
    }, [products]) //dependency dile  products r man change hole abar call hobe.dependency empty dile akbar call hobe r kono kisu na dile infinity call hobe.

    // -------------------event handlader-------------------------

    const handleAddToCart=(product)=>{
        // console.log(product.name);
        const newCart=[...cart,product];
        setcart(newCart);
        console.log(product);

        addToDb(product.key);

    }

    // -------------------------------------------
    // -----------------------(add local storage)---------------------------------------




    // -------------------------------------------

    //------------------------- search & display function ----------------------
const handleSearch=event=>{
    const searchtext=event.target.value;
    console.log(event.target.value);
    const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchtext.toLowerCase()));
    setdisplayProducts(matchedProducts);
console.log(matchedProducts.length);
}



return (
    <>
        <div className='search-container' >
            <input type="text" onChange={handleSearch} placeholder=' search'/>
        </div>

        <div className="shop-container">
            <div className="product-container">
                <h3>Products: {products.length}  </h3>
                {
                    displayProducts.map(product=><Product 
                        key={product.key}
                        pproduct={product}
                        handleAddToCart={handleAddToCart}
                        
                        
                        >

                        </Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
    </>
    );
};

export default Shop;