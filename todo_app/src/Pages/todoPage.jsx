// TodoList.js
import React, { useEffect, useState } from 'react';
import TodoItem from '../components/todoItem';

import {
    Box,
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    useToast,
  } from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";
import {addTodo,deleteTodo,updateTodo,fetchTodos} from  "../Redux/action"
import NavBar from '../components/navBar';
const TodoPage= () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const [newTodoText, setNewTodoText] = useState('');
  
    useEffect(() => {
     
      dispatch(fetchTodos());
    }, [dispatch]);

 
    const handleAddTodo = () => {
      // Dispatch the addTodo action to add a new todo
      if (newTodoText.trim() !== '') {
        dispatch(addTodo({ title: newTodoText, description: '', completed: false }));
        setNewTodoText('');
      }
    };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));

  };



console.log(todos)
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
          <Heading>Add a New Todo</Heading>
          <FormControl>
            <Input
              type="text"
              placeholder="Add a new todo"
              value={newTodoText}
              onChange={(e) => setNewTodoText(e.target.value)}
              bg="white"
              color="black"
            />
          </FormControl>
          <Button mt={2} colorScheme="orange" onClick={handleAddTodo}>
            Add
          </Button>
          <Heading mt={4} size="sm">
            Todo List
          </Heading>
          {todos.length > 0 &&
            todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onDelete={() => handleDeleteTodo(todo._id)}
              />
            ))}
        </div>
      </Center>
    </Box>
  </>
  );
};

export default TodoPage;
