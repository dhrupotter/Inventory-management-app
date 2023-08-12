import { createContext, useContext, useReducer, useState } from "react";
import { inventoryData } from "./db/inventoryData";

const CreateProducts = createContext([]);

export const ProductsProvider = ({ children }) => {
    const [inventory, setInventory] = useState(inventoryData)
    const [products, setProducts] = useState(inventory);
    const [selectedDepartment, setSelectedDepartment] = useState("All")
    return (
        <CreateProducts.Provider value={{ products, inventory, setInventory, setProducts, selectedDepartment, setSelectedDepartment }}>
            {children}
        </CreateProducts.Provider>
    );
};

export const useProducts = () => useContext(CreateProducts);
