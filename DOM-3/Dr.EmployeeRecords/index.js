

const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting to a server

  // Get values from form inputs
  const name = document.getElementById("name").value;
  const doctorID = document.getElementById("docID").value;
  const specialization = document.getElementById("dept").value;
  const experience = parseInt(document.getElementById("exp").value);
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mbl").value;

  // Determine the role based on experience
  let role = "";
  if (experience > 5) {
    role = "Senior";
  } else if (experience >= 2 && experience <= 5) {
    role = "Junior";
  } else {
    role = "Trainee";
  }

  // Create a new table row
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${doctorID}</td>
    <td>${specialization}</td>
    <td>${experience}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${role}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  // Add an event listener to the delete button
  const deleteButton = newRow.querySelector(".delete-btn");
  deleteButton.addEventListener("click", function () {
    tableBody.removeChild(newRow);
  });

  // Append the new row to the table body
  tableBody.appendChild(newRow);

  // Clear the form inputs
  form.reset();
});
