import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Registro1() {
  return (
    <>
    <Container className='contenedor'>
       
    <div id='box2'>
    <h2>Registro</h2>
      <InputGroup  className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Nombre de Usuario"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Correo"
          aria-label="Correo"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text id="basic-addon2">@ejemplo.com</InputGroup.Text>
      </InputGroup>
         <Form.Label htmlFor="basic-url"><p className='text0'>Introdusca una clave de 8 a 12 caracteres con caracteres alfanumericos</p></Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          Contraseña
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <p className='text0'>Repita la Contraseña</p>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button variant="primary">Registrar</Button>{' '}
      </div>  
    </Container>
    </>
  );
}

export default Registro1;