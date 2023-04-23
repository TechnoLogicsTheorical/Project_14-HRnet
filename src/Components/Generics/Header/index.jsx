import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const listEmployeePage = <NavLink to='/list'>List Employee</NavLink>
const addEmployeePage = <NavLink to='/'>Add Employee</NavLink>
const navItems = [listEmployeePage, addEmployeePage];

/**
 * Composant f
 * @returns {JSX.Element}
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
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}