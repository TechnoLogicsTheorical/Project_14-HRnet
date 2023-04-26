import React, { useState } from 'react';
import { columnsConfiguration } from '../../../utils/Constants/tableColumnsConfig.js';
import DataTable from 'react-data-table-component';

/**
 * Composant d'affichage de valeur dans un tableau générée
 * @param {array} employeesList Les valeurs contenant des objets avec des propriètes correspondents aux informations d'un employé.
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function EmployeeTable({employeesList}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageLength, setPageLength] = useState(10);

    const paginatedData = employeesList.slice(
        (currentPage - 1) * pageLength,
        currentPage * pageLength
    );
    return (
        <>
            <DataTable
                columns={columnsConfiguration}
                data={paginatedData}
                pagination
                paginationPerPage={pageLength}
                paginationTotalRows={employeesList.length}
            />
        </>

    );
};