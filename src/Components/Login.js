import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const logout = () => {
	localStorage.removeItem('user');
};

const Login =()=>{
    const [email ,setemail]= useState('');
    const [password ,setpassword]= useState('');
    const navigate = useNavigate();

    useEffect (()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate ('/dashboard'); 
        }
    })
    const handlelogin = async ()  => {
        console.log(email, password)
        let result = await fetch('http://localhost:5001/login',{
            method: 'post',
            body: JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            },
        });

        
        result = await result.json()
        console.log(result);
        if(result.name){
            localStorage.setItem('user',JSON.stringify(result));
            navigate ('/dashboard')
        }else{
            alert("please insert valid email or password");
        }
    }
    return(
        <div className="container">
        <div className="text-center mt-5 p-5 border border-dark">
            <form className="">
            <h4 className="text-sm ">Login Page</h4>

                <div className="row m-0 ">
                    <div className="col-4 offset-4 form-group">
                        <input  onChange={(e)=>setemail(e.target.value)} value={email}
                         type="email" className="my-2 form-control" placeholder="Enter Email" ></input> <br />
                        <input onChange={(e)=>setpassword(e.target.value)} value={password}
                         type="password" className="my-2 form-control" placeholder="Enter Password"></input><br />
                        <button onClick={handlelogin} type="button" className="btn btn-success mt-3">Login</button>
                    </div>

                </div>
            </form>
            {/* <button onClickCapture={logout}>logout user</button> */}
        </div>
        </div>
    )
}

export default Login;