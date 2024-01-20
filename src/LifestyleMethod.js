// Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

// The three phases are: Mounting, Updating, and Unmounting.



// when component is loaded =>mouting
// when component is updated => updating
// when component is removed => unmonting

// question-> ky hum componnet unount krne ke baad create krege to fir se lifecycle method call hogi?

// anser> haa kyunki unmount me component puri trf distory hojata h

// --------------------------constructor------------------

// constructor html ke create or render hone se phle call hta h
// constructor me hum state ko use krskte h jse state html ready hone se phle hi ready hojati 
// h lekin hum api ko use nahi krskte meanse use effect ko kuunki api ko ane me time lgta h
example=>
class App extends React.Component{
    constructor()
    {
        // super();parent compoemt ko calll krene ke liye  React.Component(=>ye parent compoentn h)
        console.warn('constructor')
    }
    render()
    {  console.warn('render')


    return(
        <h1>helllo</h1>
    )
    }
}

output =>constructor
render