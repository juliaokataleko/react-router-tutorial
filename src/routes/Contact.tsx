import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="App">        
        <h1>Contacts</h1>
        <p>
            <Link to="/contact/1">Forma de contacto 1</Link>
        </p>
        <p>
            <Link to="/contact/2">Forma de contacto 2</Link>
        </p>
        <p>
            <Link to="/contact/3">Forma de contacto 3</Link>
        </p>
        <p>
            <Link to="/contact/4">Forma de contacto 4</Link>
        </p>
        <p>
            <Link to="/contact/5">Forma de contacto 5</Link>
        </p>
    </div>
    )
}
