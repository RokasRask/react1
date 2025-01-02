import './app.css';
import Bebras from './Bebras';

function Zebras() {
  return <h2>Zebras</h2>
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React v18</h1>
        <Bebras/>
        <Zebras/>
      </header>
    </div>
  );
}

export default App;
