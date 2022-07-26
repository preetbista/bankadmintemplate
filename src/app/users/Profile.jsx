import React, { useState, useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/button'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState({})

    let { id } = useParams()
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    console.log(user)
    return (
        <>
            <Button onClick={handleShow}>
                Profile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>User Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>Name:{user.fullName}</h6>
                    <h6>Username: {user.username}</h6>
                    <h6>Email: {user.email}</h6>
                    <h6>Address: {user.address}</h6>
                    <h6>Gender: {user.gender}</h6>
                    <h6>Age: {user.age}</h6>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>

    );
}
export default Profile