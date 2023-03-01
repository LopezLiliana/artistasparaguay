import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Borrar = ( props ) => {
    
    const navigate = useNavigate()
    const deleteHandler  =() => {
        const url= `http://localhost:8000/${props.name}/delete/${props.id}`;
        axios.delete(url)
        .then((res)=>{
            navigate('/artistas/todos')
        }).catch((err)=>{
            console.log(err)
        })
        window.location.reload();
    }
    
    return (
        <>
        { props.clase ? 
        <a href='' className={props.clase} onClick={deleteHandler}>Delete</a>
        : <div className= 'btn btn-danger btn-sm' onClick={deleteHandler}>Delete</div>}
        </>
    )
}
export default Borrar;