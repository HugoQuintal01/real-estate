import Cover from './components/cover/Cover';
import Highlight from './components/highlight/Highlight';
import Menu from './components/menu/Menu';
import './style.css';

function App() {
  return (
    <div className="App">
            <Menu />
            <Cover />
            <Highlight />
    </div>
  );
}

export default App;
