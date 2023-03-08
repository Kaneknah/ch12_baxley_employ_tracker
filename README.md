# ch12_baxley_employ_tracker

## Table of Contents:

- [Description](#description)
- [Usage](#usage)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Credits](#credits)
- [License](#license)

## Description

This project was the creation of application that allows a user to track the employees in a company. The application utilizes SQL to create, view, and update databases of departments, roles, and employees and connect them all together so that each employee is connected to a role and a department in which he/she works. The application can not be seen on a static webpage so a walkthrough video has been created to show functionality. (Video Link)

## Acceptance Criteria

GIVEN a command-line application that accepts user input<br>
WHEN I start the application<br>
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br>
WHEN I choose to view all departments<br>
THEN I am presented with a formatted table showing department names and department ids<br>
WHEN I choose to view all roles<br>
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br>
WHEN I choose to view all employees<br>
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br>
WHEN I choose to add a department<br>
THEN I am prompted to enter the name of the department and that department is added to the database<br>
WHEN I choose to add a role<br>
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br>
WHEN I choose to add an employee<br>
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database<br>
WHEN I choose to update an employee role<br>
THEN I am prompted to select an employee to update and their new role and this information is updated in the database<br>

## Installation

A user will need to instal the package.json modules in order to run this application. The user may do this by simply running "npm i" in the terminal. The user will also need to instal the mySQL by running "mysql -uroot -p" and entering their SQL password. The user would then need to run the schema by entering "SOURCE ./sql/schema.sql;". finally the User would have to run the seeds in order for the application to work. This is done by entering "SOURCE ./sql/seeds/sql;"

## Usage

The user will begin the application by entering "npm start" in the terminal and following the prompts. The user may do the following processes thought the terminal.<br>

- View Employees
- View Roles
- View Departments
- Add Employee
- Add Role
- Add Department
- Update Employee Role
- End

After selecting these option the user will be presented with the displayed information or presented with more options to edit the database. When prompted to edit an employee's role, the user will be given a list of employees to choose from and can alter their roles via inquirer.

## Contribution

N/A

## Testing

No testing was utilized for this project

## Credits

### Team Members:

- James Baxley | Github: [Kaneknah](https://github.com/Kaneknah)

### Technologies utilized:

- SQL
- Express.js
- Node.js
- Inquire

### GitHub Link: <https://github.com/Kaneknah/ch12_baxley_employ_tracker>

## License

N/A
...
