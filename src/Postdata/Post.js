import axios from 'axios';
import React, { useState } from 'react'



const Post = () => {
   let [state,setState]=useState({
user:{
  Email:"",
  Password:""
}
   });
   let {user}=state;
   let ChangeUpdate=(event)=>{
setState((state)=>({
  user:{
    ...state.user,
[event.target.name]:event.target.value
  }
}));
   };
   let submitLogin=async(event)=>{
event.preventDefault();
await axios.post("http://localhost:9000/users",user);
console.log(user);
   }
  return (
    <>
    <h3>{JSON.stringify(state)}</h3>
       <div className='container text-center'>
        <div className='row'>
          <div className='col-md-4 m-auto'>
            <div className='card mt-3 '>
            <div className='card-body'>
                <form onSubmit={submitLogin}>
              <h3>SigIn</h3>
              <div  className='mt-3'>
                <input 
                value={user.Email}
                name="Email"
                onChange={ChangeUpdate}
                 type="text" placeholder='Email'/>
              </div>
              <div  className='mt-3'>
                <input 
                value={user.Password}
                name="Password"
                onChange={ChangeUpdate}
                type="password" placeholder='Password'/>
              </div>
              <div className='mt-2'>
              <input type="checkbox"/>
              <label className='mx-3'> Remember Password</label><br/>
              </div>
             <button className='btn btn-sm btn-block bg-success ' type='submit '>Login</button><br/><hr/>
            <button  className=' btn btn-sm mt-3 btn-block bg-danger text-white'><i className="bi bi-google mx-3"></i>Sign in with google</button>
            <button  className=' btn btn-sm btn-block mt-3 bg-primary text-white '> <i className="bi bi-facebook mx-3"></i>Sign in with facebook</button><br/>
            <p>Don't have an account? <span>SignUp</span></p> 
            </form>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;
