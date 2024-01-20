import React from 'react'

const User = (props) => {
    const passchilddata = "child to parent"
  return (
    <React.Fragment>
        <h1>User component:{props.name}</h1>
        <button onClick={props.alert(passchilddata)}>click</button>
    </React.Fragment>
  )
}

export default User