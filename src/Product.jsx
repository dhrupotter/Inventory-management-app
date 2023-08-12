import React from 'react'
import { useProducts } from './data.context'
import { useParams } from 'react-router-dom'

export const Product = () => {
    const { inventory } = useProducts()
    const { productId } = useParams()
    console.log(inventory)
    const currentProduct = inventory.find(item => item.id === +productId)
    console.log(currentProduct)
    return (
        <div>Product

            <div>
                <div><img src={currentProduct.imageUrl} width="200" alt="" /></div>
                <div>Name: {currentProduct.name}</div>
                <div>Desc: {currentProduct.description}</div>
                <div>Price: {currentProduct.price}</div>
                <div>Stock: {currentProduct.stock}</div>
                <div>Supplier: {currentProduct.supplier}</div>
            </div>
        </div>
    )
}