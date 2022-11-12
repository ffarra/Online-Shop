import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {useProducts} from "../hooks/products";
import {BsCart} from "react-icons/bs";

const Navbar:FC = () => {
    const {Search} = useProducts()

    return (
        <nav className='h-[65px] flex justify-between px-5 bg-emerald-300 text-white items-center'>
            <div className='flex'>
                <span className='font-bold mr-6'>My Shop</span>
                <Link to='/cart'><BsCart size={23}/></Link>
            </div>
            {/*<input*/}
            {/*    onChange={Search}*/}
            {/*    className='absolute left-1/3 w-80 text-black px-2 py-1'*/}
            {/*    placeholder='search...'*/}
            {/*/>*/}

            <span>
                <Link to='/' className='mr-6 hover:underline'>Home</Link>
                <Link to='/all' className='mr-6 hover:underline'>All Products</Link>
                <Link to='/men' className='mr-6 hover:underline'>Men</Link>
                <Link to='/women' className='mr-6 hover:underline'>Woman</Link>
                <Link to='/jewelery' className='mr-6 hover:underline'>Jewelery</Link>
                <Link to='/electronics' className='mr-6 hover:underline'>Electronics</Link>
                <Link to='/new' className='mr-6 hover:underline'>Add New Products</Link>
            </span>
        </nav>
    );
};

export default Navbar;