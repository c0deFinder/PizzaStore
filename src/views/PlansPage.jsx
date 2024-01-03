import { Container } from "react-bootstrap";

import Planes from "../components/Plans";

const PlansPage = () => {
  return (
    <Container className="pt-5">
      <h1 id="tittle2" className="mb-4">Tenemos pizzas especiales para ti</h1>
      <Planes />
    </Container>
  );
};
export default PlansPage;
