import React, {ChangeEvent, useState} from 'react';
import {IProduct} from "../models";
import axios from "axios";
import {Errors} from "./Errors";

const productData: IProduct =
    {
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 77,
            count: 89
        }
    }

    interface CreateProductProps {
        onCreate: (product: IProduct) => void
    }

const CreateProduct = ({ onCreate }: CreateProductProps) => {
    const [title, setTitle] = useState('')
    const [priceInput, setPriceInput] = useState('')
    const [price, setPrice] = useState(0)
    const [error, setError] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')


    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setPriceInput('')
            setPrice(0)
        } else {
            let value = event.target.value

            if (isNaN(Number(value))) return;

            setPriceInput(value)
            setPrice(Number(value))
        }
    }

    const SubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if(title.length === 0) {
            setError('Please enter valid params!')
            return
        }

        productData.title = title;
        productData.price = price;
        productData.description = description;
        productData.category = category;

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)

        onCreate(response.data)
    }

    return (
        <form onSubmit={SubmitHandler}>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type='text'
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='enter product title...'
            />

            <input
                value={priceInput}
                onChange={changeHandler}
                type='text'
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='enter product price...'
            />

            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type='text'
                className='border py-2 px-4 mb-2 w-full outline-0'
                placeholder='enter product description...'
            />

            <select value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className='border py-2 px-4 mb-2 w-full outline-0'
            >
                <option>electronics</option>
                <option>jewelery</option>
                <option>men's clothing</option>
                <option>women's clothing</option>
            </select>

            {error && <Errors error={error}/>}

            <button type='submit' className='py-2 px-4 border bg-emerald-600 hover:bg-emerald-400'>Create</button>
        </form>
    );
};

export default CreateProduct;