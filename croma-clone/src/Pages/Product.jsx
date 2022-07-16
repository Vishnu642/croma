import {Box} from "@chakra-ui/react"
import "./Product.css"
import {AiOutlineHeart,AiOutlineShareAlt} from "react-icons/ai"
export const Product = ()=>{

    return(
        <Box className="product-container" >
            <Box className="product-img" >
                <Box className="img-icons" ><AiOutlineHeart size="30px" /><AiOutlineShareAlt size="30px" /></Box>
                <Box></Box>
            </Box>
            <Box className="product-des" >
                <Box><Text>Samsung galaxy S21</Text></Box>
                <Box></Box>
                <Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </Box>
            </Box>
        </Box>
    )
}