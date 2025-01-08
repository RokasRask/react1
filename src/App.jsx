import './app.css';
import './buttons.scss';
import Mygtukai from './Components/044/Mygtukai';
import Select from './Components/044/Select';
import Text from './Components/044/Text';

function App() {


    return (
        <div className="app">
            <header className="app-header">
                <Mygtukai />

                <Text />

                <Select />

            </header>
        </div>
    );
}

export default App;