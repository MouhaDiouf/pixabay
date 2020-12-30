import './App.css';
import { Navbar } from './components/navbar/Navbar';
import Search from './components/search/Search';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Search />
      </div>
    </div>
  );
}

export default App;
