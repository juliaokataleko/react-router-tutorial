import { useNavigate, useParams } from "react-router-dom"

export default function ContactDetails() {

    const {id} = useParams()
    const navigate = useNavigate()

    const handleContact = () => {
        console.log("Contacto enviado");
        return navigate("/")
        
    }

    return (
        <div>
            <h2>Exibindo informacoes do contacto {id}</h2>
            <button onClick={handleContact}>
                Enviar
            </button>
        </div>
    )

}
