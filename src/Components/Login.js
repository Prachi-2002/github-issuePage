import React, { useState } from 'react';
import "./Login.css";
import store from "store";
import { useNavigate } from "react-router-dom";
function Login() {
    let navigate = useNavigate(); 
    const routeChanges = () =>{ 
      let path = `Issues`; 
      navigate(path);
    }
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    const submitHandler = ()=>{
        console.log(username,password);
          
 store.set('userDetails' ,{username,password});
 store.set("data",{labels:[],project:[],assignee:[],author:[]});
    if(!username){
        alert("Enter Your Username");
    }
    if(!password){
        alert("Enter Your Password")
    }
    if(username && password){
    routeChanges();

    }
    }
    return (
    
            <form>
            <div className='Container m-3 '>
                <div class="row mb-3">
                    <label for="exampleFormControlInput1" class="mb-2">Username</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div class="row mb-3">
                    <label for="exampleFormControlTextarea1" class="mb-2">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button type="button" class="btn btn-primary" onClick={submitHandler}>Submit</button>
            </div>
            </form>
    
    )
}

export default Login;