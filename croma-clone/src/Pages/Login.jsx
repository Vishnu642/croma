import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading
  } from '@chakra-ui/react';
  import { useState } from "react"
import { useAuth } from '../components/auth';
import { useLocation, useNavigate } from "react-router-dom"

  
  export const Login =()=> {

    const [user,setUser] = useState("")
    const [mail,setMail] = useState("")
    const Navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()

    const redirectPath = location.state?.path || "/"

    const handleClick = ()=>{
        auth.login(user)
    Navigate(redirectPath,{replace:true})
    }

    const handleLogout = ()=>{
      auth.logout()
      Navigate("/")
  }

    return (
      <Flex
      color="white"
        // minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg="black">
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Login</Heading>
        
          </Stack>
          <Box
            rounded={'lg'}
            bg="#1e1e1e"
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
            <FormControl id="email">
                <FormLabel>User name</FormLabel>
                <Input type="text" onChange={(e)=>setUser(e.target.value)} />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setMail(e.target.value)} />
              </FormControl>
              
              <Stack spacing={10}>
                
                <Button
                  bg="#00e9bf"
                  color="black"
                  _hover={{
                    bg: "#00e9bf",
                  }}
                  onClick={handleClick}
                  >
                  Login
                </Button>
              </Stack>

              <Stack spacing={10}>
                
                <Button
                  bg="#00e9bf"
                  color="black"
                  _hover={{
                    bg: "#00e9bf",
                  }}
                  onClick={handleLogout}
                  >
                  Logout
                </Button>
              </Stack>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }