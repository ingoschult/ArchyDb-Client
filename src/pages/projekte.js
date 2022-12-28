import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';

class Projekte extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      land: '',
      gemarkung: '',
      leitung: '',
      finder: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    alert("Land: '" + this.state.land + "'");
    event.preventDefault();
  }

  handleReset(event) {
    this.setState({
      land: '',
      gemarkung: '',
      leitung:'',
      finder: ''
    });
    event.preventDefault();
  }

  render() {
    return (
      <Container>

        <h1>Projekt erfassen</h1>

        <Alert variant='success'>
          <p>
            Über die spätere Zuordnung des Projekts zu einem Fund wird der Ort des Fundes definert.
          </p>
          <hr />
          <p className='mb-0'>
            Einem Projekt können mehrere Funde zugeordnet werden.
          </p>
        </Alert>

        <Form>

          <Form.Group className="mb-3">
            <Form.Label>Land</Form.Label>
            <Form.Control type="text" placeholder="Land" name="land" value={this.state.land} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gemarkung</Form.Label>
            <Form.Control type="text" placeholder="Gemarkung" name="gemarkung" value={this.state.gemarkung} onChange={this.handleChange} />
          </Form.Group>

          <Stack direction="horizontal" gap={4}>
            <Button className="form_button" variant="primary" type="button" onClick={this.handleClick}>
              Übernehmen
            </Button>

            <Button className='form_button' variant='secondary' type="button>" onClick={this.handleReset}>
              Zurücksetzen
            </Button>

          </Stack>
        </Form>
      </Container >
    );
  }
}

export default Projekte;