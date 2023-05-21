import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Box, Button, Heading, Flex, Img } from '@chakra-ui/react'

const Home = ({ clickLogout }) => {
  const [cont, setCont] = useState([]);
  const [hasMore, setHasMore] = useState(true);


  const loadingCont = () => {
    fetch('https://randomuser.me/api/?results=50')
      .then((res) => res.json())
      .then((data) => {
        const newCont = cont.concat(data.results);
        setCont(newCont);
        setHasMore(newCont.length < 500);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadingCont();
  }, []);

  const handleLogout = () => {
    clickLogout();
  };

  return (
    <Box>

      <Box>
        <Flex id='navbar' >
          <Heading color={"#002E6E"} fontSize={"2xl"} >Home</Heading>
          <Button type="submit"
            bg={"red.500"}
            color={"white"}
            _hover={{
              bg: "red.600",
            }} onClick={handleLogout}>Logout</Button>
        </Flex>
      </Box>

      <InfiniteScroll
        dataLength={cont.length}
        next={loadingCont}
        hasMore={hasMore}
        loader={<Heading>Loading...</Heading>}
      >
        <Box id='cont'>
          {cont.map((cont, index) => (
            <Box key={index} id='conts'>
              <Img src={cont.picture.thumbnail} alt="User" />
              {cont.name.first} {cont.name.last}
            </Box>
          ))}
        </Box>
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
