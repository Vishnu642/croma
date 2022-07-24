import { Homepage } from "./Homepage"
import { Product } from "./Product"
import { Products } from "./Products"
import {Routes,Route} from "react-router-dom"
import { Cart } from "./Cartpage"
import { Checkout } from "./Checkout"
import { Login } from "./Login"
import { Signup } from "./Signup"
import { RequireAuth } from "../components/RequireAuth"

export const AllRoutes =()=>{
    return(
        <div>
        <Routes>
            <Route path="/" element={<Homepage/>} ></Route>
            <Route path="/products" element={<RequireAuth><Products/></RequireAuth>} ></Route>
            <Route path="/products/:id" element={<Product/>} ></Route>
            <Route path="/cart" element={<Cart/>} ></Route>
            <Route path="/checkout" element={<Checkout/>} ></Route>
            <Route path="/login" element={<Login/>} ></Route>
            <Route path="/signup" element={<Signup/>} ></Route>
        </Routes>
        </div>
    )
}