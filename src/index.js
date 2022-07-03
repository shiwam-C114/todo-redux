import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import Home from './components/Home';
import Todo from './components/Todo';
import TodoDetail from './components/TodoDetail';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/todo/:id' element={<TodoDetail/>}/>
        </Routes>
  </BrowserRouter >
    </React.StrictMode>
  </ChakraProvider>
);