import React from 'react'
import { useProducts } from './data.context'
import { useNavigate } from 'react-router-dom'
const Departments = () => {
    const { setSelectedDepartment } = useProducts()
    const navigate = useNavigate()

    const handleNavigateToDepartment = (departmentName) => {
        setSelectedDepartment(departmentName)
        navigate("/products")
    }

    return (
        <div className='dashboard'>
            <div className='department-tab' onClick={() => handleNavigateToDepartment("Kitchen")}>
                <h1>Kitchen</h1>

            </div>
            <div className='department-tab' onClick={() => handleNavigateToDepartment("Clothing")}>
                <h1>Clothing</h1>

            </div>
            <div className='department-tab' onClick={() => handleNavigateToDepartment("Toys")}>
                <h1>Toys</h1>

            </div>
        </div>
    )
}

export default Departments