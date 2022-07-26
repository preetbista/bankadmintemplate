import React, { useState, useEffect } from 'react'

import { CForm, CFormInput, CFormLabel, CButton } from '@coreui/react'

import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { editEmployee, getEmployee } from '../rest-api/RestAPI'

const EditEmployee = () => {
    let { id } = useParams()//fetch id

    const navigate = useNavigate()
    const [employee, setEmployee] = useState({})

    useEffect(() => {
        loadEmployee(id)
    }, [])
    const loadEmployee = (id) => {
        getEmployee(id)
            .then((res) => res.data)
            .then((rows) => {
                setEmployee(rows)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setEmployee((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        console.log(employee.email)
    }

    const handleSubmit = () => {
        editEmployee(employee)
            .then((data) => {
                console.log('Employee edited successfully')
                navigate('/employee')
            })
            .catch((error) => { })
    }

    return (
        <div>
            <CForm>
                <div div className="w-50 p-3">
                    <CFormLabel>Employee Id</CFormLabel>
                    <CFormInput
                        type="number"
                        name="empId"
                        value={employee.empId}
                        onChange={handleChange}
                        readOnly />
                    <CFormLabel>Full Name</CFormLabel>
                    <CFormInput
                        type="text"
                        name="fullName"
                        value={employee.fullName}
                        onChange={handleChange}
                    />
                    <CFormLabel>Address</CFormLabel>
                    <CFormInput
                        type="text"
                        name="address"
                        value={employee.address}
                        onChange={handleChange}
                    />
                    <CFormLabel>Position</CFormLabel>
                    <CFormInput
                        type="text"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                    />
                    <CFormLabel>Email</CFormLabel>
                    <CFormInput
                        type="text"
                        name="email"
                        value={employee.email}
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

export default EditEmployee