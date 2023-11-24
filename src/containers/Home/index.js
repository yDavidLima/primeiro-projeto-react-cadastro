import React, { useState, useRef} from "react"
import axios from "axios"

import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

import Logo from "../../assets/img1.svg"
import Arrow from "../../assets/setadireita.svg"

import  H1  from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"



import {
  Container,
  Image,
  P,
  Inputs,
  // User

} from "./styles"


const App = () => {

  const [persons, setPersons] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()


  
  async function register() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
  
    console.log(newUser);
  
    setPersons([...persons, ...newUser]);

    history.push("/usuarios")


  }

   
  




  return (

    <Container>
      <Image alt="logo" src={Logo}></Image>

      <ContainerItens>

        <H1>Ola!</H1>

        <P>Name</P>
        <Inputs ref={inputName} placeholder="Name"></Inputs>

        <P>Idade</P>
        <Inputs ref={inputAge} placeholder="Age"></Inputs>

        <Button onClick={register}>Cadastrar <img src={Arrow}></img></Button>

        


      </ContainerItens>


    </Container>

  )
}


export default App 