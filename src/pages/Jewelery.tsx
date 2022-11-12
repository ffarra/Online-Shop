import React from 'react';
import Product from "../components/Product";
import {useProducts} from "../hooks/products";
import axios from "axios";

const Jewelery = () => {
    const {products, setProducts} = useProducts()

    const deleteProduct = async (id: number, index: number) => {
        try {
            await axios.delete(`https://fakestoreapi.com/products/${id}`)

            let newProducts = [...products]

            newProducts.splice(index, 1)
            setProducts(newProducts)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className='container mx-auto max-w-2xl pt-5'>
            {products.filter(item => item.category === "jewelery").map((product, index) => <Product key={product.id} product={product} deleteProduct={() => deleteProduct(product.id!, index)}/>)}
        </div>
    );
};

export default Jewelery;