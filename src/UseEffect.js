import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
// const [count ,setCount] = useState(0)
//     useEffect(()=>{
//         console.warn('useeffect')
//     })
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Update</button></div>
//   )
// }


// useEffect with condition
const UseEffect = (props) => {
 useEffect(()=>{
  alert('coiunt is '+props.count)
 },[props.count])
   

//  const showText = props.showText;
 return (
       <>
       
       <div>
       <p style={{ color: `${props.color}` }}>rrr</p>

            <p> passing data from props and updating here props{props.count}</p>
            {/* <h1>props {data}</h1> */}

            </div>
            </>
      )
    }
export default UseEffect