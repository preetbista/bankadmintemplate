import React from "react";
import { CForm, CFormLabel, CFormInput, CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addInsurance } from "../rest-api/RestAPI";

const AddInsurance = () => {

    const navigate = useNavigate();
    const [insurance, setInsurance] = useState({
        fullName: '',
        type: '',
        years: '',
        contact: '',
        email: '',
        dob: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setInsurance(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        addInsurance(insurance).then(data => {
            console.log("Insurance added successfully");
            navigate("/insurance")
        }).catch(error => {
            console.log(error);
            console.log("Error when adding insurance");
        })
    }


    return (
        <div>
            <CForm>
                <div className="mb-3">
                    <CFormLabel >Name</CFormLabel>
                    <CFormInput id="fullName" type="text" placeholder="Enter your name" name="fullName" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <CFormLabel >Email</CFormLabel>
                    <CFormInput id="email" type="text" placeholder="Enter your email" name="email" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <CFormLabel >Contact</CFormLabel>
                    <CFormInput id="contact" type="number" placeholder="Mobile Number" name="contact" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <CFormLabel >Type</CFormLabel>
                    <CFormInput id="type" type="text" placeholder="Type of account" name="type" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <CFormLabel >Date of Birth</CFormLabel>
                    <CFormInput id="dob" type="date" placeholder="Date of Birth" name="dob" onChange={handleChange} />
                </div>
                <CButton color="primary" onClick={handleSubmit}>Add</CButton>
            </CForm>
        </div>
    )
}

export default AddInsurance