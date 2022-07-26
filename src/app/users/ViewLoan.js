import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { deleteLoan, listLoan } from '../rest-api/RestAPI'
import { NavLink } from 'react-router-dom'
import { FaTrashAlt, FaPen } from 'react-icons/fa'
import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
const ViewLoan = () => {
    const [rows, setRows] = useState([])

    const [deleteModal, setDeleteModal] = useState({
        visible: false,
        id: '',
    })

    useEffect(() => {
        loadLoan()
    }, [])

    const columns = [
        {
            name: 'Name',
            selector: (row) => row.fullName,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: (row) => row.amount,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row) => row.email,
            sortable: true,
        },

        {
            name: 'Address',
            selector: (row) => row.address,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: (row) => row.gender,
            sortable: true,
        },

        {
            name: 'Action',
            cell: (row) => (
                <div>
                    <NavLink to={`/loans/edit/${row.id}`}>
                        <FaPen />
                    </NavLink>
                    &nbsp; &nbsp;
                    <FaTrashAlt onClick={() => setDeleteModal({ visible: true, id: row.id })} />
                </div>
            ),
        },
    ]

    const handleDelete = (id) => {
        console.log('Deleting loan ' + id)
        deleteLoan(id)
            .then((res) => {
                console.log('Loan deleted successfully')
                window.location.reload(false)
            })
            .catch((error) => {
                console.log('Loan deletion failed')
            })
    }
    const loadLoan = () => {
        listLoan()
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
                    Deleted user are lost permanently. <br />
                    Are you sure , you want to delete user ?
                </CModalBody>
                <CModalFooter>
                    <CButton color="secondary" onClick={() => setDeleteModal({ visible: false })}>
                        Cancle
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

export default ViewLoan