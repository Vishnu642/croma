import { Box,Text } from "@chakra-ui/react"
import "./Cartpage.css"
import {RiCouponLine} from "react-icons/ri"
import {TbTruckDelivery} from "react-icons/tb"
import { useSelector } from "react-redux"


export const Checkout = ()=>{

    const cart = useSelector((store)=>store.ecommerceData.cart)

  
console.log(cart)

    return(
        <Box className="cart" >
            <Box className="cart-heading" >Your Orders</Box>

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



                    <Box className="total-box" style={{height:"300px"}}  >
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
                            <button className="total-button" >Payment</button>
                        </Box>
                        <Box style={{padding:"10px"}}>
                            <Text>3 Bank offers available during payment</Text>
                        </Box>
                    </Box>
                </Box>

            </Box>
        
    )
}