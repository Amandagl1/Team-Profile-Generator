const inquirer = require('inquirer');
const fs = require('fs');
const express = require('express');
const app = express();
const generateHTML = ({ employee, name, email, id, github }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css">
    <title>README Generator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="card-container">
      <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <!-- The position of the employee (Manager, Engineer, Intern) -->
          <h3 class="card-title">${employee}</h3>    
        </div>
        <div class="card-body text-info">
          <!-- Employee's name -->
          <h4 class="card-text">${name}</h4>
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">Email: ${email}</p>
          <p class="card-text">GitHub Username: ${github}</p>
        </div>
      </div>
    </div>
</body>
</html>`

// User prompt to create index.html
inquirer.prompt([
    {
    // User selects if they are an Manager, Engineer, or Intern
      type: 'list',
      message: 'Which type of employee are you?',
      choices: [
        'Manager ',
        'Engineer ',
        'Intern '
      ],
      name: 'employee'
    },
    {
      type: 'input',
      message: 'What is their name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is their email?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is their ID?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'choices',
      message: 'Any other team members?',
      choices: [
        'Yes',
        'No'
      ],
      name: 'members',

    },
    

  ])

  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
  }
  );

app.use(express.static(__dirname + 'assets/css/style.css'));

app.get('/', (req , res) => {
        res.sendFile(__dirname + '/index.html');
    });