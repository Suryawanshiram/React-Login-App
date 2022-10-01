import React ,{useState} from "react";

const Login=({loginUserFn,errors})=>{
    const [details,setDetails]=useState({email:"",password:""})

    const handleSubmit=(e)=>{
        e.preventDefault();
        loginUserFn(details)
    }
return(
    <div className="login">
        {/* <p>{errors.errors}</p> */}
        <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h1>Welcome to our page</h1>
            <h2>Login Form</h2>
            <br />
            <br/>
            <label>Enter username or email:</label>
            <br/>
            <br/>
            <input
            type="text"
            name="email"
            id="email"
            onChange={(e)=>setDetails({...details,email:e.target.value})}
            />{""}
            <br/>
        </div>
           
           <div className="form-group">
            <label>Enter your password:</label>
            <br/>
            <br/>
            <input 
            type="password"
            id="password"
            onChange={(e)=>
            setDetails({...details,password: e.target.value})
            }
            name="password"
            />{""}
            <br/>
            <br/>
           </div>
           <div className="form-group">
           <br/>
           <br/>
           <button onClick={handleSubmit} value="Login">
            Login
           </button>
           </div>

            
        </form>
    </div>
   
)
}


export default Login;