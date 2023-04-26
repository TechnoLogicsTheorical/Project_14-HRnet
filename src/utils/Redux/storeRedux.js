import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './employee/employeeSlice.js';

/**
 * Déclaration du stockage globale de Redux et de ses réducteurs
 */
export const store = configureStore({
    reducer: {
        employee: employeeReducer
    }
});