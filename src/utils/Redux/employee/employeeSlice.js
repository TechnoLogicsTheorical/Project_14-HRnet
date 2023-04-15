import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
};

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state) => {
            return 'Hello';
        }
    }
})

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;