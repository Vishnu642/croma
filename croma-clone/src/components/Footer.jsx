import {Box,Flex,Text, Input, Table, Tr} from "@chakra-ui/react"
import { FaYoutube,FaFacebookF,FaInstagramSquare,FaLinkedinIn,FaTwitterSquare} from 'react-icons/fa';
import "./Footer.css"
export const Footer=()=>{
    return(
        <Box className="footer-container" >
        <Flex className="footer" >
            <Box className="footer-contact" >
                <Box>
                    <Text fontWeight="bold" >CONNECT WITH US</Text>
                    <Input bg="white" placeholder="Enter Email Id" type="text" ></Input>
                </Box>
                <Box className="footer-icons" >
                    <FaYoutube/>
                    <FaFacebookF/>
                    <FaInstagramSquare/>
                    <FaLinkedinIn/>
                    <FaTwitterSquare/>
                </Box>
                <Box>
                    <Text><h3>© Copyright 2021 Croma. All rights<br></br> reserved</h3></Text>
                </Box>
            </Box>
            <Box>
                
                <Box>
                    <Text className="table-header" >USEFUL LINKS</Text>
                </Box>
                <Box className="table">
                    <Box  > 
                        <Table className="table-box" >
                            <Tr>About Croma</Tr>
                            <Tr>Help and Support</Tr>
                            <Tr>FAQs</Tr>
                            <Tr>Buying Guide</Tr>
                            <Tr>Return Policy</Tr>
                            <Tr>Bulk Enquiry</Tr>
                            <Tr>Store Locator</Tr>
                            <Tr>Delightful Programmes</Tr>
                        </Table>
                    </Box>
                    <Box className="table-box" >
                        <Table>
                            <Tr>E-Ware</Tr>
                            <Tr>Franchise Opportunity</Tr>
                            <Tr>Site Map</Tr>
                            <Tr>Careers At Croma</Tr>
                            <Tr>Terms Of Use</Tr>
                            <Tr>Disclaimer</Tr>
                            <Tr>Privacy Policy</Tr>
                        </Table>
                    </Box>
                </Box>
            </Box>
            
         <Box>
            <Box>
                    <Text className="table-header" >PRODUCTS</Text>
                </Box>
                <Box className="table">
                    <Box className="table-box" > 
                        <Table>
                            <Tr>Televisions & Accessories</Tr>
                            <Tr>Phones & Wearables</Tr>
                            <Tr>Computers & Tablets</Tr>
                            <Tr>Kitchen Appliances</Tr>
                            <Tr>Audio & Video</Tr>
                            <Tr>Health & Fitness</Tr>
                            <Tr>Store Locator</Tr>
                            <Tr>Delightful Programmes</Tr>
                        </Table>
                    </Box>
                    <Box className="table-box">
                        <Table>
                            <Tr>Grooming & Personal Care</Tr>
                            <Tr>Cameras & Accessories</Tr>
                            <Tr>Smart Devices</Tr>
                            <Tr>Gaming</Tr>
                            <Tr>Accessories</Tr>
                            <Tr>Top Brands</Tr>
                        </Table>
                    </Box>
                </Box>
                </Box>
            
        </Flex>
        </Box>
    )
}