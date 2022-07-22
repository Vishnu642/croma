import { Box,Text } from "@chakra-ui/react"
import "./Cartpage.css"
import {RiCouponLine} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"
import { deleteProductCart } from "../Redux/Products/action"

export const Cart = ()=>{

    const cart = useSelector((store)=>store.ecommerceData.cart)
    const dispatch = useDispatch();
    const totalAmount = cart.reduce((acc, elem) => {
        console.log(elem.price)
        return acc + Number(elem.price);
      }, 0);
      console.log(totalAmount)

    const removeProduct = (id)=>{
      dispatch(deleteProductCart(id))
    }
  
console.log(cart)

    return(
        <Box className="cart" >
            <Box className="cart-heading" >Your Cart</Box>

            <Box className="cart-container" >
                <Box className="cart-details" >
                    <Box className="coupon" >
                        <RiCouponLine size="30px" />
                        <Text>Apply Coupon</Text>
                    </Box>
                    <Box  >
                {    cart.map(product=>{
                return(
                    <Box key={product.id} className="cart-pro" >
                        <Box className="cart-img" >
                            <Box>
                                <img className="img1" src={product.image} ></img>
                            </Box>
                        </Box>
                        <Box className="cart-title" >
                            <Box style={{padding:"10px",fontSize:"20px"}}>
                                <Text>{product.title}</Text>
                            </Box>
                            <Box style={{marginTop:"20px"}} >
                                <button onClick={()=>removeProduct(product.id)} className="remove" >Remove</button>
                            </Box>
                        </Box>
                        <Box className="cart-rate" >
                            <Text>₹ {product.price}<br></br>
                            (incl. all taxes)</Text>
                        </Box>
                    </Box>
                )
            }) }
                    </Box>
                </Box>



                <Box className="cart-price" >
                    <Box className="delivery" >
                    <Box><TbTruckDelivery size="30px" /></Box> 
                        <Text>Delivery options for <span style={{color:"rgb(0,233,191)"}} >641025</span></Text>
                        <Box>
                           <Box><Text>Free Standard Delivery</Text></Box> 
                        </Box>
                    </Box>

                    <Box className="total-box" >
                        <Box>Order Summary ( {cart.length} items )</Box>
                        <Box className="total-flex" >
                            <Box>Original Price</Box>
                            <Box>₹ {totalAmount}</Box>
                        </Box>
                        <Box className="total-flex" >
                            <Box>Delivery</Box>
                            <Box>Free</Box>
                        </Box>
                        <Box className="total-flex" >
                            <Box>Total</Box>
                            <Box>₹ {totalAmount}</Box>
                        </Box>

                        <Box style={{display:"flex",justifyContent:"center"}} >
                            <button className="total-button" >Checkout</button>
                        </Box>
                        <Box style={{padding:"10px"}}>
                            <Text>3 Bank offers available during payment</Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}