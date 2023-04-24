import React from 'react';
import DataTable from 'react-data-table-component';

const columnsConfiguration = [
    {
        name: 'First Name',
        selector: row => row.firstName,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastName,
        sortable: true,
    },
    {
        name: 'Birthday Date',
        selector: row => row.birthDate,
        sortable: true,
    },
    {
        name: 'Start Date',
        selector: row => row.startDate,
        sortable: true,
    },
    {
        name: 'Street',
        selector: row => row.street,
        sortable: true,
    },
    {
        name: 'City',
        selector: row => row.city,
        sortable: true,
    },
    {
        name: 'States',
        selector: row => row.states,
        sortable: true,
    },
    {
        name: 'Zip Code',
        selector: row => row.zipCode,
        sortable: true,
    },
    {
        name: 'Department',
        selector: row => row.department,
        sortable: true,
    },

];

export default function EmployeeTable({employeesList}) {
    return (
        <DataTable
            columns={columnsConfiguration}
            data={employeesList}
        />
    );
};