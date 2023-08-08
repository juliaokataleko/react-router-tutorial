import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
        gap: "14px",
    }}>
        <Link to="/">Home</Link>
        &nbsp;&nbsp;
        <Link to="/contacts">Contacts</Link>
    </nav>
  )
}
