// TodoItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Text } from "@chakra-ui/react";
const TodoItem = ({ todo, onEdit, onDelete, onComplete }) => {


    const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/singleTodo/${todo._id}`);
  };

  const handleDelete = () => {
   onDelete()
  };
  const trimmedTitle =
  todo.title.length > 15
    ? `${todo.title.slice(0, 15)}...`
    : todo.title;


  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="10px"
      border="1px solid #ccc"
      borderRadius="5px"
      marginBottom="10px"
      backgroundColor={todo.completed ? "green.100" : "white"}
    >
      <Button
        className="roundbutton"
        borderRadius="50%"
        width="20px"
        height="20px"
        backgroundColor={todo.completed ? "green" : "red"}
        marginRight="10px"
        onClick={onComplete}
      ></Button>
      <Text color="black">{trimmedTitle}</Text>
      <Button onClick={handleEdit} marginRight="5px" color="black">
        Edit
      </Button>
      <Button
        onClick={handleDelete}
        colorScheme="red"
        backgroundColor="red.400"
        _hover={{ backgroundColor: "red.500" }}
      >
        Delete
      </Button>
    </Box>
  );
};

export default TodoItem;
