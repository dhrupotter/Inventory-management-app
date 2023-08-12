import './App.css'
import { Route, Routes } from 'react-router-dom'
import InventoryDashboard from './InventoryDashboard'
import Departments from './Departments'
import ProductsList from './ProductsList'
import Sidebar from './Sidebar'
import AddProduct from './AddProduct'
import { Product } from './Product'

function App() {
  return (
    <div className='App'>
      <Sidebar />
      <Routes>
        <Route path="/" element={<InventoryDashboard />} ></Route>
        <Route path="/departments" element={<Departments />} ></Route>
        <Route path="/products" element={<ProductsList />} ></Route>
        <Route path="/addProduct" element={<AddProduct />} ></Route>
        <Route path="/products/:productId" element={<Product />} ></Route>
      </Routes>
    </div>
  )
}

export default App
