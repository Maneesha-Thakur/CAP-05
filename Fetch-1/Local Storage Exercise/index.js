const userForm = document.getElementById('userForm');
const displayButton = document.getElementById('displayButton');
const userDataTable = document.getElementById('userDataTable');

userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let user = {
        name,
        age
    };
    localStorage.setItem('userData', JSON.stringify(user));

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
});

displayButton.addEventListener('click', function () {
    let userData = JSON.parse(localStorage.getItem('userData'));
    userDataTable.innerHTML = '';

    if (userData) {
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>Name:</td>
            <td>${userData.name}</td>
        `;
        userDataTable.appendChild(tableRow);

        const ageRow = document.createElement('tr');
        ageRow.innerHTML = `
            <td>Age:</td>
            <td>${userData.age}</td>
        `;
        userDataTable.appendChild(ageRow);
    } else {
        // Display a message if no data is found
        userDataTable.innerHTML = '<tr><td colspan="2">No data found</td></tr>';
    }
});
