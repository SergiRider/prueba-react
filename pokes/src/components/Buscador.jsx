import React, { useState } from 'react'
import { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Buscador = ({poke, setSearch, dataTipo, search}) => {
  // const [tipos, setTipos] =useState([])
  // const [check, setCheck]= useState(false)
  //  const [tiposFiltrados, setTiposFiltrados] = useState([])
  // const [tipo, setTipo] = useState({
  //   normal: false,
  //   fighting: false,
  //   flying: false,
  //   poison: false,
  //   ground: false,
  //   rock: false,
  //   bug: false,
  //   ghost: false,
  //   steel: false,
  //   fire: false,
  //   water: false,
  //   grass: false,
  //   electric: false,
  //   psychic: false,
  //   ice: false,
  //   dragon: false,
  //   dark: false,
  //   fairy: false,
  //   unknown: false,
  //   shadow: false,
  // })
  // const url2='https://pokeapi.co/api/v2/type'
  // const names=poke.map((tips)=>tips.name)

      //  const traerTipos= async ()=>{
      //   const response= await fetch(url2)
      //   const data= await response.json()
      //   const tipos= data.results.map((tip)=>tip.name)
      //   setTipos(tipos)
      // }
      // useEffect(()=>{
      //   traerTipos()
      //      }, [])
  
  const searching=(e)=>{
    const Text_Search=e.target.value.toLowerCase()
    const result=poke.filter(
        (pok) => 
        pok.name.toLowerCase().includes(Text_Search) || 
        pok.type.toLowerCase().includes(Text_Search)
        );
        setSearch(result.sort())
}

  return (
    <>
    <Form inline>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          <h3 className='busqueda'>Sprites de GEN-I y GEN-II</h3>
          </Form.Label>
          
        <Form.Control type="text" placeholder="Nombre de pokemon o tipo" onChange={searching} />
        
      </Form.Group>

      </Form>

    
</>
    )
}

export default Buscador