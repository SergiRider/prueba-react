import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Buscador = ({poke, setSearch}) => {
  const searching=(e)=>{
    const Text_Search=e.target.value.toLowerCase()
    const result=poke.filter(
        (poke) => 
        poke.name.toLowerCase().includes(Text_Search) 
        );
       
        setSearch(result)
    
}


  return (
    <Form inline>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>
          <h1>Generaciones de Pokemon</h1>
          </Form.Label>
        <Form.Control type="text" placeholder="Nombre pokemon" onChange={searching} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="ID pokemon" onChange={searching} />
      </Form.Group> */}
      </Form>
    )
}

export default Buscador