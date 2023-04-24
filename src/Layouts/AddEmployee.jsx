import React from 'react';

import Header from '../Components/Generics/Header';
import Form from '../Components/Specifik/Form';
import Title from '../Components/Generics/Title/index.jsx';

export default function AddEmployee () {
    return (
        <>
            <Header />
            <Title name={'Create Employee'} level={4} />
            <Form />
        </>
    )
}