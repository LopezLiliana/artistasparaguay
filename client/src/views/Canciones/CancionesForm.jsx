import InputText from '../../components/InputText';
import ButtonSubmit from '../../components/ButtonSubmit';
import { useState , useEffect} from 'react';
import axios from 'axios';
import Validador from '../../components/Validador';

const CancionForm = ({state, dispatch, action, _id}) => {
    const [artistas, setArtistas] = useState([]);

    useEffect(()=>{
        console.log("buscando")
            axios.get(`http://localhost:8000/artistas`)
            .then((res)=>{
                setArtistas(res.data);
                
    }).catch((err)=>{
                console.log("error " + err)
            })
        
    }, [])

    return(
        <div className="row panel-principal">
            <form className="form-horizontal col-sm-12 row">
                
                <div className="col-sm-5">
                    <InputText min={3} max={70} necesary={true} type="text" label="Nombre" name="nombre" value={state.nombre} setValue={dispatch}/>
                    <InputText min={3} max={50} necesary={true} type="text" label="Genero" name="genero" value={state.genero} setValue={dispatch}/>
                    <spam className='row'>
                        <label htmlFor='autor' className='col-sm-4 control-label' >Autor</label>
                        <select name='autor' className='col-sm-8  control-label' value={state.autorId} onChange={(e)=>(dispatch({type: 'autorId', payload: e.target.value}))} >
                            {artistas.map((cate, idx) => 
                                <option key={idx} value={cate._id}>{cate.nombre}</option>
                            )}
                        </select>
                        <Validador necesary={true} value={state.autorId}/>
                    </spam>
                    <InputText min={3} necesary={false} type="text" label="Audio Url" name="audioUrl" value={state.audioUrl} setValue={dispatch}/>
                </div>
                <div className="col-sm-4">
                    <InputText min={3} max={25} necesary={true} type="textarea" label="Clasificacion" name="clasificacion" value={state.clasificacion} setValue={dispatch}/>
                </div>
                <div className="col-sm-2 offset-5">
                    <br/>
                    <br/>
                    <br/>
                    <ButtonSubmit name="canciones" action={action} id={_id} state={state}></ButtonSubmit>
                </div>
            </form>
        </div>
    );
};

export default CancionForm;