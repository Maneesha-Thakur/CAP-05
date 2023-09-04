
const form= document.querySelector("form");
const taskNameInput = document.getElementById("task")
const prioritySelect = document.getElementById("priority");
let tableBody = document.querySelector("tbody")

form.addEventListener("submit",function(e)
{
    e.preventDefault();

            // Get the values from the form
            const taskName = taskNameInput.value;
            const priority = prioritySelect.value;
    
            // Create a new table row
            const row = document.createElement("tr");
    
            // Create and add the task name column
            const taskNameColumn = document.createElement("td");
            taskNameColumn.innerText = taskName;
            row.appendChild(taskNameColumn);
    
            // Create and add the priority column with background color
            const priorityColumn = document.createElement("td");
            priorityColumn.innerText = priority;
            if (priority === "High") {
                priorityColumn.style.backgroundColor = "red";
            } else {
                priorityColumn.style.backgroundColor = "green";
            }
            row.appendChild(priorityColumn);
    
            // Create and add the favorite column
            const favoriteColumn = document.createElement("td");
            favoriteColumn.innerText = "❤️"; // Placeholder for the favorite icon
            row.appendChild(favoriteColumn);
    
            // Add the row to the table
            tableBody.appendChild(row);
    
            // Clear the form inputs
            taskNameInput.value = "";
            prioritySelect.value = "";
    
        });




