import {Box,Text} from "@chakra-ui/react"
import "./Product.css"
import {AiOutlineHeart,AiOutlineShareAlt} from "react-icons/ai"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {addProductCart, getSingleProduct} from "../Redux/Products/action"
export const Product = ()=>{
    const {id} = useParams();

    const dispatch = useDispatch();

    const currentProduct = useSelector(store=>store.ecommerceData.currentProduct);

    useEffect(()=>{
      if(id){
        dispatch(getSingleProduct(id))
      }
    },[dispatch,id])

    const addToCartHandler = ()=>{
        currentProduct && dispatch(addProductCart(currentProduct))
    }

    return(
        <Box style={{width:"100%",backgroundColor:"#1e1e1e"}} >

        <Box className="product1-container" >

            <Box className="product-img" >
                <Box className="img-icons" ><AiOutlineHeart size="30px" /><AiOutlineShareAlt size="30px" /></Box>
                <Box className="product1-img" >
                    <img src={currentProduct.image} width="400px" height="400px" ></img>
                </Box>
            </Box>
            <Box className="product-des" >
                <Box className="pro-heading" >{currentProduct.title}
                
                
                </Box>
                <Box style={{display:"flex",gap:"20px"}} >
                    <Box className="pro-heading" >₹ {currentProduct.price}<br></br>
                    <span style={{fontSize:"15px",fontWeight:"300"}} >(incl.all taxes)</span></Box>
                    <Box>
                        <Box className="pro-heading" style={{background:"rgb(30,30,30)",border:"1px solid white",color:"white",borderRadius:"5px"}} >OR</Box>
                    </Box>
                    <Box className="pro-heading" >₹ {Math.floor(currentProduct.price/6)}/mo*<br></br>
                    <span style={{fontSize:"15px",fontWeight:"300",color:"rgb(0,233,191)"}} >Emi options</span></Box>
                    
                    </Box>
                <Box>
                    <Box  ><button className="pro-button" >Qik Emi Card</button></Box>
                    <Box className="pro-heading" >Super Savings (6 offers)</Box>
                    <Box className="pro-div" >
                        <Box className="pro-box" >
                            <Box>Qik emi card</Box>
                            <Box>
Split your bill in 3 for free with No Cost EMI.
 Offer available on products priced ₹5,000 & more</Box>
                        </Box>
                        <Box className="pro-box" >
                            <Box>Citi bank</Box>
                            <Box>
Split your bill in 3 for free with No Cost EMI.
 Offer available on products priced ₹5,000 & more</Box>
                        </Box>
                        <Box className="pro-box" >
                        <Box>Citi bank</Box>
                            <Box>
Split your bill in 3 for free with No Cost EMI.
 Offer available on products priced ₹5,000 & more</Box>
                        </Box>

                    </Box>
                </Box>
                <Box style={{padding:"30px",display:"flex",justifyContent:"center"}} ><button style={{width:"300px",height:"40px"
            ,background:"rgb(0,233,191)",color:"black",borderRadius:"5px"
            ,padding:"10px"
            }} 
            onClick={addToCartHandler}
            >Add to Cart</button></Box>
            </Box>
        </Box>
        </Box>
    )
}