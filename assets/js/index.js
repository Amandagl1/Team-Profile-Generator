const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = ({ employee, id, email, officeNumber })

inquirer
.prompt([
    {
    // User selects if they are an Manager, Engineer, or Intern

    },
    {
      type: 'input',
      message: 'What is their name?',
      name: 'employee',
    },
    {
      type: 'input',
      message: 'What is their email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is their ID?',
        name: 'ID',
    },

  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
  }
  );