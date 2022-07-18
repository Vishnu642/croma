import { Homepage } from "./Homepage"
import { Product } from "./Product"
import { Products } from "./Products"
import {Routes,Route} from "react-router-dom"



export const AllRoutes =()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/products" element={<Products/>} ></Route>
            <Route path="/products/:id" element={<Product/>} ></Route>
        </Routes>
        </div>
    )
}