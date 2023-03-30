import React from 'react';
import styled from 'styled-components';

const Content = styled.h2`
  
`;

export default function Title({name}) {
    return (
        <Content>{name}</Content>
    )
}