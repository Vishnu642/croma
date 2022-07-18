import {Box,Text} from "@chakra-ui/react"
import "./Product.css"
import {AiOutlineHeart,AiOutlineShareAlt} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { getSingleProduct} from "../Redux/Products/action"
import { useParams } from 'react-router-dom';
export const Product = ()=>{
    const {id} = useParams();

    const dispatch = useDispatch();

    const currentProduct = useSelector(store=>store.ecommerceData.currentProduct);

    useEffect(()=>{
      if(id){
        dispatch(getSingleProduct(id))
      }
    },[dispatch,id])

    // const addToCartHandler = ()=>{
    //     currentProduct && dispatch(addProductCart(currentProduct))
    // }

    return(

        <Box className="product-container" >
            <Box className="product-img" >
                <Box className="img-icons" ><AiOutlineHeart size="30px" /><AiOutlineShareAlt size="30px" /></Box>
                <Box>
                    <img src={currentProduct.image} ></img>
                </Box>
            </Box>
            <Box className="product-des" >
                <Box><Text>{currentProduct.title}</Text></Box>
                <Box><Text>{currentProduct.price}</Text></Box>
                <Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}