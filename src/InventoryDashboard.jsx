import React from 'react'
import { useProducts } from './data.context'


const InventoryDashboard = () => {
    const { inventory: inventoryData } = useProducts()

    const totalStock = inventoryData.reduce((acc, curr) => {
        return acc + curr.stock
    }, 0)

    const totalDeliveredItems = inventoryData.reduce((acc, curr) => {
        return acc + curr.delivered
    }, 0)

    const lowStockItems = inventoryData.filter((item) => item.stock <= 10)

    return (
        <div className='dashboard'>
            <div className='invetory-levels'>
                <h1>{totalStock}</h1>
                Total Stock
            </div>
            <div className='invetory-levels'>
                <h1>{totalDeliveredItems}</h1>
                Total delivered
            </div>
            <div className='invetory-levels'>
                <h1>{lowStockItems.length}</h1>
                Low Stock Items
            </div>
        </div>
    )
}

export default InventoryDashboard