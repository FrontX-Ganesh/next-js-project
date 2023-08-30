"use client"
import React, { useEffect, useState } from 'react';
import './product.css'

const productList = () => {
    const [productData, setProductData] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => setProductData(data.products))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    console.log(productData);

    return (
        <>
            <div className='all-product'>
                {productData && productData.map((product, index) =>
                    <div key={index} className='single-product'>
                        <h4>{product.title}</h4>
                    </div>
                )}
            </div>
        </>
    )
}

export default productList