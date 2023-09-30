import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const SET_TODOS = 'SET_TODOS';

const apiUrl = 'https://odd-tan-swallow-wrap.cyclic.cloud/api/todos';
// Create a new todo
export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, todo);
    dispatch({ type: ADD_TODO, payload: response.data });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

// Fetch all todos
export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({ type: SET_TODOS, payload: response.data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

// Fetch a todo by ID
export const fetchTodoById = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    dispatch({ type: SET_TODOS, payload: response.data });
  } catch (error) {
    console.error('Error fetching todo by ID:', error);
  }
};

// Update a todo by ID
export const updateTodo = (todo) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${todo._id}`, todo);
    dispatch({ type: UPDATE_TODO, payload: response.data });

  } catch (error) {
    console.error('Error updating todo:', error);
  }
};

// Delete a todo by ID
export const deleteTodo = (id) => async (dispatch) => {

   
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch({ type: REMOVE_TODO, payload: id });
  } catch (error) {
    console.error('Error deleting todo:', error);
  }
};
