import { useState } from 'react';
import './App.css';
import Buscador from './components/Buscador';
import MiApi from './components/MiApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [poke, setPoke]=useState([])
  const [search, setSearch] =useState(poke)

  return (
    <div className="App">
<div className='encabezado'>
<h1>Evolución de sprites Pokémon</h1>
</div>
      

      <Buscador
       poke={poke}
       setPoke={setPoke}
      search={search}
      setSearch={setSearch}
      />
      
    <Table striped bordered hover>
        <thead>
          <tr>
          <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Versión Gen-I</th>
            <th>Versión Gen-II</th>
            <th>Versión Gen-III</th>
            <th>Versión Gen-IV</th>
            <th>Versión Gen-V</th>
            <th>Versión Gen-VI</th>          

          </tr>
        </thead>
        <MiApi 
      search={search}
      setSearch={setSearch}
      poke={poke}
      setPoke={setPoke}
      />
        </Table>
        <ScrollToTop/>
      
    </div>
  );
}

export default App;

