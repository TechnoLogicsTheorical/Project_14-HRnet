import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee/employeeSlice.js';

export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
});