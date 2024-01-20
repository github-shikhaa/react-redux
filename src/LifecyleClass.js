import React from 'react'


class LifecyleClass extends React.Component{
//     constructor()
// {
//     super();
//     this.state={
//         name:"shikha"
//     }
//     console.warn('constructor')
// }
//  componentDidMount()
//  {
//     console.warn('componentDidMount')
// }
 
//     render(){
//         this.setState({
//             name:"jatddav"
//          })
//         console.warn('render')
//         return(
//             <>
//              <h1>{this.state.name}</h1>
//              <button onClick={()=>this.setState({
//                 name:"jatav"
//              })}>update</button>
//             </>
//         )
//     }
// }



// coponent did update
constructor(){
    super();
    {
        this.state={
            count:0
            // name:"shikha"
        }
        console.warn('constructor')
    }
    
}
componentDidUpdate(preProps,preState,snapshot)
{console.warn('componentDidUpdate',preState)

}
render(){
    console.warn('render')

return(
    <div>
        <h1>hii{this.state.count}</h1>
        {/* <button onClick={()=>this.setState({
            name:'jatav'
        })}>update</button> */}

<button onClick={()=>this.setState({
            count:this.state.count+1
        })}>update</button>
    </div>
)
}
}
export default LifecyleClass;

// componentDidMount method me phle constructor call hota h jo state ya props jo define h usko likhta h ten render method call hota  h ur hamara code ka html run hota h
// ab fir componentDidMount call hota h jab hamara page load hojata hhum api me componentDidMount ka use krte h kyunki api ek hi baar call ki jatai h ur usk state abbar bbarr update nahi ki ati





























// mounting me phle constructor then render method callhoti h
// then component mount call hota h