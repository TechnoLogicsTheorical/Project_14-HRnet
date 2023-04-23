import { createSlice } from '@reduxjs/toolkit';
import { fakeEmployees } from '../../Constants/fakeEmployees.js';

const initialState = [
    ...fakeEmployees
]

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
            // console.log(state)
        }
    }
})

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;