import React, {useState} from 'react';
import {IProduct} from "../models";


interface ProductProps {
    product: IProduct;
    deleteProduct: Function;
}

const Product = ({product, deleteProduct}: ProductProps) => {
    const [open, setOpen] = useState(false)

    const BtnBgClassName = open ? 'bg-yellow-200 ' : 'bg-green-200'
    const BtnClasses = ['py-2 px-4 border mr-16', BtnBgClassName]

    return (
        <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
            <img src={product.image} alt={product.title} className='w-1/6'/>
            <p>{product.title}</p>
            <p className='font-bold'>price: {product.price}$</p>
            <div className='flex flex-row'>

                <button className={BtnClasses.join(' ')} onClick={() => setOpen(!open)}>
                    {open ? 'Hide description' : 'Show description'}
                </button>

                <button className='py-1 px-4 border bg-red-500 ml-16' onClick={() => deleteProduct()}>Delete</button>
            </div>

            {open &&
                <div>
                    <p>{product.description}</p>
                    <p>Rate: <span style={{fontWeight: "bold"}}>{product?.rating?.rate}</span></p>
                </div>}
        </div>
    );
};

export default Product;