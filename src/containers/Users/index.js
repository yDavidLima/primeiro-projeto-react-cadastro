import React, { useState, useEffect } from "react"
import axios from "axios"

import { useHistory } from "react-router-dom/cjs/react-router-dom"

import Avatar from "../../assets/User Profile_Monochromatic 2.svg"
import Arrow from "../../assets/setaesquerda.svg"
import Trash from "../../assets/Lixo.svg"

import  H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"



import {
  Container,
  Image,
  P,
  User

} from "./styles"


const Users = () => {

  const [persons, setPersons] = useState([])
  const history = useHistory()



    useEffect(() =>{

    async function fetchUsers(){
      const {data: newUsers} = await axios.get("http://localhost:3001/users")

      setPersons(newUsers)

    

    }

    fetchUsers()

    }, [])
    
  


  async function deleteUser(userId) {

    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newArrayDelete = persons.filter(item => item.id !== userId)
    setPersons(newArrayDelete)

  }

  function backPage(){

    history.push("/")

  }




  return (

    <Container>
      <Image alt="logo" src={Avatar}></Image>

      <ContainerItens resolution={true}>

        <H1>Usuários!</H1>

        

        <ul>
          {
            persons.map(item => (
              <User key={item.id}>
                <p>{item.name}</p>
                <p>{item.age}</p>
                <button onClick={() => deleteUser(item.id)}><img src={Trash} alt="lixo"></img></button>

              </User>
            ))

          }

        </ul>


        <Button color={true} onClick={backPage} >Voltar <img src={Arrow}></img></Button>

      </ContainerItens>


    </Container>

  )
}


export default Users