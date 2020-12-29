/**
 * @description 
 * @author ronffy
 * @Date 2020-12-29 19:33:58
 * @LastEditTime 2020-12-29 19:34:16
 * @LastEditors ronffy
 */
import React from 'react';
import Footer from './Footer';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Main = () => (
  <div>
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);
export default Main;
