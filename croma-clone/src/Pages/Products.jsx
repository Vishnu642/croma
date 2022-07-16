import {Box, Checkbox, CheckboxGroup, MenuList, Stack,MenuButton,Menu, Text, MenuItem} from "@chakra-ui/react"
import "./Products.css"
import {ChevronDownIcon} from "@chakra-ui/icons"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../Redux/Products/action"
import {AiOutlineHeart} from "react-icons/ai"


export const Products = ()=>{

  const products = useSelector((store)=>store.ecommerceData.products)

  const dispatch = useDispatch()

  useEffect(()=>{
        dispatch(fetchData())
  },[dispatch])


    return(
        <Box className="product-container" >

           

            <Box className="filter" >

            <Box className="sort"  >
               <Box className="sort1" > <Text  className="heading" >Sort</Text></Box>
               <Box className="sort1" >
            <Menu>
  <MenuButton
    // px={4}
    // py={2}
    w={"250px"}
    h={"40px"}
    transition='all 0.2s'
    borderRadius='md'
    borderWidth='1px'
    _focus={{ boxShadow: 'outline' }}
  >
    Featured <ChevronDownIcon />
  </MenuButton>
  <MenuList  bg="black" color="white" >
    <MenuItem _hover={{bg:"white", color:"black"  }} >Price (Highest first)</MenuItem>
    <MenuItem _hover={{bg:"white", color:"black"  }} >Price (Lowest first)</MenuItem>
  </MenuList>
</Menu>
</Box>


            </Box>

<Box display="flex" justifyContent="center" ><Text className="heading"  >Filter by</Text></Box>

           
<Box className="category"   >
            
            <CheckboxGroup   colorScheme="green" >
  <Stack>
  <Text className="heading"  >Categories</Text>
    <Checkbox value='Televisions'>Televisions</Checkbox>
    <Checkbox value=''>Mobiles</Checkbox>
    <Checkbox value='Laptops'>Laptops</Checkbox>
    <Checkbox value='Audio'>Audio</Checkbox>
    <Checkbox value='Refrigerators'>Refrigerators</Checkbox>
    <Checkbox value='Washing Machines'>Washing Machines</Checkbox>
    <Checkbox value='Air Conditioners'>Air Conditioners</Checkbox>
    <Checkbox value='Kitchen Appliances'>Kitchen Appliances</Checkbox>
  </Stack>
</CheckboxGroup>

</Box>



           
<Box className="category" >
            
            <CheckboxGroup   colorScheme='green' defaultValue={['naruto', 'kakashi']}>
  <Stack>
  <Text className="heading"  >Price</Text>
    <Checkbox value='naruto'>500 & Below</Checkbox>
    <Checkbox value='sasuke'>501 - 1000</Checkbox>
    <Checkbox value='kakashi'>1001 - 1500</Checkbox>
    <Checkbox value='naruto'>1501 - 3000</Checkbox>
    <Checkbox value='sasuke'>3001 - 1000</Checkbox>
    <Checkbox value='kakashi'>10001 - 20000</Checkbox>
    <Checkbox value='naruto'>20000 & above</Checkbox>
  </Stack>
</CheckboxGroup>

</Box>

            </Box>

            <Box className="product" >

            {products.map(product=>{
                        return(
                        <Box className="product-box" key={product.id} >
                        <Box style={{display:"flex",justifyContent:"flex-end"}} ><AiOutlineHeart color="white" size="20px"  /></Box> 
                        <Box className="pro-img" ><img style={{objectFit:"contain"}} src={product.image} /></Box>
                        <Box className="pro-title" >{product.title}</Box>
                        <Box className="pro-price" >₹ {product.price}</Box>
                        </Box>
                    )})}
            </Box>

        </Box>
    )
}