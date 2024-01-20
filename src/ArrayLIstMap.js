import React from "react";
import Table from 'react-bootstrap/Table';

const ArrayLIstMap = () => {
//   const students = ["anil", "sidhu", "sam"];

const user = [

    {
        id:1,
        name:'shikha',
        email:'shikha@gmail.com',
        contact:349230924
    },
    {
        id:2,
        name:'ishant',
        email:'ishant@gmail.com',
        contact: 897897387
    },
    {
        id:3,
        name:'ritesh',
        email:'ritesh@gmail.com',
        contact: 432355523
    },
    {
        id:4,
        name:'sonam',
        email:'sonam@gmail.com',
        contact:'111'
    },

]

  // map function is use for looping
  // it trace each array Element

  // students.map((item)=>{
  //     console.warn(item)
  // })

  // using for loop
  // for(let i = 0 ; i<students.length; i++)
  // {
  //     console.warn('in for loop names are' ,students)
  // }  in return function map suppoert not for loop

  return (
    <>
      <h1>Handle Array with list</h1>
      {/* {students.map((data) => (
        <h2>{data}</h2>
      ))} */}
      {/* using array */}


   {/* using object */}
 


  {/* <table border='1'>
  <tr>
            <td>
            Name
            </td>
            <td>
            Email
            </td>
            <td>
          Contact
            </td>
         
        </tr>
  {students.map((data) => (
        <tr>
            <td>
            {data.name}
            </td>
            <td>
            {data.email}
            </td>
            <td>
            {data.contact}
            </td>
         
        </tr>
      ))}
  </table> */}

      {/* {

 for(let i = 0 ; i<students.length; i++)
 {
        <h2>{students[i]}</h2>
    }
} */}
      {/* give error */}

      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
    {
        user.map((data,index)=>(
              data.contact === '111'?
          
            <tbody key={index}>
                  <tr> 
              <td> 
                <td>{data.id}</td></td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.contact}</td>
            </tr>
            </tbody>
              :null
          
        
        ))
    }
    </Table>



{/* wquestion and ander */}

{/* unique key kyu jarrori h
unique key isly jaroori h jab virtual dom me elelemtn jsta h to wo unique key ki useImperativeHandle(
  se uss particular contentn ko hhi render krta h jisse applcation me help hoti h ur fast ota h, */}
 




    </>
  );
};

export default ArrayLIstMap;
