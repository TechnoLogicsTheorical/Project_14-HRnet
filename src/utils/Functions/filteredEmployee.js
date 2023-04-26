export default function filteredEmployeesList(searchTextValue, arrayList) {

    const valueSearchText = searchTextValue.toLowerCase();
    const filteredResult = arrayList.filter( (employee) => {
        const employeeFirstNameValue = employee.firstName.toLowerCase();
        const employeeLastNameValue = employee.lastName.toLowerCase();

        const validSearch =
            employeeFirstNameValue.includes(valueSearchText)
            || employeeLastNameValue.includes(valueSearchText);

        // console.log('Result valid ? ', validSearch);
        return validSearch;
    })

    // console.log('Filtered Result', filteredResult);
    return filteredResult;
}