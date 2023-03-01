import { useState } from 'react';

const Validador = (props) => {
    

    return (
        <p className='validador'>
            {(props.value.length < props.min && props.value) ? 'Debe tener una mínimo de ' + props.min +' caracteres' : ''}
            {(props.value.length > props.max && props.value) ? 'Debe tener una máximo de ' + props.max +' caracteres' : ''}
        </p>
    );
};

export default Validador;