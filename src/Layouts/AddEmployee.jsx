import React from 'react';

import Header from '../Components/Generics/Header';
import Container from '../Components/Generics/Container';
import Title from '../Components/Generics/Title';

export default function AddEmployee () {
    return (
        <>
            <Header />
            <Container>
                <Title name='Create Employee' />
            </Container>
        </>
    )
}