import React from "react";
import { CForm, CFormLabel, CFormInput, CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../rest-api/RestAPI";

const AddUser = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
    fullName: '',
    address: '',
    age: '',
    gender: '',
    email: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  const handleSubmit = () => {
    addUser(user).then(data => {
      console.log("user added successfully");
      navigate("/users")
    }).catch(error => {
      console.log(error);
      console.log("Error when adding user");
    })
  }


  return (
    <div>
      <CForm>
        <div className="mb-3">
          <CFormLabel >Username</CFormLabel>
          <CFormInput id="username" type="text" placeholder="Username" name="username" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <CFormLabel >Name</CFormLabel>
          <CFormInput id="fullName" type="text" placeholder="Enter your name" name="fullName" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <CFormLabel >Email</CFormLabel>
          <CFormInput id="email" type="text" placeholder="Enter your email" name="email" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <CFormLabel >Address</CFormLabel>
          <CFormInput id="address" type="text" placeholder="Enter your address" name="address" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <CFormLabel >Password</CFormLabel>
          <CFormInput id="password" type="password" placeholder="Enter your password" name="password" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <CFormLabel >Gender</CFormLabel>
          <CFormInput id="gender" type="text" placeholder="Gender" name="gender" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <CFormLabel >Age</CFormLabel>
          <CFormInput id="age" type="number" placeholder="Age" name="age" onChange={handleChange} />
        </div>
        <CButton color="primary" onClick={handleSubmit}>Submit</CButton>
      </CForm>
    </div>
  )
}

export default AddUser