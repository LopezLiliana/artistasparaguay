import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

    const [nombre,setNombre] = useState('')
    const [apellido,setApellido] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');
    


    const navigate = useNavigate()
    
    const handleNombre = (e) => {
        setNombre(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setErrorFirstName("El nombre tiene que tener al menos 2 caracteres");
        } else {
            setErrorFirstName('');
        }
    }

    const handleApellido= (e) => {
        setApellido(e.target.value);
        if(e.target.value.length < 2  && e.target.value.length > 0) {
            setErrorLastName("El apellido tiene que tener al menos 2 caracteres");
        } else {
            setErrorLastName('');
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5  && e.target.value.length > 0) {
            setErrorEmail("El email debe tener al menos 5 caracteres");
        } else {
            setErrorEmail('');
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value );
        if(e.target.value.length < 8  && e.target.value.length > 0) {
            setErrorPassword("La contraseña debe tener al menos 8 caracteres");
        } else {
            setErrorPassword('');
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value !== password && e.target.value.length > 0)  {
            setErrorConfirmPassword("Las contraseñas no coinciden");
        } else {
            setErrorConfirmPassword('');
        }
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/signup', {
            nombre, apellido, email, password
        }, {withCredentials:false})
        .then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }
return (
    <div className='card-detail'>
        
            <form onSubmit={submitHandler} className='col-10 offset-1 mx-auto'>
                <h3 className='text-center'>Register</h3>  
                <label htmlFor=""  className='form-label mx-auto'>Nombre:</label><br/>
                <input type="text" className='inpt col-12 mx-auto' onChange={handleNombre}/><br/>
                {
                    errorFirstName ?
                    <p style={{color:'red'}}>{ errorFirstName }</p> :
                        ''
                }
                <label htmlFor=""  className='form-label col-12 mx-auto'>Apellido:</label><br/>
                <input type="text" className='inpt col-12 mx-auto' onChange={handleApellido}/><br/>
                {
                        errorLastName ?
                        <p style={{color:'red'}}>{ errorLastName }</p> :
                        ''
                    }
                <label htmlFor="" className='form-label col-12 mx-auto'>Email:</label><br/>
                <input type="text" placeholder='algo@mail.com' className='inpt col-12 mx-auto'onChange={handleEmail}/>   <br/>
                {
                        errorEmail ?
                        <p style={{color:'red'}}>{ errorEmail }</p> :
                        ''
                    }
                <label htmlFor="" className='form-label col-12 mx-auto'> Password</label><br/>
                <input type="password" className='inpt col-12 mx-auto'onChange={handlePassword}/><br/>
                {
                        errorPassword ?
                        <p style={{color:'red'}}>{ errorPassword }</p>:
                        ''
                    } 
                <label htmlFor="" className='form-label col-12 mx-auto'> Confirm Password</label><br/>
                <input type="password" className='inpt col-12 mx-auto'onChange={handleConfirmPassword}/><br/><br/>
                {
                        errorConfirmPassword ?
                        <p style={{color:'red'}}>{ errorConfirmPassword }</p>:
                        ''
                    } 
                <button className='btn btn-special blue'>Register</button>
            </form>

        </div>
    )
}

export default SignUp