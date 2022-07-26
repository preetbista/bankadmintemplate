import React from "react";
import { CForm, CFormLabel, CFormInput, CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../rest-api/RestAPI";

const AddEmployee = () => {

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        fullName: '',
        empId: '',
        address: '',
        email: '',
        position: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        addEmployee(employee).then(data => {
            console.log("Employee added successfully");
            navigate("/employee")
        }).catch(error => {
            console.log(error);
            console.log("Error when adding employee");
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
                    <CFormLabel >Employee ID</CFormLabel>
                    <CFormInput id="empId" type="number" placeholder="Employee Id" name="empId" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <CFormLabel >Email</CFormLabel>
                    <CFormInput id="email" type="text" placeholder="Email" name="email" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <CFormLabel >Address</CFormLabel>
                    <CFormInput id="address" type="text" placeholder="Address" name="address" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <CFormLabel >Position</CFormLabel>
                    <CFormInput id="position" type="text" placeholder="Position" name="position" onChange={handleChange} />
                </div>
                <CButton color="primary" onClick={handleSubmit}>Add</CButton>
            </CForm>
        </div>
    )
}

export default AddEmployee