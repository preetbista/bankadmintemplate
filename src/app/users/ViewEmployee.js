import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteEmployee, listEmployee } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewEmployee = () => {
    const [rows, setRows] = useState([])

    const [deleteModal, setDeleteModal] = useState({
        visible: false,
        id: '',
    })

    useEffect(() => {
        loadEmployee()
    }, [])

    const columns = [
        {
            name: 'S.N',
            selector: (row) => row.id,
        },
        {
            name: 'Employee Id',
            selector: (row) => row.empId,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row) => row.fullName,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },

        {
            name: 'Position',
            selector: (row) => row.position,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
        },

        {
            name: 'Action',
            cell: (row) => (
                <div>
                    <NavLink to={`/employee/edit/${row.id}`}>
                        <FaPen />
                    </NavLink>
                    &nbsp; &nbsp;
                    <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
                </div>
            ),
        },
    ]

    const handleDelete = (id) => {
        console.log('Deleting employee ' + id)
        deleteEmployee(id)
            .then((res) => {
                console.log('Employee deleted successfully')
                window.location.reload(false)
            })
            .catch((error) => {
                console.log('Employee deletion failed')
            })
    }
    const loadEmployee = () => {
        listEmployee()
            .then((res) => res.data)
            .then((rows) => {
                setRows(rows)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <DataTable striped columns={columns} data={rows} pagination />

            <CModal visible={deleteModal.visible} onClose={() => setDeleteModal({ visible: false })}>
                <CModalHeader>
                    <CModalTitle>Deletion Confirmation</CModalTitle>
                </CModalHeader>
                <CModalBody>
                    Deleted Employees are lost permanently. <br />
                    Are you sure, you want to delete this employee ?
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setDeleteModal({ visible: false })}>
                        Cancel
                    </CButton>
                    <CButton
                        color="primary"
                        onClick={() => {
                            setDeleteModal({ visible: false })
                            handleDelete(deleteModal.id)
                        }}
                    >
                        Delete
                    </CButton>
                </CModalFooter>
            </CModal>
        </div>
    )
}

export default ViewEmployee