import {Box} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Cart } from "../Pages/Cartpage"
import { fetchCart } from "../Redux/Products/action"


export const CartCounter = () => {

    const cart = useSelector(store=>store.ecommerceData.cart)

    const dispatch = useDispatch()

    useEffect(()=>{

      if(cart?.length===0){
        dispatch(fetchCart())
      }

    },[cart?.length,dispatch])

  return (
    <Box backgroundColor="rgb(0,233,191)" textColor="black" borderRadius="50%" 
    width="20px" height="20px" textAlign="center" paddingBottom="20px"
    position="absolute" right="0" top="0" >
        {cart?.length ? cart.length:0}
    </Box>
  )
}

