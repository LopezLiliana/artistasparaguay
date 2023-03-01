import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';


const ButtonSubmit = (props) => {
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.action == "create") {
            let dir = `http://localhost:8000/${props.name}/create`;
            axios.post(dir, props.state).then((resp) => {
                        let datos = resp.data;
                        console.log(datos); 
                        window.location.reload(false);
                        
                    } )
                    .catch((err) => {
                        console.log(err.message);
                        
            });
        }else if  (props.action == "edit") {
            let dir = `http://localhost:8000/${props.name}/edit/${props.id}`;
            axios.put(dir, props.state).then((resp) => {
                        let datos = resp.data;
                        console.log(datos); 
                        navigate("/artistas/todos")
                    } )
                    .catch((err) => {
                        console.log(err.message);
                    });
        };
    }
    return(
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>{props.action}</button>
    );
};

export default ButtonSubmit