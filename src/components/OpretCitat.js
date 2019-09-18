import React, { Component } from 'react';

class OpretCitat extends Component {
    state = {
        titel: null,
        citattekst: null,
        forfatter: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCitatProp(this.state);
        this.setState({
            titel: '',
            citattekst: '',
            forfatter: ''
        });
    }

    render() {
      return (
        <div className="Citater">
        <h1>Opret Citat</h1>
          <form onSubmit={this.handleSubmit}>
              <input type="text" id="titel" placeholder="Titel her" onChange={this.handleChange} value={this.titel}/>
              <br/>
              <input type="text" id="citattekst" placeholder="Citattekst her" onChange={this.handleChange} value={this.citattekst}/>
              <br/>
              <input type="text" id="forfatter" placeholder="Forfatter her" onChange={this.handleChange} value={this.forfatter}/>
              <br/>
              <button>Submit</button>
          </form>
        </div>
      );
    }
}
 
export default OpretCitat;