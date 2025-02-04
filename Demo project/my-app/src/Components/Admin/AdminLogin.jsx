import React, { useState } from 'react'
import admin from '../../Assets/admin.jpeg'
import { Link } from 'react-router-dom'
import '../../Styles/AdminLogin.css'
import {toast, ToastContainer} from "react-toast"


export default function AdminLogin() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");
  console.log(username,password);

  function login(){
    if (username=="abcd" && password=="1234"){
      //toast.success("Login Successful")
      alert("Login Successful")
    }
  
  else{
    //toast.error("Login Failed")
    alert("Login Failed")
  }
}
    return (
    <div className='AdminLogin'>
      <aside className='admin_sideImage'>
      <img src={admin} alt="" />
      </aside>
      <aside className='admin_form'>
        <form  action="">
          <label htmlFor="">Username : </label>
          <input  required value = {username}
          onChange ={(e) =>{setUsername(e.target.value)}}type="text" placeholder='Enter the username' />
          <label htmlFor="">Password : </label>
          <input  required value = {password}
          onChange ={(e) =>{setPassword(e.target.value)}}type="text" placeholder='Enter the password' />
          <button onClick={login}>Login</button>
          <ToastContainer/>
          <span>Register as Admin <link to = '/adminsignup'>Sign up</link></span>
        </form>
      </aside>
    </div>
  )
}
