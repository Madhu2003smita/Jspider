import React, {useState} from 'react'
import '../../Styles/AdminSignup.css'
import axios from 'axios'
export default function AdminSignup() {
    let [admin,setAdmin]=useState({
        username : " ",
        email : " ",
        password : " ",
        phone : " "
    })
    let handleChange = (e) =>{
        let {name,value} => e.target;
        setAdmin((prevState)=>({
            ...prevState,
            [name]:value
        }));
    }
    console.log(admin);
    function addAdmin(){
        axios.post()
        .then((res)=>{
            console.log(res);
            alert("Admin Register success");
        })
        .catch((err)=>{
            console.log(err);
            alert("Not Registered")
            
        })
    }
    
  return (
    <div className='adminsignup'>
        <form action="">
            <label htmlFor=""></label>
        </form>
      
    </div>
  )
}
