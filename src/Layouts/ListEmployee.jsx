import React from 'react';
import { useSelector } from 'react-redux';

import Title from '../Components/Generics/Title';
import EmployeeTable from '../Components/Specifik/EmployeeTable/index.jsx';
import Header from '../Components/Generics/Header/index.jsx';

export default function ListEmployee () {
    const employees = useSelector((state) => state.employee);

    return (
        <>
            <Header />
            <Title name='All Employees' level={4} />
            <EmployeeTable employeesList={employees}/>
        </>
    )
}