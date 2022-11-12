import {useProducts} from "../hooks/products";
import React, {useContext} from "react";
import {Loader} from "../components/Loader";
import {Errors} from "../components/Errors";
import Product from "../components/Product";
import axios from "axios";

const AllProducts = () =>
{
    const {products, setProducts, loading, error} = useProducts()

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
            {loading && <Loader/>}
            {error && <Errors error={error}/>}
            {products.map((product, index) => <Product key={product.id} product={product} deleteProduct={() => deleteProduct(product.id!, index)}/>)}

        </div>
    );
}
export default AllProducts


