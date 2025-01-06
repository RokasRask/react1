import './app.css';
import Auto from './Components/Auto';
import Namas from './Components/Namas';
import Parkas from './Components/Parkas';
import Volvo from './Components/Volvo';

function App() {

  const rand = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

  return (
    <div className="app">
      <header className="app-header">

        {/* <Namas numeris='1' spalva='red' kiekis='5' atsFun={rand}/>
        <Namas numeris='2' spalva='green' kiekis='8' atsFun={rand}/>
        <Namas numeris='3' spalva='blue' kiekis='1' atsFun={rand}/> */}

        {/* <Parkas koks={rand(1, 3)} /> */}

        <Auto>
          <h1>Opel</h1>
        </Auto>
        <Auto>
          <h1>BMW</h1>
        </Auto>

        <Auto><Volvo /></Auto>

        <h2 style={
          {
            position: 'relative',
            top: rand(-300, 300) + 'px',
            color: 'skyblue',
            letterSpacing: rand(5, 30) + 'px',
          }
        }>REACT</h2>

      </header>
    </div>
  );
}

export default App;