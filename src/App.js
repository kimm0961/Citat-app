import React, { Component } from 'react';
import CitatListe from './components/CitatListe';
import OpretCitat from './components/OpretCitat';


class App extends Component {
  state = { 
    citater: [
      {titel: 'Trust', citattekst: 'Den eneste måde at finde ud af, om en person er til at stole på, er at stole på ham.', forfatter: 'Ernest Hemingway', id: 1},
      {titel: 'Real Friends', citattekst: 'Gode venner kan lave alting sammen – men kun de bedste venner er i stand til at lave ingenting sammen.', forfatter: 'Peter Plys', id: 2},
      {titel: 'Do Not Worry', citattekst: 'Jeg har haft tusinder af bekymringer, de færreste er blevet til noget.', forfatter: 'Mark Twain', id: 3},
      {titel: 'Be hayppy Not Angry', citattekst: 'Husk, at for hvert minut du er vred, mister du tres sekunders lykke.', forfatter: 'Ralph Waldo Emerson', id: 4},
      {titel: 'Self Love', citattekst: 'Vær dig selv, alle andre er alligevel optaget.', forfatter: 'Oscar Wilde', id: 5}
    ]
   }

   // Opret citat
   addCitat = (newCitat) => {
    newCitat.id = Math.random();
    let newCitaterAdded = [...this.state.citater, newCitat];
    this.setState({
      citater: newCitaterAdded
    });
  }

   // Slet citat
   deleteCitat = (id) => {
     let newCitater = this.state.citater.filter(citat => {
       return citat.id !== id
     });

     this.setState({
       citater: newCitater
     });
   }

  
  render() { 
    return ( 
      <div className="citat-app container">
        <h1 className="center blue-text">Citater</h1>
        <OpretCitat addCitatProp={this.addCitat}/>
        <CitatListe alleCitaterProp={this.state.citater} deleteCitatProp={this.deleteCitat} />
      </div>
     );
  }
}
 
export default App;
