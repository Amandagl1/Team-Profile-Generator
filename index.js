const inquirer = require('inquirer');
const Manager = require('./lib/Manager')

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
        console.log(answer);
        if(answer.task === 'Manager') {
            //Ask manager questions
        }
        // .then(answers => {const manager = new Manager('answer.name, answer.id, answer.email')})
        // create an empty array
        // push.manager('')
    })
}

mainMenu();