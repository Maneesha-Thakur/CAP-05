// fill in javascript code here

const form = document.querySelector("form");
const tbody = document.querySelector("tbody");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form inputs
    const name = document.getElementById("name").value;
    const employeeId = document.getElementById("employeeID").value;
    const department = document.getElementById("department").value;
    const experience = parseFloat(document.getElementById("exp").value);
    const email = document.getElementById("email").value;
    const mobileNumber = document.getElementById("mbl").value;

    // Determine role based on experience
    let role;
    if (experience > 5) {
        role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
    } else {
        role = "Fresher";
    }

    // Create a new row in the table
    const row = tbody.insertRow();
    
    // Insert data into the row
    row.innerHTML = `
        <td>${name}</td>
        <td>${employeeId}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobileNumber}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    // Add delete functionality
    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
        tbody.removeChild(row);
    });

    // Clear form inputs after submission
    form.reset();
});

