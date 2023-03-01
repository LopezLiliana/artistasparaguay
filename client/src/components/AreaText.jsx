import Validador from './Validador';


const AreaText = (props) => {
    
    return(
        <div className="row">
            
            <textarea cols="10" rows="7" type={props.type} className='col-sm-8 offset-2' value={props.value} id='description' placeholder={props.label} onChange={(e)=>(props.setValue({type: props.name, payload: e.target.value}))} />
            <Validador max={props.max} min={props.min} necesary={props.necesary} value={props.value}/>
        </div>
    );
};
    
export default AreaText;