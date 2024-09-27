import { InputGroup, Form } from "react-bootstrap";


const InputRespuesta = ({ name, activate, nameRadio, onChangeTwo, onChange, inputRef, rules, ...props }) => {
    
    return (
        <>
            <InputGroup>
                <Form.Control
                    required={rules}
                    onChange={onChange}
                    ref={inputRef}//pasa la referencia correcta
                    {...props}
                    aria-label="Text input with radio button" />
                <InputGroup.Radio
                    disabled={activate}
                    required={true}
                    name={nameRadio}
                    onChange={onChangeTwo}
                    aria-label="Radio button for following text input" />
            </InputGroup>
        </>
    );
}

export default InputRespuesta;