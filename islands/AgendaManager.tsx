import { FunctionComponent } from "preact";
import { Contact } from "../types.ts";
import { useState } from "preact/hooks";
import Agenda from "../components/Agenda.tsx";

const AgendaManager: FunctionComponent = () => {
    const[name, setName] = useState<string>("");
    const[email, setEmail] = useState<string>("");
    const[contacts, setContacts] = useState<Contact[]>([]);
    const addContact = (contact:Contact, contacts: Contact[])=>{
        setContacts([...contacts,contact]);
    }
    return(
        <>
        <div class="main-container">
            
            
            
            <div class="add-contact-container">
            <h1>Contactos</h1>
            <Agenda contacts={contacts} />
                <h2>Añadir Contacto</h2>
                <form method="post">
                    <label for="name">Nombre:</label>
                    <input type="text" name="name" id="name" value={name}
                    onInput={(e) =>{
                        setName(e.currentTarget.value);
                    }}/>

                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" value={email}
                    onInput={(e) =>{
                        setEmail(e.currentTarget.value);
                    }}/>

                </form>
                <button onClick={()=> addContact({name,email},contacts)}>Añadir</button>
            </div>
            </div>
        </>
    )
}
export default AgendaManager;