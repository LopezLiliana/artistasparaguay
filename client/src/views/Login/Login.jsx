import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {email, password}, {withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log('todo ok')
            console.log(res)
           // navigate('/pirates')
        }).catch((err)=>{
            console.log(err)
        })
    }


    return (
            <div className='card-detail'>
                    <form onSubmit={submitHandler} className='col-10 offset-1 mx-auto'> 
                        <h3 className='text-center'>Login</h3>  
                        <label htmlFor="" className='form-label col-12 mx-auto'> Email</label><br/>
                        <input type="text" className='inpt col-12 mx-auto'onChange={(e)=>setEmail(e.target.value)}/><br/>
                        <label htmlFor="" className='form-label col-12 mx-auto'> Password</label><br/>
                        <input type="password" className='inpt col-12 mx-auto'onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                        <button className='btn btn-special blue'> Login</button>
                    </form>
                
            </div>
    )
}

export default Login