
import {Box,Flex,Image, Menu,Text,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Icon,
    Input
   } from "@chakra-ui/react"
   import {HamburgerIcon} from "@chakra-ui/icons"
   import { FaUserAlt } from 'react-icons/fa';
   import {GoLocation} from "react-icons/go"
   import {FiShoppingCart} from "react-icons/fi"
import { CartCounter } from './CartCounter';


export const Navbar = ()=>{
    return(
        <Box>
            <Flex border="1px" justifyContent="space-around" bg="black" flexWrap="nowrap" borderColor="black" w="100%" h="80px" >
                <Box display="flex" justifyContent="center" alignItems="center"  >
                    <Image h="30px" w="250px" src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg/mxw_160,f_auto" ></Image>
                </Box>


                <Box display="flex" justifyContent="center" alignItems="center" gap="2px" >
                    <Box>
                <Menu bg="white" >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    variant='outline'
    icon={<HamburgerIcon />}
    command="Menu"
    color="white"
  />
  <MenuList bg="black" color="white"  >
    <MenuItem fontWeight="bold" >
      SHOP BY CATEGORY
    </MenuItem>
    <MenuItem command=">" >
      Television and Accessories
    </MenuItem>
    <MenuItem command=">" >
      Home Appliances
    </MenuItem>
    <MenuItem command=">" >
      Phones and wearables
    </MenuItem>
  
  <MenuItem command=">" >
      Computer and Tablet
    </MenuItem>
    <MenuItem command=">" >
      Kitchen Appliances
    </MenuItem>
    <MenuItem command=">" >
      Audio and Video
    </MenuItem>
    <MenuItem command=">" >
      Health and Fitness
    </MenuItem>
    <MenuItem command=">" >
      Grooming and Personal Care
    </MenuItem>
    <MenuItem command=">" >
      Cameras and Accessories
    </MenuItem>
    <MenuItem command=">" >
      Smart Devices
    </MenuItem>
    </MenuList>
</Menu>
</Box>

   <Box>
    <Text color="white" fontSize={{ base: '20px', md: '16px', lg: '14px' }} fontWeight="600" >Menu</Text>
   </Box>
                </Box>


                <Box display="flex" justifyContent="center" alignItems="center" >
                    <Input w="450px" h="40px" bg="white" borderRadius="7px" placeholder="What are you looking for ?" type="text" />
                </Box>
                <Box display="flex" flexDirection="row" >
                    <Box display="flex" justifyContent="center" alignItems="center" ><GoLocation size="20px" color="white" /></Box>
                    <Box></Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" >
                    <FaUserAlt size="22" color="white" />
                    </Box>

                <Box>
                
            <Box  position="relative" padding="1rem 0.5rem 0 0" >
          <CartCounter/>
          <FiShoppingCart color="white" size="30px" />
          </Box>
          
                </Box>
            </Flex>
        </Box>
    )
}