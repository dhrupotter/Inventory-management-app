import React, { useEffect, useState } from 'react'
import { useProducts } from './data.context'
import { useNavigate } from 'react-router-dom'

const ProductsList = () => {
    const navigate = useNavigate()
    const [isLowStockToggled, setIsLowStockToggled] = useState(false)
    const [sortType, setSortType] = useState("Name")

    const { products, selectedDepartment, setProducts, setSelectedDepartment, inventory: inventoryData } = useProducts()
    const handleDepartmentFilter = (departmentName) => {
        setSelectedDepartment(departmentName)
        const filteredProducts = departmentName === "All" ? inventoryData : inventoryData.filter((item) => item.department === departmentName)
        setProducts(filteredProducts)
    }

    const handleSort = (sortTypeName) => {
        setSortType(sortTypeName)
        if (sortTypeName === "name") {
            const sortedProducts = products.sort((a, b) => a.name > b.name ? 1 : -1)
            setProducts([...sortedProducts])
        } else if (sortTypeName === "price") {
            const sortedProducts = products.sort((a, b) => a.price - b.price)
            setProducts([...sortedProducts])
        } else {
            const sortedProducts = products.sort((a, b) => a.stock - b.stock)
            setProducts([...sortedProducts])
        }

    }

    const handleLowStockFilter = (e) => {
        setIsLowStockToggled(e.target.checked)
    }

    const showInventoryItem = (item) => {
        if (isLowStockToggled) {
            return item.stock <= 10
        }
        return true
    }

    useEffect(() => {
        if (selectedDepartment) {
            handleDepartmentFilter(selectedDepartment)
        }
    }, [])

    useEffect(() => {
        handleSort("name")
    }, [])

    return (
        <div className='product-list'>
            <div className='nav'>
                <h2>Products</h2>
                <select name="department" id="" value={selectedDepartment} onChange={(e) => handleDepartmentFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Toys">Toys</option>
                </select>
                <div><input onChange={handleLowStockFilter} type="checkbox" />
                    <label>Low Stock Items</label></div>
                <div>
                    <select name="sort" id="" value={sortType} onChange={(e) => handleSort(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                    </select>
                </div>
                <button onClick={() => navigate("/addProduct")}>New</button>
            </div>
            <div>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Supplier</th>
                        </tr>

                        {products.map((item) => {
                            return showInventoryItem(item) && <tr>
                                <td><img src={item.imageUrl} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>{item.stock}</td>
                                <td>{item.supplier}</td>
                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsList