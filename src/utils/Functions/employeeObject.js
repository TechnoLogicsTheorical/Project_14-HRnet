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
        birthDate: birthdayDate,
        startDate: startDate,
        street: street,
        city: city,
        states: states,
        zipCode: zipCode,
        department: department,
    }
}