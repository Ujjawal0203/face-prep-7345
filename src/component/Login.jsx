import React, { useState } from 'react';
import { Box, Input, Button, Heading, Flex, Stack, FormLabel, FormControl } from '@chakra-ui/react'

const Login = ({ clickLogin }) => {
  const [user, setUser] = useState('foo');
  const [pass, setPass] = useState('bar');

  const handleLogin = () => {
    if (user === 'foo' && pass === 'bar') {
      alert('Login successful')
      clickLogin();
     
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Box>
      <Flex align={"center"} justify={"center"} bg={"gray.50"} m="auto">
        <Stack
          spacing={8}
          mx={"auto"}
          width={{ base: "100%", md: "35%" }}
          py={12}
          px={6}
        >
          <Stack align={"center"} >
            <Heading color={"#002E6E"} fontSize={"3xl"} marginBottom={"5px"} >Login to your account</Heading>
            <Box rounded={"lg"} bg={"gray.50"} boxShadow={"lg"} p={8}>
              <Stack spacing={2} >

                <FormControl id='username' >
                  <FormLabel>User name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                </FormControl>

                <FormControl id='password'>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                </FormControl>

                <Button type="submit"
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.600",
                    }} onClick={handleLogin}>Login</Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Login;
