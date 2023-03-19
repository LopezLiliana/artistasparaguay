import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import Image from 'react-rating';
import ReactStars from "react-rating-stars-component";

const CancionShow = (props) => {
    const [cancion, setCancion] = useState({})
    const [reviews, setReviews] = useState([])
    const [description, setDescription] = useState('')
    const [user, setUser] = useState()
    const [rate, setRate] = useState(0)
    const [value, setValue] = useState()
    const {id} = useParams()

    useEffect(()=>{
        let u = localStorage.getItem('user');
        setUser(u)
        axios.get(`http://localhost:8000/cancion/${id}`)
        .then((res)=>{
            console.log(res.data)
            setCancion(res.data)
            setReviews(res.data.reviews)
            console.log(res.data.reviews[1]._id)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    
    const ButtonSubmit = (e) => {
        e.preventDefault();
        const valores  = { review:{
            
            rate,
            description
            }
        
        }
                
        let dir = `http://localhost:8000/review/${id}`;
        axios.put(dir, valores).then((resp) => {
                    let datos = resp.data;
                    console.log(datos); 
                    window.location.reload(false);
                } )
                .catch((err) => {
                    console.log(err.message);
        });
    };

    const ratingChanged = (newRating) => {
        setRate(newRating)
    };

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    };

    return(
        <div className="panel-principal col-sm- offset-2 row">
            <div className= 'col-sm-4 offset-4'>
                    <h4>{cancion.nombre}</h4>
            </div>
            <div className="col-sm-6 center">
                <h5>Genero:   {cancion.genero}</h5>
                
            </div>
            <div className="col-sm-6 center">
                <h5>Clasificacion: {cancion.clasificacion}</h5>
            </div>
            <div className="col-sm-2 offset-5">
                <br/>
                <br/>
                <br/>
                
            </div>

            
            <div className="container row">
            <h2>Comentarios</h2>
            <div className="agregar-cancion">
                <form className="row">
                    <div>
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={36}
                            isHalf={false}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                        <textarea cols="10" rows="7" className='col-sm-8 offset-2' value={description} id='description' placeholder='Comentario' onChange={handleDescription}  />              
                        
                        <button className="btn btn-primary col-sm-2 offset-sm-2" onClick={ButtonSubmit}>Agregar</button>
                    </div>
                </form>
            </div>
            
                
                            {reviews.map((item, index) => (
                            <div className='recuadro' key={index} >
                                    {item.user ? item.user.email:'' } <br/><br/>
                                    {item.description}
                                    <ReactStars
                                        count={5}
                                        value={item.rate}
                                        size={36}
                                        edit={false}
                                        isHalf={false}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                            </div>
                            ))}
                    
                    </div>
    </div>
    );
};

export default CancionShow;