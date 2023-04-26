import { createSlice } from '@reduxjs/toolkit';
import { fakeEmployees } from '../../Constants/fakeEmployees.js';

/**
 * Etat de variable d'initialisation
 * @type {{firstName, lastName, zipCode, city, street, department, birthDate: string, startDate: string, states}[]}
 */
const initialState = [
    ...fakeEmployees
]

/**
 * Déclaration d'un réducteur et des fonctions, qui devront être appelée lors d'une modification
 */
export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        }
    }
})

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;