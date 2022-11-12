import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home-page'>
            <Link to='/cart'>
                <div className='py-8 px-40 bg-black/50 text-white rounded mb-32 hover:bg-black/80 text-2xl'>My Cart</div>
            </Link>


            <Link to='/all' className='mr-6'>
                <div className='py-8 px-40 bg-black/50 text-white rounded mb-32 hover:bg-black/80 text-2xl'>Shop</div>
            </Link>


        </div>
    );
};

export {Home};