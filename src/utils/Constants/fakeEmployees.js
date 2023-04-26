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
    )
]