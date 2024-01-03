import { Accordion } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';


const Plans = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="header1">MARGARITA</Accordion.Header>
        <Accordion.Body className="DropPrices">
        Salsa exclusiva Pizza Hut, queso mozzarella
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tamaño/Precio
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S - 6$</Dropdown.Item>
        <Dropdown.Item href="#/action-2">L - 10$</Dropdown.Item>
        <Dropdown.Item href="#/action-3">XL - 14$</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>SUPER SUPREMA</Accordion.Header>
        <Accordion.Body className="DropPrices">
        Salsa exclusiva Pizza Hut, queso mozzarella, Pepperoni, Topping de res, Topping de cerdo, Pimentones, Cebolla, Champiñones y aceitunas negras.
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tamaño/Precio
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S - 8$</Dropdown.Item>
        <Dropdown.Item href="#/action-2">L - 14$</Dropdown.Item>
        <Dropdown.Item href="#/action-3">XL - 18$</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>VEGETARIANA</Accordion.Header>
        <Accordion.Body className="DropPrices">
        Salsa exclusiva Pizza Hut, queso mozzarella, Pimentones, Cebolla, Champiñones, tomates y aceitunas negras.
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tamaño/Precio
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">S - 6$</Dropdown.Item>
        <Dropdown.Item href="#/action-2">L - 8$</Dropdown.Item>
        <Dropdown.Item href="#/action-3">XL - 10$</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
export default Plans;
