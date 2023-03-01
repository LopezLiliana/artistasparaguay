import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ArtistaShow = (props) => {
    const [artista, setArtista] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/artista/${id}`)
        .then((res)=>{
            console.log(res.data)
            setArtista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    

    return(
        <div className="recuadro col-sm-12 row">
            <div className="col-sm-3" >
                {artista.imageUrl ? <img src={artista.imageUrl} style= {{justifySelf:'center', maxWidth:'100%'}} alt=''/> :  <img style= {{justifySelf:'center', maxWidth:'100%'}}src='empty.jpg' alt=''/>     }
            </div>
            <div className="col-sm-5">
            <h3>{artista.nombreArtistico}</h3>
            <h5>Nombre: {artista.nombre}</h5>
            <h5>Lugar Nacimiento: {artista.lugarNacimiento}</h5>
            <h5>Fecha Nacimiento: {artista.fechaNacimiento}</h5>
            
            </div>
            <div className="col-sm-4">
                
                <h5>{artista.descripcion}</h5>
            </div>
            <div className="col-sm-2 offset-5">
                <br/>
                <br/>
                <br/>
                <a className="btn btn-primary" href="/artistas/new">Nuevo</a>
            </div>
    </div>
    );
};

export default ArtistaShow;