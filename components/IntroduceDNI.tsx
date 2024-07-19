

const IntroduceDNI = () =>{
    return(
    <div class="main-container">
        <div class="dni-input-container">
            <label for="dni">Introduce tu DNI:</label>
            <input placeholder="12345678A" type="text" id="dni">
            <a href="/contactos">Ir a mi agenda</a>
            </input>
        </div>
    </div>
);
}
export default IntroduceDNI;

/*import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const[dni,setDni] = useState<string>("");
const[error, setError] = useState<string>("");

const validateDni= async (dni: string)=>{
    if(!dni || dni.length===9){
        setError("El DNI debe tener 9 caracteres");
        return;
    }
    setDni(dni)
}

const IntroduceDNI:FunctionComponent = () =>{
    return(
    <div class="main-container">
        <div class="dni-input-container">
            <label for="dni">Introduce tu DNI:</label>
            <input placeholder="12345678A" type="text" id="dni" value={dni}
            onInput={(e) =>{
                setError("");
                setDni(e.currentTarget.value);
            }}/>
            <button>Ir a mi agenda</button>
            {error && <p class="error">{error}</p>}
            
        </div>
    </div>
);
}
export default IntroduceDNI;
*/