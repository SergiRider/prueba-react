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
        const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
        const dataPokes= await response.json()
       
        const {results} =dataPokes


        const pokesPush =results.map(async(pokemon)=>{
            const response = await fetch(pokemon.url)
            const poke= await response.json()
            
            return{
                id: poke.id,
                name:poke.name,
                img: poke.sprites.versions["generation-ii"].crystal.front_default,
                img2: poke.sprites.versions["generation-ii"].crystal.front_shiny,
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
            <th>Imagen normal</th>
            <th>Imagen shiny</th>

          </tr>
        </thead>
        <tbody>
            {search.map((poke) =>(
                <tr className="aligne-middle" key={poke.id}>
                    
                    <td>{poke.name}</td>
                    <td>{poke.id}</td>
                    <td><img src={poke.img}></img></td>
                    <td><img src={poke.img2}></img></td>

                </tr>
            ))}
        </tbody>
      </Table>
    
    
    </>
  )

  }

export default MiApi