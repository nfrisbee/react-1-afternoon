import React, { Component } from 'react';

export default class FilterObject extends Component {

constructor(){
    super();

    this.state = {
        employees: [
          {
            name: 'Jimmy Joe',
            title: 'Hack0r',
            age: 12,
          },
          {
            name: 'Jeremy Schrader',
            age: 24,
            hairColor: 'brown'
          },
          {
            name: 'Carly Armstrong',
            title: 'CEO',
          }
        ],
  
        userInput: '',
        filteredEmployees: []
      }
    }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
          <h4>Filter Object</h4>
          <span className="puzzleText"></span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.targetvalue) }></input>
          <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }> Filter </button>
          <span className="resultsBox filterObjectRB">Filteres: {JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
      </div>

    )
  }
}