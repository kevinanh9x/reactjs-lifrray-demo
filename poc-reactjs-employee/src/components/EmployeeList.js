import React, { useContext, useEffect, useState } from 'react'
import {EmployeeContext} from '../context/EmployeeContext';
import AddForm from './AddForm'
import Employee from './Employee'
import Button from 'react-bootstrap/Button';
import { Alert, Modal } from 'react-bootstrap';

const EmployeeList = () => {
    const {employees} = useContext(EmployeeContext)

    const [showAlert, setShowAlert] = useState(false)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose= () => setShow(false)

    const handleShowAlert = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }

    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert()
        }
    }, [employees])

    return (
        <div className="container-xl">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage Employee</h2>
                        </div>
                        <div className="col-sm-6">
                            <Button onClick={handleShow}><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
                        </div>
                    </div>
                </div>

                <Alert 
                    show={showAlert}
                    variant="success"
                >
                    Employee List Updated
                </Alert>

                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>BirthDay</th>
                            <th>Address</th>
                            <th>Has Account</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.sort((a,b) => (a.name < b.name ? -1 : 1)).map(employee => (
                                <tr key={employee.id}>
                                    <Employee employee={employee}/> 
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Modal 
                    show={show} 
                    onHide={handleClose} 
                    animation={true}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Employee</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <AddForm/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            onClick={handleClose}
                            variant="secondary">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default EmployeeList
