import { Button, Form, InputGroup } from 'react-bootstrap';
import React from 'react'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext';
import "flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";

const EditForm = ({theEmployee}) => {  
    const id = theEmployee.id

    const [name, setName] = useState(theEmployee.name)
    const [gender, setGender] = useState(theEmployee.gender)
    const [birthday, setBirthDay] = useState(theEmployee.birthday)
    const [address, setAddress] = useState(theEmployee.address)
    const [hasaccount, sethasAccount] = useState(theEmployee.hasaccount)

    const {updateEmployee} = useContext(EmployeeContext)

    const updatedEmployee = {id, name, gender, birthday, address, hasaccount}

    const handleSubmit = (e) => {
        e.preventDefault()
        updateEmployee(id, updatedEmployee)
    }

    return (
        <Form action="" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Name :
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Name" 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Gender :
                    </InputGroup.Text>
                    <Form.Select 
                        onChange={(e) => setGender(e.target.value)}  
                        name="gender"
                        defaultValue={gender}
                        required
                    >
                        <option value="" selected disabled hidden>Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Form.Select>
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    Birthday :
                    <Flatpickr
                        name="birthday"
                         value={birthday} // giá trị ngày tháng
                            // các option thêm cho thư viện
                        options={{
                                dateFormat: "d-m-Y" // format ngày giờ
                         }}
                        // event
                            onChange={(e) => setBirthDay(e)}
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Address :
                    </InputGroup.Text>
                    <Form.Control 
                        type="text" 
                        placeholder="Address" 
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </InputGroup>
            </Form.Group>
            <Form.Group>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                        Has Account :
                    </InputGroup.Text>

                    <Form.Select 
                        onChange={e => sethasAccount(e.target.value)} 
                        name="hasaccount"
                        required
                    >
                        <option value="" selected hidden disabled>Choose your Has Account</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                    </Form.Select>

                </InputGroup>
            </Form.Group>

            <Button type="submit">Edit employee</Button>
        </Form>
    )
}

export default EditForm
