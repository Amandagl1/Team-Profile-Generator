const Engineer = require('../lib/Engineer')

test ('test engineer values', () => {
    const employee = new Engineer('Amanda', '3452', 'leeandama87@gmail.com', 'Amandagl1')
    expect(employee.githubUsername).toBe('Amandagl1')
    expect(employee.getGithubUsername()).toBe('Amandagl1')
    expect(employee.getRole()).toBe('Engineer')
});