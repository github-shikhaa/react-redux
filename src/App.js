import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Login from './Login';
import Regsiter from './Regsiter';
import UpdatePrdoct from './UpdatePrdoct';
import AddProduct from './AddProduct';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import UserRenderMethod from './UserRenderMethod';
import React, { useState ,useEffect } from 'react';
import LifecyleClass from './LifecyleClass';
import UseEffect from './UseEffect';
import ArrayLIstMap from './ArrayLIstMap';
// import User from './child to parent/User';
import Homeone from './Homeone';
import HomeTwo from './HomeTwo';
import PostApi from './Post api/PostApi';
import Getapi from './Get api /Getapi';
import Home from './React router/Home';
import About from './React router/About';
import Contact from './React router/Contact';
import Navbar from './React router/Navbar';


 import User from './React router/User';
import Filter from './React router/Filter';
import Practise from './Practise/Practise';
import Todo from './Projects /Todo';
import TodoList from './Projects /TodoList';
import Show from './Projects /Show';
import MyComponent from './Projects /Show';
import Practise2 from './Practise/Practise2';
import Practise3 from './Practise/Practise3';
import MyTodoPractise from './MytodoPractise';
import UserRedux from './ReduxTutorial/UserRedux';
import HomeContainer from './ReduxTutorial/container/HomeContainer';

function App() {
const [listTodo,setListTodo] = useState([ ])
const [listTodoa,setTodoList] = useState([])
let addList = (inputText) => {
  setListTodo([...listTodo,inputText]);
}

let addTodo = (inputodo)=>{

  setTodoList([...listTodoa,inputodo]);

}
const deleteItems = (key)=>{
  let newListTodo = [...listTodo];
  newListTodo.splice(key,1);
  setListTodo([...newListTodo])
}
console.log(listTodo)
return(
  <>
 {/*react router  */}

 <BrowserRouter>
 <Navbar/>
<Routes>
<Route path ='/' element={<Home/>}/>
<Route path ='/about' element={<About/>}/>
<Route path ='/contact' element={<Contact/>}/>
<Route path ='/user/:name' element={<User/>}/>
<Route path ='/filter' element={<Filter/>}/>
<Route path ='/*' element={<Navigate  to='/'/>}/>
{/* <Route path ='/*' element={<Page404/>}/> */}
</Routes>
 </BrowserRouter>
{/* 
<Getapi/>
<PostApi/> */}
  {/* <Getapi/> */}

  {/* <Practise/> */}
  {/* <Todo  addList ={addList} addTodoval = {addTodo}/>
  <h1>Todo</h1>
  <hr/>
  {
    listTodo.map((listItem,i)=>{
      return (
        <TodoList index = {i} key = {i} item={listItem} 
        delete={deleteItems}/>
      )
      })
  }

{
  listTodoa.map((idt,i)=>{
    return(
<Show key = {i} index= {i} its={idt}/>
    )
  })
} */}

{/* <MyComponent/>

<Getapi/> */}
{/* <Practise2/> */}
{/* <Practise3/> */}
{/* <MyTodoPractise/>

<h1>Learn About  Redux Toolkit</h1>
<h2>App component</h2>
<Practise3/> */}


{/* <UserRedux data = {{name:'shikha jatav',age:21}}/> */}

<HomeContainer/>
</>
)


}
export default App