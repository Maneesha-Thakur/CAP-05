 // Fetch todos from the API
 fetch('https://jsonplaceholder.typicode.com/todos')
 // fetch('https://jsonplaceholder.typicode.com/todos')
     .then(response => response.json())
     .then(data => {
         const todosTableBody = document.getElementById('todosTableBody');

         // Loop through the todos and create rows for the table
         data.forEach(todo => {
             const row = document.createElement('tr');
             row.innerHTML = `
                 <td>${todo.id}</td>
                 <td>${todo.title}</td>
                 <td>${todo.completed ? 'Completed' : 'Not Completed'}</td>
             `;
             todosTableBody.appendChild(row);
         });
     })
     .catch(error => {
         console.error('Error fetching todos:', error);
     });