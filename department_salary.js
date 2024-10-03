

//Task 1- Create a Department Structure
// This just displays a department of employees alongside their name, salary and subordinates

const company = {
    departments: [
        {
            departmentName: 'Cybersecurity',
            employees: [
                {
                    name: 'Mamun',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Logan',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Tyler',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'Mark Zuckerburg',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Network Administration',
            employees: [
                {
                    name: 'Elon Musk',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Jeff Bezos',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Taylor Swift',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

//Task 2- Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    // Loops through each employee in the department
    department.employees.forEach(function(employee) {
        // Add employees salary to total
        console.log(`Adding salary of ${employee.name}: $${employee.salary}`);
        totalSalary += employee.salary;

        // Check if employee has subordinates and add their salaries recursively
        employee.subordinates.forEach(function(subordinate) {
            console.log(`Adding subordinate ${subordinate.name}'s salary: $${subordinate.salary}`);
            totalSalary += subordinate.salary;

            // If subordinate has subordinates, handle it recursively
            totalSalary += calculateEmployeeSalary(subordinate);
        });
    });

    console.log(`Total salary for ${department.departmentName} department: $${totalSalary}`);
    return totalSalary;
}

// Helper function to calculate salary of an employee and their subordinates recursively
function calculateEmployeeSalary(employee) {
    let employeeTotal = employee.salary;
    employee.subordinates.forEach(function(subordinate) {
        employeeTotal += calculateEmployeeSalary(subordinate);
    });
    return employeeTotal;
}

// Testing the function for one department
const totalCybersecuritySalary = calculateDepartmentSalary(company.departments[0]);
console.log(`Total salary for the Cybersecurity department: $${totalCybersecuritySalary}`);