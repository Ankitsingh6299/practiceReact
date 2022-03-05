import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import NameList from './components/nameList';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
