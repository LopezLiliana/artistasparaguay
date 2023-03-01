
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Artistas = (props) => {
    
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
        <div className=" cards row">
            <h2>Artistas</h2>
            {lista.map((item, index) => (
                <div className="card col-lg-3" >
                    
                    {item.imageUrl ? <img src={item.imageUrl} class="card-img-top" alt=''/> :  <img class="card-img-top" src='empty.jpg' alt=''/>     }
                    <div class="card-body">
                        <h5 class="card-title">{item.nombreArtistico}</h5>
                        <p class="card-text">{item.descripcion}</p>
                        <Link className="btn btn-primary" to={`./${item._id}`} >Reportorio </Link>
                    </div>
                </div>
    ))}   
        </div>
    );
};
export default Artistas;



