import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../Components/Generics/Title';
import EmployeeTable from '../Components/Specifik/EmployeeTable/index.jsx';
import Header from '../Components/Generics/Header/index.jsx';

/**
 * Composant de page permettant d'accéder à la fonctionnalité d'affichage de tous les employés
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function ListEmployee () {
    const employees = useSelector((state) => state.employee);
    return (
        <>
            <Header />
            <Title name='All Employees' level={4} />
            <EmployeeTable employeesList={employees} />
        </>
    )
}