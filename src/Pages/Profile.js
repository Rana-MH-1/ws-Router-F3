import React from 'react'
import { Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'

const Profile = ({Users}) => {
    const navigate = useNavigate()
    const {idUser} = useParams()
    const foundUSer = Users.find(user=> user.id == idUser)
    //console.log(foundUSer);
  return (
    <div>
        <h3>{foundUSer.name}</h3>
        <h4>{foundUSer.age}</h4>
        <h5>{foundUSer.Adress}</h5>
        <Button onClick={()=>navigate('/')} variant='primary'>GO To Home</Button>
    </div>
  )
}

export default Profile