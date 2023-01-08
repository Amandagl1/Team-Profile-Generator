const Manager = require('../lib/Manager')

test ('test manager values', () => {
    const employee = new Manager('Amanda', '3452', 'leeandama87@gmail.com', '112')
    expect(employee.officeNum).toBe('112')
    expect(employee.getOfficeNum()).toBe('112')
    expect(employee.getRole()).toBe('Manager')
});