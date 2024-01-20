import React from 'react'

class  UserRenderMethod extends React.Component{
   
     constructor(){
        super();
        this.state={
            email:'shikha@gmail.com'
        }
     }
    render()
    {
        console.warn('rednder method',this.state.email)
        return(
       
       
            <div><h1>user render method compoent</h1>
               
            <button onClick={()=>this.setState(
                {email:"shikha.jatav@gmail.com"}
            )}>Update</button>
            </div>
        )
    }
}

export default UserRenderMethod;