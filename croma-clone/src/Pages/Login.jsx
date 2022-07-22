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
  
  export const Login =()=> {
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
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color="#00e9bf">Forgot password?</Link>
                </Stack>
                <Button
                  bg="#00e9bf"
                  color="black"
                  _hover={{
                    bg: "#00e9bf",
                  }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }