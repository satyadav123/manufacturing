import "./App.css";
import {useState} from "react";
export default function App() {
  const [set,updateset]=useState({
    username:"",
    Age:"",
    Mobile:""
  });
  var InputHandler=((e)=>{
    const {id,value}=e.target;
  updateset({
    ...set,
    [id]:value,
  })
  console.log(set)

  })
  let handleSubmit=((e)=>{
    e.preventDefault();
    //e.preventDefault()
  // console.log(set)
    fetch("http://localhost:8080/data",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(set)
    })
})
 


  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
<input onChange={InputHandler} id="username"type="text" placeholder="Enter Name"/><br/><br/>
<input onChange={InputHandler} id="Age"  type="text" placeholder="Enter Age"/><br/><br/>
<input onChange={InputHandler} id="Mobile" type="text" placeholder="Enter Mobile Number"/><br/><br/>
<input type="Submit"/>
    </form>
    
    </div>
  );
}
