import { useEffect } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';

const MiApi = ({poke, setPoke, search, setSearch}) => {
      const [listPoke, setListPoke]=useState(poke)
  
    useEffect(()=>{
        const getPokes= async ()=>{
        const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=249&offset=2')
        const dataPokes= await response.json()
       
        const {results} =dataPokes


        const pokesPush =results.map(async(pokemon)=>{
            const response = await fetch(pokemon.url)
            const poke= await response.json()
            
            return{
                id: poke.id,
                name:poke.name,
                imgG1: poke.sprites.versions["generation-i"]["red-blue"].front_default,
                imgG2: poke.sprites.versions["generation-ii"].gold.front_default,
                imgG3: poke.sprites.versions["generation-iii"].emerald.front_default,
                imgG4: poke.sprites.versions["generation-iv"].platinum.front_default,
                imgG5: poke.sprites.versions["generation-v"]["black-white"].animated.front_default,
                imgG6: poke.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default,
                type1: poke.types[0].type.name,
                               
            }
        })
        setPoke(await Promise.all(pokesPush))
        setSearch(await Promise.all(pokesPush))
        }
        getPokes()
    },[])




  return (
    <>
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>ID</th>
            <th>Generacion 1</th>
            <th>Generacion 2</th>
            <th>Generacion 3</th>
            <th>Generacion 4</th>
            <th>Generacion 5</th>
            <th>Generacion 6</th>
            

          </tr>
        </thead>
        <tbody>
            {search.map((poke) =>(
                <tr className="aligne-middle" key={poke.id}>
                    
                    <td>{poke.name}</td>
                    <td>{poke.id}</td>
                    <td><img src={poke.imgG1}></img></td>
                    <td><img src={poke.imgG2}></img></td>
                    <td><img src={poke.imgG3}></img></td>
                    <td><img src={poke.imgG4}></img></td>
                    <td><img src={poke.imgG5}></img></td>
                    <td><img src={poke.imgG6}></img></td>

                </tr>
            ))}
        </tbody>
      </Table>
    
    
    </>
  )

  }

export default MiApi