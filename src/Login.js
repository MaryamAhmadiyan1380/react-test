
import 'bootstrap/dist/css/bootstrap.min.css'
import {useForm} from 'react-hook-form'
import  Axios from "axios"
import {useReducer , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Modal } from 'react-bootstrap'
import { Home } from './Pages/Hom'


export const Login = (props) => {
 const {register , handleSubmit} = useForm()
 let navigate = useNavigate()
  // const [userName , setUserName] = useState("");
  // const [password , setPassword] = useState("");
  // const [modalIsOpen , setModalIsOpen] = useState(false);   
    const onFormSubmit = (data) => {
        console.log("the form is submited");
        console.log(data);
        
    }
    
    
    const resultLogin = () => {
    Axios.get("https://fakestoreapi.com/auth/login",{
        method:'POST',
        body:JSON.stringify({
            username:"mor_2314",
            password : "83r5^_"
        })
    })
    .then(res => res.json()).then(json => console.log(json))
}
  // const handleLogin=() => {
  //   const correctUserName = 'mor_2314';
  //   const correctPassword = '83r5^_';

  //   if(userName === correctUserName && password === correctPassword){
  //       return <Home/>
        
        
  //   } else{
  //     setModalIsOpen(true)
    
  // }
  // const handleClick = () => {
  //   navigate("/");
  // }
    return (
      
        
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <h1>Login</h1>
            <input placeholder='Enter a userName' type='text'   {...register("userName")} />
            <input className='mt-2' placeholder='Enter a password'  type='password'  {...register("userName")}{...register("password")} /><br />
        <button className='mt-2' type='submit' onClick={() => {navigate("/")}} >Login</button>
        
        
            </form>
           
    )
  }