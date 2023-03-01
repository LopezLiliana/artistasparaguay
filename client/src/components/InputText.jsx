import Validador from './Validador';


const InputText = (props) => {
    
    return(
        <span className="row">
            <label htmlFor={props.name} className='col-sm-4 control-label' >{props.label}</label>
            <input type={props.type} className='col-sm-8 control-label' value={props.value} id='description' onChange={(e)=>(props.setValue({type: props.name, payload: e.target.value}))} />
            <Validador max={props.max} min={props.min} necesary={props.necesary} value={props.value}/>
        </span>
    );
};
    
export default InputText;