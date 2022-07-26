import React from "react";
import { CForm, CFormLabel, CFormInput, CButton } from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addLoan } from "../rest-api/RestAPI";

const AddLoan = () => {

    const navigate = useNavigate();
    const [loan, setLoan] = useState({
        fullName: '',
        address: '',
        amount: '',
        gender: '',
        email: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setLoan(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const handleSubmit = () => {
        addLoan(loan).then(data => {
            console.log("Loan added successfully");
            navigate("/loans")
        }).catch(error => {
            console.log(error);
            console.log("Error when adding loan");
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
                    <CFormLabel >Address</CFormLabel>
                    <CFormInput id="address" type="text" placeholder="Enter your address" name="address" onChange={handleChange} />
                </div>

                <div className="mb-3">
                    <CFormLabel >Amount</CFormLabel>
                    <CFormInput id="amount" type="number" placeholder="Loan Amount" name="amount" onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <CFormLabel >Gender</CFormLabel>
                    <CFormInput id="gender" type="text" placeholder="Gender" name="gender" onChange={handleChange} />
                </div>
                <CButton color="primary" onClick={handleSubmit}>Add</CButton>
            </CForm>
        </div>
    )
}

export default AddLoan