// Task:
// Create an HTML file with a button labeled "Fetch Users".
// Upon clicking the button, use the fetch() function to retrieve user data from the Reqres API.
// Display the user data in a visually appealing manner on the webpage.
// Use CSS to style the user information.
// Guidelines:
// Create a JavaScript file index.js to write the logic for fetching and displaying user data.
// Use the Reqres API to fetch user data.
// The displayed information should include at least the user's name, email, and avatar.



let a= document.getElementById('userContainer')
let button= document.getElementById('fetchButton')

button.addEventListener('click',function(){
         fetch('https://reqres.in/api/users')
        .then(response=>response.json())
        .then(data=>{
            console.log("Data",data)
                let users=data.data
           
                 users.forEach(user=>{
                    let usercard=document.createElement('div')
                   
                    usercard.className='user-card'
                    let image=document.createElement('img')
                    image.src=user.avatar
                image.alt = `${user.first_name} ${user.last_name}'s avatar`;
                  
                const userName = document.createElement('h2');
                userName.textContent = `${user.first_name} ${user.last_name}`;

                const userEmail = document.createElement('p');
                userEmail.textContent = `Email: ${user.email}`;
                usercard.appendChild(image)
                usercard.appendChild( userEmail)
                usercard.appendChild( userName)
                a.append(usercard)
                 })
     
        })
    .catch(error => console.error('Error fetching users:', error));

})
