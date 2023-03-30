import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Container({children}) {
    return (
        <Content>
            {children}
        </Content>
    )
}