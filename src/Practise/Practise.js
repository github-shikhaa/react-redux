import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Practise= ()=>{
  
     const [showData,setShowData] = useState([]);
     const [namevalue,setNameValue] = useState('');
     const [agevalue,setAgeValue] = useState('');
   const getList = async()=>{
    const response = await axios.get('http://localhost:3000/users');
    setShowData(response.data);
    console.log(response.data);
   }

   useEffect(()=>{
    getList();
   },[]) 

 const handleSubmit = async()=>{
    let datas = {namevalue,agevalue};
    let reponsepost = await axios.post('http://localhost:3000/users',datas);
    setNameValue('');
    setAgeValue('');
    console.log(reponsepost.data);
     
 }
 const handleDlete= async(id)=>{
 
try {
    if(!id){
        console.log('id is required');
        return;
    }
  
        const responsedelte = await axios.delete(`http://localhost:3000/users/${id}`);
        getList();
        console.log(responsedelte.data);
    
} catch (error) {
    
}

 }
const [searchValue,setSearchValue] = useState('');
const [ showSearch,setShowSearch] = useState([]);
 const handleSearch = async(e)=>{
   let inputValue = e.target.value;
    let response = await axios.get(`https://dummyjson.com/products/search?q=${inputValue}`)
    setSearchValue(inputValue);
    setShowSearch(response.data.products);
    console.log(response.data.products);
 }




    return(
  <>
   {
     showData ? (
        showData.map((items)=>(
            <div>
                <p>{items.namevalue}</p>
            <p>{items.agevalue}</p> 
            <button onClick={()=>handleDlete(items.id)}>Delete</button>
            </div>
             ))
     ):<h2>Loading....</h2>
   }

   <input type='text' placeholder='entername' value = {namevalue} onChange={(e)=>setNameValue(e.target.value)}/>
   <input type='number' placeholder='age' value = {agevalue} onChange={(e)=>setAgeValue(e.target.value)}/>
  <button onClick={handleSubmit}>submit button</button>

  <input value= {searchValue}  onChange={handleSearch}/>
  {showSearch&&showSearch.length > 0 &&(
    showSearch.map((searchitem)=>(
        <p>{searchitem.title}</p>
    ))
  )}

  </>
    )
}

export default Practise;