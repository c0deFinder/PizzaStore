import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Navigation = () => {
return (
<Navbar
expand="lg"
className="tertiary barra"
bg="warning"
variant="warning"
>
<Container className="justify-content-start">
<Navbar.Brand>PizzaFast</Navbar.Brand>
<Link
to="/"
className="text-white ms-3 text-decoration-none"
>
<img className="SliceLog" src="src\img\PizzaSliceLogo.png" alt="PizzaSlice" />
Home 
</Link>
<Link
to="/planes"
className="text-white ms-3 text-decoration-none"
>
Planes
</Link>
<Link
to="/registro"
className="text-white ms-3 text-decoration-none"
>
Registro
</Link>

<Link
to="/contacto"
className="text-white ms-3 text-decoration-none"
>
Contacto
</Link>
<Link
to="/login"
className="text-white ms-3 text-decoration-none"
>
Login
</Link>
          
</Container>
</Navbar>
);
};
export default Navigation;