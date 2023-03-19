import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Borrar from '../../components/Borrar';


const ArtistaCanciones = (props) => {
    const [artista, setArtista] = useState({})
    const [canciones, setCanciones] = useState([]);
    const [newCanciones, setNewCanciones] = useState([]);
    const [elecCancion, setElecCancion] = useState();

    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:8000/artista/${id}`)
        .then((res)=>{
            
            setCanciones(res.data.canciones);
            console.log(canciones)
            setArtista(res.data);
        }).catch((err)=>{
            console.log(err)
        })
        console.log("buscando")
            axios.get(`http://localhost:8000/canciones`)
            .then((res)=>{
                console.log(res.data)
                setNewCanciones(res.data);
                
        }).catch((err)=>{
                    console.log("error " + err)
                })
    }, [])  

        const deleteHandler  =(e) => {
            
            
                e.preventDefault();
                let valor = e.target.value;
                const valores = {
                    "cancion":valor
                };
                console.log(valores);
                let dir = `http://localhost:8000/artista_canciones/${id}`;
                axios.delete(dir, valores).then((resp) => {
                            let datos = resp.data;
                            console.log(datos); 
                            window.location.reload(false);
                        } )
                        .catch((err) => {
                            console.log(err.message);
                });
            
        };

        const ButtonSubmit = (e) => {
            e.preventDefault();
            const valores  = {canciones: {
                cancion:elecCancion
                }
            }
            
            
            
            let dir = `http://localhost:8000/artista_canciones/${id}`;
            axios.put(dir, valores).then((resp) => {
                        let datos = resp.data;
                        console.log(datos); 
                        window.location.reload(false);
                    } )
                    .catch((err) => {
                        console.log(err.message);
            });
        };

    const cambiar = (codigo) => {
        setElecCancion(codigo);
    }

    return(
        <div className='panel-principal'>
        <div className="col-sm-12 row">
            
            <div className="col-sm-3" >
                {artista.imageUrl ? <img src={artista.imageUrl} style= {{justifySelf:'center', width:'100%', maxHeight:'15rem', overflow:'hidden'}} alt=''/> :  <img style= {{justifySelf:'center', maxWidth:'100%'}}src='empty.jpg' alt=''/>     }
            </div>
            <div className="col-sm-5">
                <h3>{artista.nombreArtistico}</h3>
                <span><h5><label>Nombre:</label> {artista.nombre}</h5></span>
                <h6>Lugar Nacimiento:</h6> {artista.lugarNacimiento}
                <h6>Fecha Nacimiento:</h6> {artista.fechaNacimiento}
            </div>
            <div className="col-sm-4">
                <h6>{artista.descripcion}</h6>
            </div>
            <div className="container row">
            <h2>Canciones</h2>
            <div className="agregar-cancion">
            <form className="row">
                <span className='row'>
                    <select name='cancion' className='col-sm-8  control-label' value={newCanciones._id} onChange = {(e) => (cambiar(e.target.value))} >
                        {newCanciones.map((cate, idx) => 
                            <option key={idx} value={cate._id}>{cate.nombre}</option>
                        )}
                    </select>
                <button className="btn btn-primary col-sm-2 offset-sm-2" onClick={ButtonSubmit}>Agregar</button>
                </span>
            </form>
            </div>
            { canciones.length > 0 ?
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
                            <tr key={index}>
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
                                        <a href="" value={item.cancion._id} onClick={deleteHandler}>Borrar</a>
                                    </li>
                                </td>
                            </tr>
                            ))}
                            </tbody>
                    </table>
                    :''}
            </div>
        </div>
    </div>
    );
};

export default ArtistaCanciones;