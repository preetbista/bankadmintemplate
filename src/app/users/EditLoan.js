import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editLoan, getLoan } from '../rest-api/RestAPI'

const EditLoan = () => {
    let { id } = useParams()//fetch id

    const navigate = useNavigate()
    const [loan, setLoan] = useState({})

    useEffect(() => {
        loadLoan(id)
    }, [])
    const loadLoan = (id) => {
        getLoan(id)
            .then((res) => res.data)
            .then((rows) => {
                setLoan(rows)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setLoan((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(loan.email)
    }

    const handleSubmit = () => {
        editLoan(loan)
            .then((data) => {
                console.log('Loan edited successfully')
                navigate('/loans')
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
                        value={loan.fullName}
                        onChange={handleChange}
                    />

                    <CFormLabel>Address</CFormLabel>
                    <CFormInput
                        type="text"
                        name="address"
                        value={loan.address}
                        onChange={handleChange}
                    />
                    <CFormLabel>Gender</CFormLabel>
                    <CFormInput
                        type="number"
                        name="amount"
                        value={loan.amount}
                        onChange={handleChange}
                    />
                    <CFormLabel>Gender</CFormLabel>
                    <CFormInput
                        type="text"
                        name="gender"
                        value={loan.gender}
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

export default EditLoan