import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Borrar from '../../components/Borrar';


const ArtistaShow = (props) => {
    const [artista, setArtista] = useState({})
    const [canciones, setCanciones] = useState([]);
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8000/artista/${id}`)
        .then((res)=>{
            console.log(res.data.canciones[1].cancion.nombre)
            setCanciones(res.data.canciones);
            console.log(res.data.canciones[0])
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
            <div className="container row">
            <h2>Canciones</h2>
            <table className="table table-striped" style={{backgroundColor:'white'}}>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Genero</th>
                        <th scope="col">Clasificacion</th>
                        <th scope="col">Mostrar</th>
                        
                        <th scope="col">Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {canciones.map((item, index) => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.cancion.nombre}</td>
                            <td>{item.cancion.genero}</td>
                            <td>{item.cancion.clasificacion}</td>
                            <td><li key={index}> 
                                <Link to={`/canciones/${item.cancion._id}`} >Mostrar </Link>
                                </li>
                            </td>
                            <td>
                                <li key={index}> 
                                    <Borrar clase=' ' name="cancion" id={item.cancion._id}/>
                                </li>
                            </td>
                        </tr>
                        ))}
                        </tbody>
                </table>
        </div>
    </div>
    );
};

export default ArtistaShow;