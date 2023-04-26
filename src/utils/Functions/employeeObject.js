/**
 * Renvoie une chaine de caractère de la date récupérée du champ de sélection de date
 * @param {Date} date La valeur de la date récupérée
 * @returns {string} Chaine de caractère de la date locale (26/04/2024)
 * @private
 */
function _convertDateToString(date) {
    return new Date(date).toLocaleDateString();
}

/**
 * Fonction qui renvoie un objet avec toutes les propriétés accessible
 * @param {string} firstName
 * @param {string} lastName
 * @param {Date} birthdayDate
 * @param {Date} startDate
 * @param {string} street
 * @param {string} city
 * @param {string} states
 * @param {number} zipCode
 * @param {string} department
 * @returns {{firstName, lastName, zipCode, city, street, department, birthDate: string, startDate: string, states}}
 * @constructor
 */
export default function Employee(
    firstName,
    lastName,
    birthdayDate,
    startDate,
    street,
    city,
    states,
    zipCode,
    department
    ) {
    return {
        firstName: firstName,
        lastName: lastName,
        birthDate: _convertDateToString(birthdayDate),
        startDate: _convertDateToString(startDate),
        street: street,
        city: city,
        states: states,
        zipCode: zipCode,
        department: department,
    }
}