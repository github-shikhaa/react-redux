import axios from "axios";
import React, { useState } from "react";

const Practise3 =()=>{
const [name,setName] = useState('');
const [author,setAuthor] = useState('');
const [address,setAddress] = useState('');
const [emaail,setEmaail] = useState('');
const [showGet,setShowGet] = useState([]);
const handleSubmit =async()=>{
    let datas = {name,author,address,emaail};
    let reponsepost = await axios.post('http://localhost:3000/resturants',datas);
   
    console.log(reponsepost.data);
}
const [searchProduct ,setSearchProduct] = useState('');
const [showSearch,setShowSearch] = useState([]);
const handleSearch = async(e)=>{
    let inputVal = e.target.value 
    const respnseSearc  = await axios.get(`https://dummyjson.com/products/search?q=${inputVal}`);
     setSearchProduct(inputVal);
     setShowSearch(respnseSearc.data.products);
}
const [todoVal,setTdo] = useState('');
const [list,setList] = useState([]);
const handleClick= ()=>{
    setList([...list,todoVal])
    setTdo(' ');
}
const handleChangeTodo = (e)=>{
    setTdo(e.target.value);

}
const handleDeleteTodo= ()=>{

}
const handleClickGet=async()=>{
    try {
      const responseClcik = await axios.get('https://reqres.in/api/users?page=2');
      setShowGet(responseClcik.data.data)
      console.log("responseClcik.data.per_page",responseClcik.data.per_page)
    } catch (error) {
       
      console.error(error)
    }
    }
    const handledeleteGet = async(id)=>{
        try {
            if(!id){
                console.log('notid');
                return;

            }
            else{
                const re = await axios.delete(`https://reqres.in/api/users?page=${id}`);
                handleClickGet();
                console.log("res.data.data",re.data.data);
            }
        } catch (error) {
            
        }
    }
return(
  <>
      <h1>Practise3</h1>
      <input typeof="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <input typeof="text" placeholder="author" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
      <input typeof="text" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
      <input typeof="email" placeholder="name" value={emaail} onChange={(e)=>setEmaail(e.target.value)}/>
     <button onClick={handleSubmit}>Submit</button>


     <input value = {searchProduct}  onChange= {handleSearch} placeholder="search your products here "/>
    {
        showSearch.map((shows)=>{
            return(
                <p>{shows.title}</p>
            )
        })
    } 

    <h1>Todo List</h1>

    <input value={todoVal} onChange={handleChangeTodo} placeholder="todo here"/>
    <button onClick={handleClick}>Add</button>
    {
        list.map((items)=>{
            return(
                <ul>
                    <li>{items} <button onClick={()=>handleDeleteTodo(items.id)}>Delete</button></li> 
                </ul>
            )
        })
    }
      <button onClick={handleClickGet}>click to get data</button>

      {showGet.map((items)=>(

     <div>
          <p>{items.email}</p>
    <button onClick={(id)=>handledeleteGet(items.id)}>delete</button>
     </div>

      ))}
 </>
)
}

export default Practise3; 