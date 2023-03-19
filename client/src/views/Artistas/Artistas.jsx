
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Artistas = (props) => {
    
    const [lista, setLista] = useState([])
    const [user, setUser] = useState()

    useEffect(()=>{
        let u = localStorage.getItem('user');
        setUser(u)
        axios.get('http://localhost:8000/artistas')
        .then((res)=>{
            console.log(res)
            setLista(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return(
            <div>
                <h2>Artistas</h2>
                <div className=" cards">
                {lista.map((item, index) => (
                    <div key={index} className="card" >
                        {item.imageUrl ? <img src={item.imageUrl} className="card-img-top" alt=''/> :  <img className="card-img-top" src='empty.jpg' alt=''/>     }
                        <div className="card-body">
                            <h5 className="card-title">{item.nombreArtistico}</h5>
                            <p className="card-text">{item.descripcion}</p>
                        </div>
                        <Link className="btn btn-primary card-btn" to={`./${item._id}`} >Repertorio </Link>
                        <br/>
                    </div>
                ))}  
                </div> 
            </div>
        );
};
export default Artistas;



