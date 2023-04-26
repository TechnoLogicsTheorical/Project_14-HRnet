import React from 'react';
import Title from '../Components/Generics/Title';
import { NavLink } from 'react-router-dom';

/**
 * Composant page en cas d'une mauvaise URL saisie ou aucune page ne pouvant correspondre aux déclarations du routeur
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function Error() {
    return (
        <>
            <Title level={4} name='Error' />
            <br />
            <br />
            <NavLink to={'/'}>Retourner à la page d'accueil</NavLink>
        </>
    )
}