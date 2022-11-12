import React from 'react';

interface ModalProps {
    children: React.ReactNode
    title: string
    onClose: () => void
}

const Modal = ({children, title, onClose}: ModalProps) => {

    return (
        <>
            <div className='fixed bg-black/50 top-0 right-0 left-0 bottom-0'/>

            <div className='w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2'>
                <span className='pb-1 px-3 bg-red-500 ml-32 absolute right-0 top-0 text-white' onClick={onClose}>x</span>

                <h1 className='text-2xl text-center mb-2'>{title}</h1>

                {children}
            </div>
        </>
    );
};

export default Modal;