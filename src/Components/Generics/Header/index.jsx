import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const WebsiteTitle = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

export default function Header() {
    return (
        <Head>
            <WebsiteTitle to='/'>
                <h1>HRnet</h1>
            </WebsiteTitle>
            <NavLink to='/'>View Current Employees</NavLink>
        </Head>
    );
}