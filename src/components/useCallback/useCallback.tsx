// se utiliza para memorizar una isntancia de una funcion 
// este va a guardar la instancia en lugar del resultado de la funcion (tambien hace que por ejmeplo un hijo no renderize)


//Ejemplo :
//supongamos que tienes un numero de telefono que llamas con frecuencia
// en vez de marcarlo constantemento lo almacenamos en los contacros dl telefono 
// a mwnos que el numero cambie siempre se utiiza el mismo contacto 

import { useCallback, useState } from "react";


interface Contact{
    id:number;
    name:string; // interface de contactos
    phone:string;
}

interface ContactProps{ // interface de llamada
    contact: Contact // consta de un contacto de la interface Contact
    onCall : (phone:string) => void // y un metodo al que se le pasa un phone 
}

const CallCard = ({contact, onCall}: ContactProps) => {
    console.log (`renderizando el contacto ${contact.name}`)

    return(
        <div>
        <h2>{contact.name}</h2>
        <p>telefono: {contact.phone}</p>
        <button onClick={() => {onCall(contact.phone)}} >llamar</button>
        </div>
    )
}

export const PhoneBook = () => {
    const [contacts, setContacts] = useState<Contact[]>([{
            id: 1,
            name:'javier',
            phone: "321-431-27-50" // SE crean contactos basados en interface 
        },
        {
            id: 2,
            name:'SONIA',
            phone: "321-490-27-50"
        },
        {
            id: 3,
            name:'SALOME',
            phone: "321-723-27-50"
        },
    ]);/*se tipea con la interface contact*/

    const [log,setLog] = useState<string>('')

    const makeCall = useCallback((phone:string) => setLog(`llamando a ${phone}`),[])

    const addContac = () => {
        const newContact = {
            id: contacts.length +1,
            name: `contacto numero ${contacts.length +1}`,
            phone: `${Math.floor(10000000 + Math.random()* 9000000)}`
        }

        setContacts([...contacts, newContact])
    }

    return(
        <div>
            <h2>lista de contactos</h2>
            {contacts.map(contact =>(
                <CallCard key={contact.id} contact={contact } onCall={makeCall} />
            ))}
            <button onClick={addContac}>añadir contacto</button>
            <p>{log}  </p>
        </div>
    )
}
