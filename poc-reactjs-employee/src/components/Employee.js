import React, { Fragment, useEffect, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { useContext } from 'react'
import EditForm from './EditForm'
import { Button, Modal } from 'react-bootstrap';

const Employee = ({employee}) => {
    const {deleteEmployee} = useContext(EmployeeContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose= () => setShow(false)

    useEffect(() => {
        handleClose()
    }, [employee])

    return (
        <Fragment key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.gender}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>{employee.role}</td>
            <td>
                <Button 
                    className="dp-inline"
                    variant="warning"
                    onClick={handleShow}>
                    <i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                </Button>
                <Button 
                    className="dp-inline"
                    variant="danger"
                    onClick={() => deleteEmployee(employee.id)}>
                    <i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                </Button>
            </td>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <EditForm theEmployee={employee}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button 
                        onClick={handleClose}
                        variant="secondary"
                    >Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default Employee
