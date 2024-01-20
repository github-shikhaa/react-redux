// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Getapi = () => {

//   const [name, setName] = useState("");
//   const [lname, setLname] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     getApiList(); 
//   }, []);
//   const handleSubmit = () => {
  
//     let data = { name, lname, email };
//     fetch("https://reqres.in/api/users", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((result) => {
//       console.log("api result", result);
//       result.json().then((response) => {
//         console.log(response);
//       });
//     });
//   };   
  
//   const getApiList=()=>{
//     async()=>{
//      let response = await axios.get('https://dummyjson.com/products')
//      console.log(response.data);
//   }
//   }


//   return (
//     <>
//       <input
//         type="text"
//         name="text"
//         placeholder="enter your first name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         name="text"
//         placeholder="enter your last name"
//         value={lname}
//         onChange={(e) => setLname(e.target.value)}
//       />
//       <input
//         type="text"
//         name="email"
//         placeholder="enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>click on me </button>
   
//     </>
//   );
// };

// export default Getapi;
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Getapi = () => {
  const [data,setData] = useState([]);
 const fetchapi =async()=>{
    try {
      let response = await axios.get('http://localhost:3000/products');
       setData(response.data);
    } catch (error) {
      
    }
  }
useEffect(()=>{
  fetchapi()
},[])

const deleteUser = async (id) => {
  try {
    // Check if userId is empty before making the DELETE request
    if (!id) {
      console.error('User ID is required.');
      return;
    }

    // Make a DELETE request using axios.delete
    const response = await axios.delete(`http://localhost:3000/users/${id}`);
    fetchapi()
    // Handle the response, e.g., log the data or update state
    console.log('Response:', response.data);
  } catch (error) {
    // Handle errors, e.g., show an error message
    console.error('Error:', error);
  }
};
  return (
    <div>{
      data.map((item,index)=>(
     <div key={index}>

      <h3>Name : {item.food_name}</h3>
      <button onClick={()=>deleteUser(item.id)}>Delete</button>
        <h3>Age : {item.age}</h3>
        <img src={item.image}/>
      </div>

      ))
       
      
      
    }
   
    </div>
  )
}

export default Getapi