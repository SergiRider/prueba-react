import { useEffect } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from 'react-bootstrap/Table';

const MiApi = () => {
    const [poke, setPoke]=useState([])

    useEffect(()=>{
        const getPokes= async ()=>{
        const response= await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
        const dataPokes= await response.json()
        const {results} =dataPokes


        const pokesPush =results.map(async(pokemon)=>{
            const response = await fetch(pokemon.url)
            const poke= await response.json()
            return{
                id: poke.id,
                name:poke.name,
                img: poke.sprites.other.dream_world.front_default
            }
        })
        setPoke(await Promise.all(pokesPush))
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
            <th>Imagen</th>

          </tr>
        </thead>
        <tbody>
            {poke.map((poke) =>(
                <tr className="aligne-middle" key={poke.id}>
                    
                    <td>{poke.name}</td>
                    <td>{poke.id}</td>
                    <td><img src={poke.img}></img></td>

                </tr>
            ))}
        </tbody>
      </Table>
    
    
    </>
  )

  }

export default MiApi