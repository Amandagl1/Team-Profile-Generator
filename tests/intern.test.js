const Intern = require('../lib/Intern')

test ('test intern values', () => {
    const employee = new Intern('Amanda', '3452', 'leeandama87@gmail.com', 'SMU')
    expect(employee.schoolName).toBe('SMU')
    expect(employee.getSchoolName()).toBe('SMU')
    expect(employee.getRole()).toBe('Intern')
});