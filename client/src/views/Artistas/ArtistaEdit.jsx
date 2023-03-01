import InputText from '../../components/InputText';
import { useEffect, useReducer, useState } from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtistaForm from './ArtistaForm';
import { now } from 'mongoose';


function reducer(state, action) {
    if (action=="ALL")  {
        return{
            state
        }
    
    
    }else {
        return {
            ...state,
            [action.type]: action.payload
        };
    }
}

const current = new Date('2022-10-05');
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;



const initialState = {
    _id:'',
    nombre: '',
    imageUrl: '',  
    nombreArtistico: '',
    lugarNacimiento:  '',
    descripcion: '',
    fechaNacimiento: current
}  


    
const ArtistaEdit = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const {id}=useParams()
    useEffect(()=>{
        console.log("buscando")
            axios.get(`http://localhost:8000/artista/${id}`)
            .then((res)=>{
                let datos = res.data
                console.log(res.data)
                console.log(state)
                dispatch({type:'_id', payload:datos._id})
                dispatch({type:'nombre', payload:datos.nombre})
                dispatch({type:'imageUrl', payload:datos.imageUrl})
                dispatch({type:'nombreArtistico', payload:datos.nombreArtistico})
                dispatch({type:'descripcion', payload:datos.descripcion})
                dispatch({type:'fechaNacimiento', payload:(datos.fechaNacimiento )})
 }).catch((err)=>{
                console.log("error " + err)
            })
        
    }, [])

    return(
        <div className='container'>
            <ArtistaForm state={state} dispatch={dispatch}  action="edit" _id={state._id}/>
        </div>
    );
};

export default ArtistaEdit;