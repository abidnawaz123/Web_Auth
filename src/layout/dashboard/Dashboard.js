import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../App.css"
import { Box, Button, Card, Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const navigate = useNavigate()

  const { loggedInUser } = useSelector(state => state)

  useEffect(() => {
    !loggedInUser && navigate('/login')
  }, [loggedInUser])

  useEffect(() => {
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    if (username == null || "" && password == null || "") {
      navigate("/login")
    }
  }, [])


  const [items, setItems] = useState([]);

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  // useEffect(() => {
  //   fetchUsers()
  // }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8000/api/users/')
      .then(response => {
        console.log('this is response --->', response.data)
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const deleteItem = (userID) => {
    axios.delete(`http://localhost:8000/api/users/${userID}/`, {
      method: 'DELETE'
    })
    fetchUsers()
  }

  const submitData = () => {
    const Name = name.trim()
    const Description = description.trim()
    if (Name !== "" && Description !== "") {
      axios.post('http://localhost:8000/api/users/', { Name, Description })
      fetchUsers()
    }
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}><b>Welcome to your dashboard</b></h1>
      {/* <div className='addItemsWrapper'>
        <div className='addItems'>
          <Input
            type='text'
            value={name}
            onChange={(e) => { setName(e.target.value) }}
            placeholder='Enter your name here'
            required
          />
          <br />
          <Input
            type='text'
            value={description}
            onChange={(e) => { setDescription(e.target.value) }}
            placeholder='Enter some description here to add to backend'
            required
          />
        </div>
        <Button variant='contained' size='small' onClick={submitData} >Post</Button>
      </div> */}
    </div>
  )
}

export default Dashboard