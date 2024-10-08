import Axios from 'axios'
import { useForm } from 'react-hook-form'
export const User = () => {
    const [register , handleSubmit] = useForm()
    const onFormSubmit = (data) => {
        console.log("submited form");
        console.log(data);
        
    }
    const userListApi = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json()).then((json) => console.log(json))

    }
    return(
        
       
        <form onSubmit={handleSubmit(onFormSubmit)}>
            <input type='text' placeholder='enter your name' {...register("name")} />
            <input type='text' placeholder='enter username' {...register("username")} />
            <input type='email' placeholder='enter your email' {...register("email")} />
            <input type='number' placeholder='enter your phone' {...register("phonenumber")} />
            <input type='submit' placeholder='ediet' />
            <input type='submit' placeholder='delete' />
        </form>
        )
        
    
}