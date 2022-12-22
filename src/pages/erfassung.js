import React from 'react';
import Container from 'react-bootstrap/Container';

class Erfassung extends React.Component{

    constructor(props) {
      super(props);

      this.state =  {
        id: 0,
        bezeichnung: '',
        projekt: 0,
        beschreibung: '',
        nummer1: 0,
        nummer2: 0,
        nummer3: 0,
        nummer4: 0,

      };

      this.handleChanges = this.handleChanges.bind(this);
    }  

    handleChanges(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    render() {
      return (
          <div>
            <h2>Fundeingabe</h2>
            <form>
              <label htmlFor="txtBezeichnung">Bezeichnung</label>
              <input id="txtBezeichnung" type="text" name="txtBezeichnung" value={this.state.bezeichnung} onChange={this.handleChanges}/>
              <br/>

              <label htmlFor="txtProjekt">Projekt</label>
              <input id="txtProjekt" type="text" name="txtProjekt" value={this.state.projekt} onChange={this.handleChanges}/>
              <br/>

              <label htmlFor="txtNr1">Nummer 1</label>
              <input id="txtNr1" type="text" name="txtNr1" value={this.state.nummer1} onChange={this.handleChanges}/>
              <br/>

              <label htmlFor="txtNr2">Nummer 2</label>
              <input id="txtNr2" type="text" name="txtNr2" value={this.state.nummer2} onChange={this.handleChanges}/>
              <br/>

              <label htmlFor="txtNr3">Nummer 1</label>
              <input id="txtNr3" type="text" name="txtNr3" value={this.state.nummer3} onChange={this.handleChanges}/>
              <br/>

              <label htmlFor="txtNr4">Nummer 1</label>
              <input id="txtNr4" type="text" name="txtNr4" value={this.state.nummer4} onChange={this.handleChanges}/>
              <br/>

            </form>
          </div>
      );
    }

}


export default Erfassung;