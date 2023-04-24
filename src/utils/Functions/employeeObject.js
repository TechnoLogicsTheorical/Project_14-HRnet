function convertDate(date) {
    return new Date(date).toLocaleDateString();
}

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
        birthDate: convertDate(birthdayDate),
        startDate: convertDate(startDate),
        street: street,
        city: city,
        states: states,
        zipCode: zipCode,
        department: department,
    }
}