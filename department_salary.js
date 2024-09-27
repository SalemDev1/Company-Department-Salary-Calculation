

//Task 1- Create a Department Structure
// This just displays a departmentof employees alongside their name, ssalary and subordinates

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
