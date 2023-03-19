import React, { useReducer, useState } from  'react';
import CancionForm from './CancionesForm';

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
    audioUrl: '',  
    genero: '',
    lugarNacimiento:  '',
    clasificacion: '',
    autorId:  ''
}  


const CancionCreate = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return(
        <div className='container'>
            <CancionForm state={state} dispatch={dispatch} action="create"/>
        </div>
    );
};
    
export default CancionCreate;