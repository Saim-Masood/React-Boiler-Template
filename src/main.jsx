import React from 'react'
import ReactDOM from 'react-dom/client'

// Capital S denotes component!
const Change = ()=>{

  const Search = ()=>{
    alert("hello world");
  }

  return (
    <button onClick={Search}>Click me!!!</button>

  )
} ;

const Image = ()=>{
    return (
        <img src="src/assets/react.svg" width={200}/>
        
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div>
    <h1>Hello I'm Saim. Here it is my first React App.</h1>
      <p>Please click the button below !!!</p>
      <Change/>
      <Image/>

  </div>
)

