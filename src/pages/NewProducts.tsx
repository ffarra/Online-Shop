import React, {useContext} from 'react';
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import {ModalContext} from "../context/ModalContext";
import {IProduct} from "../models";
import {useProducts} from "../hooks/products";
import {Loader} from "../components/Loader";
import {Errors} from "../components/Errors";
import Product from "../components/Product";


const NewProducts = () => {
    const {AddProduct, loading, error, addProducts, setAddProducts} = useProducts()
    const {modal, open, close, button} = useContext(ModalContext)

    const createProduct = (addProducts: IProduct) => {
        close()
        AddProduct(addProducts)
    }

    const deleteProduct = async (index: number) => {

        const newProducts = [...addProducts]
        newProducts.splice(index, 1)
        setAddProducts(newProducts)
    }

    return (
        <div>
            <div className='container mx-auto max-w-2xl pt-5'>
                {loading && <Loader/>}
                {error && <Errors error={error}/>}
                {addProducts.map((product, index) => <Product key={product.id} product={product} deleteProduct={() => deleteProduct(index)}/>)}

            </div>
            {modal && <Modal title='Create new product' onClose={close}>
                <CreateProduct onCreate={createProduct}/>
            </Modal>}

            {button &&
                <button
                    className='px-5 pb-1 bg-emerald-600 fixed bottom-5 right-5 text-white text-2xl rounded hover:bg-emerald-800'
                    onClick={open}>Add a new product!</button>
            }
        </div>
    );
};

export default NewProducts;