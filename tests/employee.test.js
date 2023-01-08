const Employee = require('../lib/Employee')

test ('test employee values', () => {
    const employee = new Employee('Amanda', '3452', 'leeandama87@gmail.com')
    expect(employee.name).toBe('Amanda')
    expect(employee.id).toBe('3452')
    expect(employee.email).toBe('leeandama87@gmail.com')
    expect(employee.getName()).toBe('Amanda')
    expect(employee.getId()).toBe('3452')
    expect(employee.getEmail()).toBe('leeandama87@gmail.com')
    expect(employee.getRole()).toBe('Employee')
});
  