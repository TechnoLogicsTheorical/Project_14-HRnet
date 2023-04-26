import React from 'react';
import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerElement = styled(DatePicker)`
  display: block;
  font-size: inherit;
  padding: 7px 12px;
  border-radius: 5px;
  border: 1px solid black;
`;

/**
 * Composant de champs de formulaire utilisant une librairie s'occupant d'afficher aux cliques un sélecteur de date.
 * @param {string} stateProp Variable de state ayant la date du jour
 * @param {function} changeFunction Une fonction qui survient quand l'événement de changement de valeur s'effectue
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function DatePickerInput({stateProp, changeFunction}) {
    return (
        <DatePickerElement
            selected={stateProp}
            onChange={changeFunction}
            required
        />
    )
}