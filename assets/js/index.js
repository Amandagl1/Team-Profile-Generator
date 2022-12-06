const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = ({ employee, id, email, officeNumber }) => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>README Generator</title>
</head>
<body>
    <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header"></div>
        <div class="card-body text-info">
          <h4 class="card-title">${employee}</h4>
          
          <p class="card-text">ID: ${id}</p>
          <p class="card-text">Email: ${email}</p>
          <p class="card-text">Office Number: ${officeNumber}</p>
        </div>
      </div>
</body>
</html>`

inquirer
// User prompt to create index.html
.prompt([
    {
    // User selects if they are an Manager, Engineer, or Intern
      type: 'option',
      message: [
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
        message: 'What is the office number?',
        name: 'officeNumber',
    },


  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
  }
  );