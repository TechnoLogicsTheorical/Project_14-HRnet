import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/**
 * Juste un composant qui contient tous les éléments enfants
 * @param {JSX.Element} children Les éléments enfants
 * @returns {JSX.Element}
 * @constructor
 */
export default function Container({children}) {
    return (
        <Content>
            {children}
        </Content>
    )
}