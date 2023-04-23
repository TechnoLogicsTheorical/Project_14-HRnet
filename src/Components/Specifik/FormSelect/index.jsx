import React from 'react';
import styled from 'styled-components';

const SelectInput = styled.select`
  display: block;
  font-size: inherit;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
`;

/**
 * Composant s'occupant de la gestion de génération des balises enfants par rapport à une liste d'éléments
 * @param {array} arrayList Liste d'élément dans un tableau
 * @param {string} name Nom correspondant à l'élément envoyé
 * @param {string} id Identifiant unique de l'élément
 * @returns {JSX.Element}
 * @constructor
 */
export default function Select({arrayList, name, id}) {
    return (
        <SelectInput name={name} id={id}>
            {arrayList.map((element) => (
                <option key={element.abbreviation}>{element.name}</option>
            ))}
        </SelectInput>
    )
}