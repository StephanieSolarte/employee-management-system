class employee {
    constructor(name,department) {
        this.name = name;
        this.department = department;
    }

describe() {
    return `employee: ${this.name} | department: ${this.department}`;
    }
}

class manager extends employee {
    constructor(name, department, teamSize) {
        super(name,department);
        this.teamSize = teamSize;
    }
    describe() {
        return `manager: ${this.name} | department: ${this.department} | team size: ${this.teamSize}`;
    }
}

class company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        console.log("--- Company Employee List ---");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

const emp1 = new employee("Stephanie", "Marketing");
const emp2 = new employee("Carissa", "Management");

const mgr1 = new manager("Alyssa", "Human Resources", 8);
const mgr2 = new manager("Luke", "IT", 5);

const myCompany = new company();

myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.addEmployee(mgr2);

myCompany.listEmployees();