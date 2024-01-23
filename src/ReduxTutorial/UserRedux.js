import React from 'react'

const UserRedux = (props) => {
  console.warn(props.data);
  const {data} = props;
  return (
   <>
    <div>UserRedux</div>
    <h4>{data.name}</h4>
    <h4>{data.age}</h4>
   </>
  )
}

export default UserRedux