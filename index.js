const inquirer = require('inquirer')
// Requiring in files for each role
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const team = []
const fs = require('fs')
const path = require('path')
const generateHTML = require('./utils/generateHTML')

function mainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'task',
        message: 'What type of employee would you like to create?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'Done'
        ]
    }) .then(answer => {
        if(answer.task === 'Manager') {
            askManager();
        } else if (answer.task === 'Engineer') {
            askEngineer();
        } else if (answer.task === 'Intern') {
            askIntern();
        } else {
            fs.writeFileSync(path.join(__dirname, '/dist/', 'team.html'), generateHTML(team));
        }
    })
};

function askManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the employee name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee id.'
        },        
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employee email.'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Enter the employee office number.'
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        team.push(manager);
        mainMenu();
    })
};

function askEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineer name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the engineer id.'
        },        
        {
            type: 'input',
            name: 'email',
            message: 'Enter the engineer email.'
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: "Enter the engineer's GitHub username."
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.githubUsername);
        team.push(engineer);
        mainMenu();
    })
};

function askIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the intern name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the intern id.'
        },      
        {
            type: 'input',
            name: 'email',
            message: 'Enter the intern email.'
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "Enter the intern's school name."
        },

    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.schoolName);
        team.push(intern);
        mainMenu();
    })
};

mainMenu();

