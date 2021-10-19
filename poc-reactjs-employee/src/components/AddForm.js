import React from 'react'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';
import { Button, Form, InputGroup } from 'react-bootstrap';
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

const AddForm = () => {
    const {addEmployee} = useContext(EmployeeContext)

    const [date, setDate] = useState(new Date());

    const [newEmployee, setNewEmployee] = useState({
        name: '',
        gender: '',
        birthday: '',
        address: '',
        hasaccount: ''
    })

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const {name, gender, birthday, address, hasaccount} = newEmployee

    const handleSubmit = (e) => {
        e.preventDefault()
        addEmployee(name, gender, birthday, address, hasaccount)

        setNewEmployee({
            name: '',
            gender: '',
            birthday: '',
            address: '',
            hasaccount: ''
        })
    }

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        value={name}
                        onChange={e => onInputChange(e)}
                        required
                    />  
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Gender</InputGroup.Text>
                    <Form.Select 
                        onChange={e => onInputChange(e)} 
                        name="gender"
                        required
                    >
                        <option value="" selected hidden disabled>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Birthday</InputGroup.Text>
                    <Flatpickr
                         value={date} // giá trị ngày tháng
                            // các option thêm cho thư viện
                        options={{
                                dateFormat: "d-m-Y" // format ngày giờ
                         }}
                        // event
                            onChange={(e) => setDate(e.target.value.dateFormat)}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Address</InputGroup.Text>
                    <Form.Control  
                        type="text"  
                        placeholder="Enter your address" 
                        name="address"
                        value={address}
                        onChange={e => onInputChange(e)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">Has Account</InputGroup.Text>
                     <Form.Select 
                        onChange={e => onInputChange(e)} 
                        name="hasaccount"
                        required
                    >
                        <option value="" selected hidden disabled>Choose your Has Account</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
          
            <Button type="submit">Add new employee</Button>
        </Form>
    )
}

export default AddForm
