import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const {name} = params;
  return (
    <div>this is {name}</div>
  )
}

export default User