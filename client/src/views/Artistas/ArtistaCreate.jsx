import React, { useReducer, useState } from  'react';
import ArtistaForm from './ArtistaForm';

function reducer(state, action) {
    if (action=="ALL")  {
        return{
            state
        };
    }else {
        return {
            ...state,
            [action.type]: action.payload
        };
    }

}

const initialState = {
    nombre: '',
    imageUrl: '',  
    nombreArtistico: '',
    lugarNacimiento:  '',
    descripcion: '',
    fechaNacimiento:  ''
}  


const ArtistaCreate = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className='container'>
            <ArtistaForm state={state} dispatch={dispatch} action="create"/>
        </div>
    );
};
    
export default ArtistaCreate;