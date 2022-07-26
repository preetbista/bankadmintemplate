import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editInsurance, getInsurance } from '../rest-api/RestAPI'

const EditInsurance = () => {
    let { id } = useParams()//fetch id

    const navigate = useNavigate()
    const [insurance, setInsurance] = useState({})

    useEffect(() => {
        loadInsurance(id)
    }, [])
    const loadInsurance = (id) => {
        getInsurance(id)
            .then((res) => res.data)
            .then((rows) => {
                setInsurance(rows)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setInsurance((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(insurance.email)
    }

    const handleSubmit = () => {
        editInsurance(insurance)
            .then((data) => {
                console.log('Insurance edited successfully')
                navigate('/insurance')
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
                        value={insurance.fullName}
                        onChange={handleChange}
                    />
                    <CFormLabel>Type</CFormLabel>
                    <CFormInput
                        type="text"
                        name="type"
                        value={insurance.type}
                        onChange={handleChange}
                    />
                    <CFormLabel>Date of Birth</CFormLabel>
                    <CFormInput
                        type="date"
                        name="dob"
                        value={insurance.dob}
                        onChange={handleChange}
                    />
                    <CFormLabel>Contact</CFormLabel>
                    <CFormInput
                        type="number"
                        name="contact"
                        value={insurance.contact}
                        onChange={handleChange}
                    />


                </div>
            </CForm >
            <CButton color="primary" onClick={handleSubmit}>
                Edit
            </CButton>
        </div>
    )
}

export default EditInsurance