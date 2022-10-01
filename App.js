//import React from 'react';
/*import { useState } from 'react';


function App(){
  const [user,setUser]=useState({name:"Ram Suryawanshi"});
  return(
    <div>
    <Navbar/>
    <MainPage user={user}/>

    </div>
  )
}

export default App;

//Navbar Component
function Navbar(){
  return <nav style={{background:"#10ADDE",color:"#fff"}}>Demo App</nav>
}


//MainPage Component
function MainPage({user}){
  return(
    <div>
      <h3>Main Page</h3>
      <Content user={user} />
      
    </div>
  )
}


//Content Component
function Content({user}){
  return(
    <div>
      <Message user={user}/>
    </div>
  )
}




//Message Component
function Message({user}){
  return<p>Welcome, {user.name}</p>
} */

// PropDrilling Concept

/*import React from "react";
import PropDrilling from "./PropDrilling";
function App() {
  return (
    <PropDrilling/>
  )
}
 export default App;  */

 /*import React from "react";

 import { createContext,useContext } from "react";


 //create a context 
  const userContext=createContext();//return a context object with emmpty value
 
 
  //create a functional component
  function App(){
   return(
     <div>
     <Navbar/>
     <userContext.Provider value={
       {
       user:"Ram Suryawanshi",
       age:27,
       email:"suryawanshiram2@gmail.com",
       loc:"Pune"}
       }>
     <MainPage/>
     </userContext.Provider>
 
    
 
 
     </div>
   )
  }
 
  export default App;
 
 
 
  function Navbar(){
    return <nav style={{background:"#10ADDE",color:"#fff"}}>My APP</nav>
  }
 
 
  function MainPage(){
 return(
   <div>
     <h3>MainPage</h3>
     <Content/>
   </div>
 )
  }
 
 
  function Content(){
    return(
     <div>
       <Message/>
     </div>
    )
  }
 
 
  function Message(){
   //Getting access to the state provided by the context provider 
   // wrapper 
   const {user,age,email,loc}=useContext(userContext)//Destructing the context wrapper
   return (
       <>
         <p>Welcome {user}</p>;
         <p>Age:{age}</p>
         <p>Email:{email}</p>
         <p>Location:{loc}</p>
       </>
   )
   
 
  } */


  import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';
import Login from './Login'
import datas from "./datas";
import "./App.css"
function App() {
    const loginUser={
        username:"admin@gmail.com",
        password:"admin123"
    }
    const [user,setUser]=useState({email:""});
//eslint-disable-next-line
    const [Employees,setEmps]=useState([]);


    useEffect(()=>{
        setEmps(datas)
    },[]);


    const loginUserFn=(details)=>{
        if(
            details.email===loginUser.username&&
            details.password===loginUser.password){
            setUser({
                    email:details.email,
                } );
                console.log(user)
        }else{
            alert("Invalid Credentials.Kindly Check username or password")
        }
    }

  return (
    <div className="App">
        {user.email?(
            <div className="container">
            <h1>Welcome to Friends Zone</h1>
            <table border={5} cellPadding={20}>
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Phone</td>
                    </tr>
                    {datas.user.map((user,idx)=>{
                        return (
                            <tr key={idx}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        ):(
            <Login loginUserFn={loginUserFn} errors={alert}/>
        )}
    </div>
    );
    }

           
export default App;