// Creating function for every new manager
function makeManagerCard(manager) {
    return `
    <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <!-- The position of the employee (Manager, Engineer, Intern) -->
          <h3 class="card-title">${manager.name}</h3>    
        </div>
        <div class="card-body text-info">
          <h4 class="card-text"></h4>
          <p class="card-text">ID: ${manager.id}</p>
          <p class="card-text">Email: ${manager.email}</p>
          <p class="card-text">Office Number: ${manager.officeNum}</p>
        </div>
      </div>
    `
};

// Creating function for every new engineer
function makeEngineerCard(engineer) {
    return `
    <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <!-- The position of the employee (Manager, Engineer, Intern) -->
          <h3 class="card-title">${engineer.name}</h3>    
        </div>
        <div class="card-body text-info">
          <h4 class="card-text"></h4>
          <p class="card-text">ID: ${engineer.id}</p>
          <p class="card-text">Email: ${engineer.email}</p>
          <p class="card-text">Office Number: ${engineer.githubUsername}</p>
        </div>
      </div>
    `
};

// Creating function for every new intern
function makeInternCard(intern) {
    return `
    <div class="card border-info mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <!-- The position of the employee (Manager, Engineer, Intern) -->
          <h3 class="card-title">${intern.name}</h3>    
        </div>
        <div class="card-body text-info">
          <h4 class="card-text"></h4>
          <p class="card-text">ID: ${intern.id}</p>
          <p class="card-text">Email: ${intern.email}</p>
          <p class="card-text">Office Number: ${intern.schoolName}</p>
        </div>
      </div>
    `
};

function insertCard(team) {
    const cardArray = [];
    cardArray.push(team.filter(emp => emp.getRole() === 'Manager').map(manager => makeManagerCard(manager)));
    cardArray.push(team.filter(emp => emp.getRole() === 'Engineer').map(engineer => makeEngineerCard(engineer)));
    cardArray.push(team.filter(emp => emp.getRole() === 'Intern').map(intern => makeInternCard(intern)));

    return cardArray.join('');
}


module.exports = function (team) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap stylesheet -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <!-- Custom stylesheet -->
    <link rel="stylesheet" href="css/style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="card-container">
        ${insertCard(team)}
    </div>
</body>
</html>
    `
};