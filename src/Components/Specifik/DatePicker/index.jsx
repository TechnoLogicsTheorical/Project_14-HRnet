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

export default function DatePickerInput({stateProp, changeFunction}) {
    return (
        <DatePickerElement selected={stateProp} onChange={changeFunction} />
    )
}