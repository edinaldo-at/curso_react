import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

//Exemplo statefull  -  forma longa, antiga
class App extends Component {

  //Exemplo com BIND
  /*
  constructor(props) {
    super(props)
    //lembrete: feito o BIND para que possamos usar o THIS no metodo handlePclick mesmo ele estando dentro da mesma classe
    this.handlePclick = this.handlePclick.bind(this);
    this.state = {
      name: "Edinaldo Alves",
      counter: 0
    };
  }
  */

  //Exemplo do contrutor sem o Bind usando aerofunctions
  /*
  constructor(props) {
    super(props)
    this.state = {
      name: "Edinaldo Alves",
      counter: 0
    };
  }*/

  //class fields
  state = {
    name: "Edinaldo Alves",
    counter: 0
  };

  //Exemplo Sem contrutor

  handlePclick = () => {
    //const { name } = this.state;
    //console.log(`<p>Clicado - ${name}</p>`)

    //Mudando o estado utilizando o metodo setState
    this.setState({ name: 'Cláudio' });
  }

  //lembrete: metodo como areofunction -  não é necessário fazer o BIND
  handleAclick = (event) => {
    event.preventDefault();

    const { counter } = this.state;

    this.setState({ counter: counter + 1 });
  }

  render() {
    //lembrete: pegue a chave nome que está dentro de state
    const { name, counter } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePclick}>
            {name} - {counter}
          </p>
          <a
            onClick={this.handleAclick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique-Me
          </a>
        </header>
      </div>
    );
  };
};


//class stateless (Sem estado)
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
//function stateless (Sem estado)
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
