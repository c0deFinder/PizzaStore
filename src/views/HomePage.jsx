import { Container } from "react-bootstrap";


const HomePage = () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Bienvenido a <span id="PizzaTittle" className="fw-bold">PiazzaFast</span> 
        <div>
          <img className="logo" src="src\img\pizzaFast.png" alt="PizzaFast" />
        </div>
      </h1>
      <h6> La mejor pizza </h6>
    </Container>
  );
};
export default HomePage;
