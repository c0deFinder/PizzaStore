import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Form';

function BasicExample() {
  return (
    <Container className='box'>  
    <h1 className='tittle'>Cuentanos,¿en que podemos ayudarte? </h1>
      <Form.Group id='inputCorreo' className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo Electronico</Form.Label>
        <Form.Control type="email" placeholder="Correo" />
        <Form.Text className="text-muted">
        Nunca compartiremos su correo electrónico con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Descripción</Form.Label>
        <Form.Control className='inputText' type="text" placeholder="Mensaje" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Container>
    
  );
}

export default BasicExample;