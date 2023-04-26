import React, { useState } from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { addEmployee } from '../../../utils/Redux/employee/employeeSlice.js';

import { statesList } from '../../../utils/Constants/statesList.js';
import { departmentList } from '../../../utils/Constants/departmentList.js';

import { Modal } from 'react_modal_for_hrnet';

import Select from '../FormSelect';
import DatePickerInput from '../DatePicker';

import Employee from '../../../utils/Functions/employeeObject.js';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.form`
  display: flex;
  flex-flow: column wrap;
  max-width: 80vw;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const FormLabelContainer = styled.div`
  display: inline-block;
  font-size: 18px;
  font-style: italic;
  color: lightgray;
  margin: 10px;
  width: 326px;
`;
const FormInput = styled.input`
  display: block;
  font-size: inherit;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
`;

const FormSubmitButton = styled.input`
  display: block;
  margin: 20px auto;
  padding: 12px 18px;
  color: white;
  background-color: #007fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 20px;
`;

const FieldSetElement = styled.fieldset`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

/**
 * Composant Formulaire ayant des sous-composants d'affichage et de gestion des champs utilisateurs destiné à l'usage de fonctionnalité d'ajout d'un employé
 * @returns {JSX.Element}
 * @constructor
 */
export default function Form() {
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();

        const newEmployee = Employee(
            firstName,
            lastName,
            dateBirthday,
            startDate,
            street,
            city,
            state,
            zipCode,
            department,
        )
        dispatch(addEmployee(newEmployee));

        // Change status for opening the modal component
        setIsOpen(true);
    }

    // Form Initial States
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateBirthday, setDateBirthday] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');

    const [state, setState] = useState('Alabama');
    const [department, setDepartment] = useState('Sales');

    // Modal States
    const [isOpen, setIsOpen] = useState(false);

    // React Redux for Launching Add Employee
    const dispatch = useDispatch();
    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <FormLabelContainer>
                    <label htmlFor="first-name">First Name</label>
                    <FormInput
                        id="first-name"
                        type="text"
                        placeholder="John"
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName}
                        required
                    />
                </FormLabelContainer>

                <FormLabelContainer>
                    <label htmlFor="last-name">Last Name</label>
                    <FormInput
                        type="text"
                        id="last-name"
                        placeholder="Doe"
                        onChange={(event) => setLastName(event.target.value)}
                        value={lastName}
                        required
                    />
                </FormLabelContainer>

                <FormLabelContainer>
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <DatePickerInput stateProp={dateBirthday} changeFunction={(date) => setDateBirthday(date)} />
                </FormLabelContainer>

                <FormLabelContainer>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePickerInput stateProp={startDate} changeFunction={(date) => setStartDate(date)} />
                </FormLabelContainer>

                <FieldSetElement>
                    <legend>Address</legend>

                    <FormLabelContainer>
                        <label htmlFor="street">Street</label>
                        <FormInput
                            type="text"
                            id="street"
                            placeholder="25, London Place"
                            onChange={(event) => setStreet(event.target.value)}
                            value={street}
                            required
                        />
                    </FormLabelContainer>

                    <FormLabelContainer>
                        <label htmlFor="city">City</label>
                        <FormInput
                            type="text"
                            id="city"
                            placeholder="Burginiam"
                            onChange={(event) => setCity(event.target.value)}
                            value={city}
                            required
                        />
                    </FormLabelContainer>

                    <FormLabelContainer>
                        <label htmlFor="state">State</label>
                        <Select
                            name="state"
                            id="state"
                            arrayList={statesList}
                            onChange={(event) => setState(event.target.value)}
                            value={state}
                            required
                        />
                    </FormLabelContainer>

                    <FormLabelContainer>
                        <label htmlFor="zip-code">Zip Code</label>
                        <FormInput
                            type="number"
                            id="zip-code"
                            placeholder="55332"
                            onChange={(event) => setZipCode(event.target.value)}
                            value={zipCode}
                            required
                        />
                    </FormLabelContainer>
                </FieldSetElement>

                <FormLabelContainer>
                    <label htmlFor="department">Department</label>
                    <Select
                        name="department"
                        id="department"
                        arrayList={departmentList}
                        onChange={(event) => setDepartment(event.target.value)}
                        value={department}
                    />
                </FormLabelContainer>

                <FormSubmitButton type='submit' value='Save' />
            </FormContainer>

            <Modal
                isOpen={isOpen}
                closeModal={() => {
                    setIsOpen(false)
                    navigate('/list');
                    }
                }
            >
                {"Employee Created!"}
            </Modal>
        </>
    )
}