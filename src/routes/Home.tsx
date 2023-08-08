import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="App">        
        <h2>Home</h2>
        <Link to="/contacts">Contacts</Link>
    </div>
  )
}
