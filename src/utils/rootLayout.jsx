import React from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

// Mui depandances

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

/**
 * Retourne des éléments JSX sur toutes les pages en chargeant les sous-éléments
 * @returns {JSX.Element}
 * @constructor
 */
export default function Root() {
    return (
        <>
            <GlobalStyles />

            <CssBaseline />
            <Container maxWidth="md">
                <Outlet />
            </Container>
        </>
    )
}