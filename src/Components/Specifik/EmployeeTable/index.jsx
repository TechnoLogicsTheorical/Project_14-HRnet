import React from 'react';
import { columnsConfiguration } from '../../../utils/Constants/tableColumnsConfig.js';
import DataTable from 'react-data-table-component';

/**
 * Composant d'affichage de valeur dans un tableau générée
 * @param {array} employeesList Les valeurs contenant des objets avec des propriètes correspondents aux informations d'un employé.
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function EmployeeTable({employeesList}) {
    return (
        <DataTable
            columns={columnsConfiguration}
            data={employeesList}
        />
    );
};