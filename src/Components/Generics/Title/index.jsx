import React from 'react';
import Typography from '@mui/material/Typography';

/**
 * Composant de titre
 * @param {number} level Nombre entre 1 et 6 qui détermine la taille du titre
 * @param {string} name Chaine de caractère détermine le nom du titre
 * @returns {JSX.Element} Les éléments HTML nécessaires
 * @constructor
 */
export default function Title({level, name}) {
    return (
        <Typography
            variant={'h' + String(level)}
            m={3}
            align={'center'}
        >
            {name}
        </Typography>
    )
}