import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';

class Projekte extends React.Component {

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
    this.handleCancel = this.handleCancel.bind(this);

  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick(event) {
    alert("Land: '" + this.state.land + "'");

    event.preventDefault();
  }

  handleCancel(event) {
    //Alert("abbruch ...");
    console.log("abbruch ...");
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
            <Form.Control type="text" placeholder="Land" value={this.state.land} onChange={this.handleChange} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gemarkung</Form.Label>
            <Form.Control type="text" placeholder="Gemarkung" value={this.state.gemarkung} onChange={this.handleChange} />
          </Form.Group>

          <Stack direction="horizontal" gap={4}>
            <Button className="form_button" variant="primary" type="button" onClick={this.handleClick}>
              Übernehmen
            </Button>
            <Button className="form_button" variant="secondary" type="button" onClick={this.handleCancel}>
              Abbruch
            </Button>
          </Stack>
        </Form>
      </Container >
    );
  }
}

export default Projekte;