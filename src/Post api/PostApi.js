import axios from "axios";
import React, { useState } from "react";

const PostApi = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const saveUser =()=>{
    console.warn({name,email,mobile});
    let data = {name,email,mobile};
    fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Accept' :'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(data)

    }).then((result)=>{
        console.warn('result',result);
        result.json().then((response)=>{
           console.log( 'response',response)
        })
    })
  }
  const [usename ,setUserName] = useState('');
  const [age ,setAge] = useState('');
  const [showmsg ,setShowmsg] = useState('');
const saveUserData = async () => {
  try {
    // Check if username or age is empty before submitting
    if (!usename || !age) {
      setShowmsg('Username and age are required.')
      console.error('Username and age are required.');
      return;
    }

    // Prepare the data to be sent in the POST request
    const userData = { usename, age };

    // Make a POST request using axios.post
    const response = await axios.post('http://localhost:3000/users', userData);
    setShowmsg('')
    // Handle the response, e.g., log the data or update state
    console.log('Response:', response.data);
  } catch (error) {
    // Handle errors, e.g., show an error message
    console.error('Error:', error);
  }
};


  return (
    <>
      <br />
      <br />{" "}
   
      <input
        type="text"
        value={name}
        name="name"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      <br />
      <br />
      <input
        type="number"
        name="mobile"
        value={mobile}
        placeholder="enter your mobile number"
        onChange={(e) => setMobile(e.target.value)}
      />{" "}
      <br />
      <br />
      <button onClick={saveUser}>Submit</button>

      {showmsg}
      <input type="text" placeholder="enter your name" value={usename} onChange={(e)=>setUserName(e.target.value)}/>
      <input type="number" placeholder="enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={saveUserData}>Submit</button>

    </>
  );
};

export default PostApi;
