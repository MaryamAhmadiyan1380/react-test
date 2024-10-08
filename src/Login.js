
import 'bootstrap/dist/css/bootstrap.min.css'
import {useForm} from 'react-hook-form'
import  Axios from "axios"
import { useState} from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'


export const Login = () => {
    const schema = yup.object().shape({
        userName : yup.string().required("نام کاربری اجباری است") ,
        password : yup.string().min(4).max(10).matches(/[a-z]+/).matches(/[A-Z]+/).matches(/\d*/).required("رمز عبور اجباری است")
    })
 const {register , handleSubmit} = useForm({resolver:yupResolver(schema)})
    let navigate = useNavigate()
  const [userName , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [modalIsOpen , setModalIsOpen] = useState(false);   
    const onFormSubmit = (data) => {
        console.log("the form is submited");
        console.log(data);
        
    }
    
    
    const resultLogin = () => {
    Axios.get("https://fakestoreapi.com",{
        method:'POST',
        body:JSON.stringify({
            username:"mor_2314",
            password : "83r5^_"
        })
    })
    .then((res) => res.json()).then((json) => console.log(json))
}
//   const handleLogin=() => {
//     resultLogin()
//     const correctUserName = 'mor_2314';
//     const correctPassword = '83r5^_';

//     if(userName === correctUserName && password === correctPassword){
//         return navigate("/")
        
        
//     } else{
//       setModalIsOpen(true)
      
    
//    }
//   }
//   const handleClick = () => {
//    navigate("/")
//   }
    return (
      
        
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <h1>Login</h1>
            <input placeholder='Enter a userName' type='text'   {...register("userName")} />
            <input className='mt-2' placeholder='Enter a password'  type='password' {...register("password")} /><br />
        <button className='mt-2' type='submit' onClick={() => {navigate("/")}}  >Login</button>
        
        
            </form>
           
    )
  
}
