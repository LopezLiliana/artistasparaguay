import InputText from '../../components/InputText';
import ButtonSubmit from '../../components/ButtonSubmit';
import AreaText from '../../components/AreaText';

const ArtistaForm = ({state, dispatch, action, _id}) => {
    return(
        <div className="panel-principal row">
            <form className="form-horizontal col-sm-12 row">
                <div className="col-sm-3 img-principal" >
                    {state.imageUrl ? <img src={state.imageUrl} style= {{justifySelf:'center', maxWidth:'100%'}} alt=''/> :  <img style= {{justifySelf:'center', maxWidth:'100%'}}src='empty.jpg' alt=''/>     }
                </div>
                <div className="col-sm-5">
                    <InputText min={3} max={70} necesary={true} type="text" label="Nombre" name="nombre" value={state.nombre} setValue={dispatch}/>
                    <InputText min={3} max={50} necesary={true} type="text" label="Nombre Artistico" name="nombreArtistico" value={state.nombreArtistico} setValue={dispatch}/>
                    <InputText min={3} max={25} necesary={true} type="text" label="Lugar Nacimiento" name="lugarNacimiento" value={state.lugarNacimiento} setValue={dispatch}/>
                    <InputText min={3} max={15} necesary={true} type="date" label="Fecha Nacimiento" name="fechaNacimiento" value={state.fechaNacimiento} setValue={dispatch}/>
                    <InputText min={3} necesary={false} type="text" label="Imagen Url" name="imageUrl" value={state.imageUrl} setValue={dispatch}/>
                </div>
                <div className="col-sm-4">
                    <AreaText min={3} max={100} necesary={true} type="textarea" label="Descripción" name="descripcion" value={state.descripcion} setValue={dispatch}/>
                </div>
                <div className="col-sm-2 offset-5">
                    <br/>
                    <br/>
                    <br/>
                    <ButtonSubmit name="artistas" action={action} id={_id} state={state}></ButtonSubmit>
                </div>
            </form>
        </div>
    );
};

export default ArtistaForm;