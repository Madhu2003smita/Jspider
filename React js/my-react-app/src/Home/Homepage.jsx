import React,{useState} from 'react';
import { useEffect } from 'react';

export default function Homepage() {
    let [user,setUser]=useState([]);
    useEffect(()=>{
        async function getInfo(){
            let res = await fetch ("http://localhost:2000/users");
            let data =  await res.json();
            setUser(data);
        }
        getInfo();
    },[])
    console.log(users);
    
  return (
    <div className='Homepage'>
        {users.map((user)=>{
            return(
                <React.Fragment key ={user.id}>
                    <div className='user'>
                        <div className='logo'>
                            <img src="user.image" alt="" />
                        </div>
                        <div className='desc'>
                        <span>Name : <big><strong>{user.firstName}</strong></big></span>
                                    <div>Identity : <strong>{user.gender} {user.age}</strong></div></div>
                                    <div>Address : {user.address.address} {user.address.city} {user.address.postalCode} </div>
                                    <div>Phone : {user.phone}</div>
                        </div>
                    
                </React.Fragment>
            )
        })}
      
    </div>
  )
}
