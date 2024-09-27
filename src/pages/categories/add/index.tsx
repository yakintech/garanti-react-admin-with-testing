import { Stack } from '@mui/material'
import React, { useState } from 'react'
import GInput from '../../../components/core-components/input'
import GButton from '../../../components/core-components/button'
import { baseApi } from '../../../api/baseApi'
import { useNavigate } from 'react-router-dom'

function Add() {

  const [name, setname] = useState("")
  const [description, setdescription] = useState("")


  const navigate = useNavigate()


  const add = () => {
    let newCategory = {
      name: name,
      description: description
    }

    baseApi.post("/categories", newCategory)
      .then((response) => {
        navigate("/categories")
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return <>
    <h1>Add Category</h1>
    <Stack spacing={2}>
      <Stack spacing={2}>
        <GInput label="Name" value={name} onChange={(e) => setname(e.target.value)} />
        <GInput label="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
      </Stack>
      <Stack>
        <GButton onClick={add} buttonType="primary">Save</GButton>
      </Stack>

    </Stack>
  </>
}

export default Add