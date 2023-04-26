import Employee from '../Functions/employeeObject.js';

/**
 * Liste de faux employées permettant d'avoir de la donnée factice affichable dans la fonctionnalité page d'affichage du tableau.
 */
export const fakeEmployees = [
    Employee(
        "John",
        "Doe",
        "1976-10-18",
        "2021-12-17",
        "35, selfy road",
        "Clearwater",
        "Minnesota",
        "23412",
        "Engineering",
    ),
    Employee(
        "Jane",
        "Doe",
        "1979-01-23",
        "2001-04-23",
        "35, long street",
        "Chicago",
        "Illinois",
        "57780",
        "Manager",
    ),
    Employee(
        "Anthony",
        "Marc...",
        "1990-10-12",
        "2001-06-26",
        "Canada Street",
        "Canada",
        "Quebec",
        "11246",
        "Humain Research",
    ),
    Employee(
        'Louis',
        "Delplace",
        "1996-10-10",
        "2014-01-24",
        "Rue Maulois",
        "Melun",
        "France",
        "77000",
        "Sales",
    ),
    Employee(
        "Hamadou",
        "Cisocko",
        "1990-03-12",
        "2020-12-12",
        "Avenue Jean-Baptise",
        "Maulois",
        "France",
        "11223",
        "Sales"
    )
]