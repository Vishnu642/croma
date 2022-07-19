import { Box,Text } from "@chakra-ui/react"
import "./Cartpage.css"
import {RiCouponLine} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"
import { useSelector } from "react-redux"


export const Cart = ()=>{

    const cart = useSelector((store)=>store.ecommerceData.cart)
  
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
                    <Box className="cart-pro" >
                        <Box className="cart-img" >
                            <Box>
                                <img className="img" src={product.image} ></img>
                            </Box>
                        </Box>
                        <Box className="cart-title" >
                            <Box style={{padding:"10px",fontSize:"20px"}}>
                                <Text>{product.title}</Text>
                            </Box>
                            <Box style={{marginTop:"20px"}} >
                                <button className="remove" >Remove</button>
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
                        <Box>Order Summary ( 3 items )</Box>
                        <Box className="total-flex" >
                            <Box>Original Price</Box>
                            <Box>₹ 46576</Box>
                        </Box>
                        <Box className="total-flex" >
                            <Box>Delivery</Box>
                            <Box>Free</Box>
                        </Box>
                        <Box className="total-flex" >
                            <Box>Total</Box>
                            <Box>₹ 475647</Box>
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