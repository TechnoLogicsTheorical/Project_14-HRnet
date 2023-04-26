import React from 'react';

import Header from '../Components/Generics/Header';
import Form from '../Components/Specifik/Form';
import Title from '../Components/Generics/Title/index.jsx';

/**
 * Composants de page composée de sous-éléments et donnant accès à la fonctionnalité d'ajout d'un employé
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function AddEmployee () {
    return (
        <>
            <Header />
            <Title name={'Create Employee'} level={4} />
            <Form />
        </>
    )
}