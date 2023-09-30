import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {fetchTodos} from  "../Redux/action"
const NavBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleHeadingClick = () => {

    // Navigate to the root route ("/")
    navigate('/');
 
    dispatch(fetchTodos());
  };

   


  return (
    <Flex as="nav" p={4} bg="white" align="center" justify="space-between">
      <Heading as="h1" fontSize="xl" onClick={handleHeadingClick} cursor="pointer">
        Todo App
      </Heading>
    </Flex>
  );
};

export default NavBar;
