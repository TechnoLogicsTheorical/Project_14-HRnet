import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import styled from 'styled-components';
const RouterLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:visited {
    color: white; 
  }
`;

const listEmployeePage = <RouterLink to='/list'>List Employee</RouterLink>
const addEmployeePage = <RouterLink to='/'>Add Employee</RouterLink>
const navItems = [listEmployeePage, addEmployeePage];

/**
 * Composant d'entête de page utilisant les liens de routages des pages
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function Header() {
    return (
        <>
            <AppBar component="nav" position='static'>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        HRnet
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, index) => (
                            <Button key={index} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}