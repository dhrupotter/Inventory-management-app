
import React, { useState } from 'react';
import { useProducts } from './data.context';

const AddProduct = () => {
    const { setInventory } = useProducts()
    const [productData, setProductData] = useState({
        department: '',
        name: '',
        description: '',
        price: 100,
        stock: 15,
        sku: '',
        supplier: '',
        delivered: 15,
        imageUrl: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted data:', productData);
        setInventory((prev) => ([...prev, { ...productData, id: Math.floor(Math.random() * 100000) + 1 }]))
    };


    return (
        <div>
            <h2>Add new Product</h2>
            <form onSubmit={handleSubmit}>
                <br />
                <label>
                    Department:
                    <div>
                        <input
                            type="text"
                            name="department"
                            value={productData.department}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Name:
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={productData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Description:
                    <div>
                        <textarea
                            type="text"
                            name="description"
                            value={productData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Price:
                    <div>
                        <input
                            type="number"
                            name="price"
                            value={productData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Stock:
                    <div>
                        <input
                            type="number"
                            name="stock"
                            value={productData.stock}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    SKU:
                    <div>
                        <input
                            type="text"
                            name="sku"
                            value={productData.sku}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Supplier:
                    <div>
                        <input
                            type="text"
                            name="supplier"
                            value={productData.supplier}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Delivered:
                    <div>
                        <input
                            type="number"
                            name="delivered"
                            value={productData.delivered}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <label>
                    Image URL:
                    <div>
                        <input
                            type="text"
                            name="imageUrl"
                            value={productData.imageUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                </label>
                <br />
                <button type="submit">Add product</button>
            </form>
        </div>
    );
};


export default AddProduct