import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editUser, getUser } from '../rest-api/RestAPI'

const EditUser = () => {
  let { id } = useParams()//fetch id

  const navigate = useNavigate()
  const [user, setUser] = useState({})

  useEffect(() => {
    loadUser(id)
  }, [])
  const loadUser = (id) => {
    getUser(id)
      .then((res) => res.data)
      .then((rows) => {
        setUser(rows)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    console.log(user.email)
  }

  const handleSubmit = () => {
    user.role = null
    editUser(user)
      .then((data) => {
        console.log('User edited successfully')
        navigate('/users')
      })
      .catch((error) => { })
  }

  return (
    <div>
      <CForm>
        <div div className="w-50 p-3">
          <CFormLabel>Full Name</CFormLabel>
          <CFormInput
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
          />

          <CFormLabel>Address</CFormLabel>
          <CFormInput
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />

          <CFormLabel>Age</CFormLabel>
          <CFormInput
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <CFormLabel>Gender</CFormLabel>
          <CFormInput
            type="text"
            name="gender"
            value={user.gender}
            onChange={handleChange}
          />
        </div>
      </CForm>
      <CButton color="primary" onClick={handleSubmit}>
        Edit
      </CButton>
    </div>
  )
}

export default EditUser