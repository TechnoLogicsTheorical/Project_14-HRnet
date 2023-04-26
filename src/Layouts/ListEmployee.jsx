import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import filteredEmployeesList from '../utils/Functions/filteredEmployee.js';

import Title from '../Components/Generics/Title';
import EmployeeTable from '../Components/Specifik/EmployeeTable/index.jsx';
import Header from '../Components/Generics/Header/index.jsx';

const FormInput = styled.input`
  display: inline-block;
  font-size: inherit;
  padding: 7px 12px;
  margin: 0 12px;
  border-radius: 5px;
  border: 1px solid black;
`;

/**
 * Composant de page permettant d'accéder à la fonctionnalité d'affichage de tous les employés
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function ListEmployee () {
    const employees = useSelector((state) => state.employee);
    const [employeeList, setEmployeeList] = useState(employees);

    const handleResearch = (event) => {
        const value = event.target.value;

        const newEmployeeList = filteredEmployeesList(value, employees);
        setEmployeeList(newEmployeeList);
    }
    return (
        <>
            <Header />
            <Title name='All Employees' level={4} />

            <div>
                <label htmlFor="searchText">Recherche</label>
                <FormInput
                    id="searchText"
                    type="text"
                    onChange={handleResearch}
                    placeholder="FirstName or LastName"
                />
            </div>

            <EmployeeTable employeesList={employeeList} />
        </>
    )
}