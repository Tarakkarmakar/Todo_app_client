import React, { useEffect, useState } from 'react';


import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Heading,
  Alert,
  AlertDialog,
  useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchTodoById, updateTodo } from '../Redux/action';
import NavBar from '../components/navBar';

const SingleTodo = () => {
    const toaster = useToast();
    const navigate=useNavigate()
  const { id } = useParams();
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todos); 

  const [editedTodo, setEditedTodo] = useState({});

  useEffect(() => {

    dispatch(fetchTodoById(id));
  }, [dispatch, id]);

  useEffect(() => {
    // Set the initial editedTodo state when todo data is fetched
    setEditedTodo(todo);
  }, [todo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTodo({
      ...editedTodo,
      [name]: value,
    });
  };
  console.log(todo,id)
  const handleCheckboxChange = () => {
    setEditedTodo({
      ...editedTodo,
      completed: !editedTodo.completed,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateTodo(editedTodo));

    toaster({
        title: `Your To Do is updated `,
        duration: 2000,
        position: "top",
        status: "success",
        isClosable: true,
      });

  };

  return (
    <>
    <NavBar />
   
  <Box
      bg="blue.500"
      p={4}
     color="white"
      h="100vh"
      borderRadius="md"
      width={['100%', '100%', '100%']}
      margin="0 auto" 
    >
      <Center>
        <div>
       <Heading>Edit Todo</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Title:</FormLabel>
              <Input
              bg="white"
              color="black"
                type="text"
                name="title"
                value={editedTodo.title || todo.title}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description:</FormLabel>
              <Input
                type="text"
                color="black"
                name="description"
                value={editedTodo.description || ''}
                onChange={handleInputChange}
                bg="white"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Completed:</FormLabel>
              <Checkbox
                name="completed"
               
                checked={editedTodo.completed || false}
                onChange={handleCheckboxChange}
              >
                Completed
              </Checkbox>
            </FormControl>
            <Button mt={4} colorScheme="teal" type="submit">
              Save
            </Button>
          </form>
        </div>
      </Center>
    </Box>
    </>
  );
};

export default SingleTodo;
