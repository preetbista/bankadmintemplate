import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteInsurance, listInsurance } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewInsurance = () => {
    const [rows, setRows] = useState([])

    const [deleteModal, setDeleteModal] = useState({
        visible: false,
        id: '',
    })

    useEffect(() => {
        loadInsurance()
    }, [])

    const columns = [
        {
            name: 'S.N',
            selector: (row) => row.id,
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
            name: 'Contact',
            selector: (row) => row.contact,
            sortable: true,
        },
        {
            name: 'Type',
            selector: (row) => row.type,
            sortable: true,
        },
        {
            name: 'DOB',
            selector: (row) => row.dob,
            sortable: true,
        },

        {
            name: 'Action',
            cell: (row) => (
                <div>
                    <NavLink to={`/insurance/edit/${row.id}`}>
                        <FaPen />
                    </NavLink>
                    &nbsp; &nbsp;
                    <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
                </div>
            ),
        },
    ]

    const handleDelete = (id) => {
        console.log('Deleting insurance ' + id)
        deleteInsurance(id)
            .then((res) => {
                console.log('Insurance deleted successfully')
                window.location.reload(false)
            })
            .catch((error) => {
                console.log('Insurance deletion failed')
            })
    }
    const loadInsurance = () => {
        listInsurance()
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
                    Deleted Insurance are lost permanently. <br />
                    Are you sure, you want to delete this insurance ?
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

export default ViewInsurance