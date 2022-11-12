import React from "react";

interface ErrorsProps {
    error: string
}

export function Errors({error}: ErrorsProps) {
    return(
        <p className='text-center text-red-700'>{error}</p>
    )
}