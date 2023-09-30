import { Route, Routes } from "react-router-dom";


import React from 'react'
import TodoPage from "./todoPage";

import SingleTodo from "./singleTodo";

const MainRoute = () => {
  return (
    
    <Routes>
      <Route path="/" element={<TodoPage/>} />
      <Route path="/singleTodo/:id" element={<SingleTodo />} />
      </Routes>
  )
}

export default MainRoute
