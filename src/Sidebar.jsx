import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate()
    return (
        <div className='sidebar'>
            <div onClick={() => navigate("/")}>
                <h3>Inventory Dashboard</h3>
            </div>
            <div onClick={() => navigate("/departments")}>
                <h3>Departments</h3>
            </div>
            <div onClick={() => navigate("/products")}>
                <h3>Products</h3>
            </div>
        </div>
    )
}

export default Sidebar