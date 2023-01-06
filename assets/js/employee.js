class Manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }
  
    setName() {
        return this.name;
    }

    setId() {
        return this.id;
    }

    setEmail() {
        return this.email;
    }

    setOfficeNumber() {
        return this.officeNumber;
    }

    setMember() {
        return "Manager";
    }

    printInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Employee ID: ${this.id}`);
      console.log(`Email Address: ${this.email}`);
      console.log(`Office Number: ${this.officeNumber}`);
    }
  }
  
  const manager = new Manager('Amanda', 87234, 'leeandama87@gmail.com', 12);
  
  manager.printInfo();

module.exports = Manager