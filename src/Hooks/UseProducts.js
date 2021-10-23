import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseProducts = () => {


    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch("./products.JSON")
        .then(res=>res.json())
        .then(data=>setproducts(data))
     
    }, []);

    return [products,setproducts];
};

export default UseProducts;