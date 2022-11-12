import React, {ChangeEvent, useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";
import Electronics from "../pages/Electronics";

export function useProducts() {
    const [products, setProducts] = useState<IProduct[]>([])
    const [womenProducts, setWomenProducts] = useState<IProduct[]>([])
    const [jewelery, setJewelery] = useState<IProduct[]>([])
    const [electronics, setElectronics] = useState<IProduct[]>([])
    const [addProducts, setAddProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')

    function Search(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value)
    }


    function AddProduct(product: IProduct) {
        setProducts(prev => [...prev, product])
    }

    async function fetchProducts() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products')
            setProducts(response.data)
            setLoading(false)
            }
        catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }

    }

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchWomenProduct() {
        try {
            setError('')
            setLoading(true)
            const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products/category/women\'s clothing')
            setWomenProducts(res.data)
            setLoading(false)
        }
        catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchWomenProduct()
    },[])

    async function Jewelery() {
        try {
            setError('')
            setLoading(true)
            const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products/category/jewelery')
            setJewelery(res.data)
            setLoading(false)
        }
        catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        Jewelery()
    },[])

    async function Electronics() {
        try {
            setError('')
            setLoading(true)
            const res = await axios.get<IProduct[]>('https://fakestoreapi.com/products/category/electronics')
            setElectronics(res.data)
            setLoading(false)
        }
        catch (e) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        Electronics()
    }, [])

    return{ products, loading, error, AddProduct, setProducts, womenProducts, setWomenProducts, Search, jewelery, setJewelery, electronics, setElectronics, addProducts, setAddProducts }
}