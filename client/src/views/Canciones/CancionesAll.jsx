import InputText from '../../components/InputText';
import { useState, useEffect } from 'react';
import ButtonSubmit from '../../components/ButtonSubmit';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Borrar from '../../components/Borrar';


const ArtistaAll = (props) => {

    const [lista, setLista] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/artistas')
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return(
        <div className="container row">
            <h2>Artistas</h2>
            <table className="table table-striped" style={{backgroundColor:'white'}}>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nombre Artistico</th>
                        <th scope="col">Fecha Nacimiento</th>
                        <th scope="col">Mostrar</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lista.map((item, index) => (
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.nombre}</td>
                            <td>{item.nombreArtistico}</td>
                            <td>{item.fechaNacimiento}</td>
                            <td><li key={index}> 
                                <Link to={`/artistas/${item._id}`} >Mostrar </Link>
                                
                                </li>
                            </td>
                            <td><li key={index}> 
                                <Link to={`/artistas/${item._id}/edit`} >Editar </Link>
                                </li>
                            </td>
                            <td>
                                <li key={index}> 
                                    <Borrar clase=' ' name="artista" id={item._id}/>
                                </li>
                            </td>
                        </tr>
                ))}
                </tbody>
                </table>
        <br/>
        <br/>
        <div className="col-sm-2 offset-5">
            <a className="btn btn-primary" href="/artistas/new">Nuevo</a>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
    );
};

export default ArtistaAll;