import { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [poke, setPoke]=useState([])
  const [search, setSearch] =useState(poke)

  return (
    <div className="App">
      <Buscador
       poke={poke}
       setPoke={setPoke}
      search={search}
      setSearch={setSearch}
      />
      <MiApi 
      search={search}
      setSearch={setSearch}
      poke={poke}
      setPoke={setPoke}
      />
      
    </div>
  );
}

export default App;

