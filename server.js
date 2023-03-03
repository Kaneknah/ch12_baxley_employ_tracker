const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "Superman1!",
	database: "employee_db",
});

connection.connect(function (err) {
	if (err) throw err;
	starterPrompt();
});

function starterPrompt() {
	inquirer
		.prompt({
			type: "list",
			name: "starter",
			message: "What would you like to do?",
			choices: [
				"View Employees",
				"View Roles",
				"View Departments",
				"Add Employee",
				"Add Role",
				"Add Department",
				"Update Employee Role",
				"End",
			],
		})
		.then(function ({ task }) {
			switch (task) {
				case "View Employees":
					viewEmployee();
					break;

				case "View Roles":
					viewRoles();
					break;

				case "View Departments":
					viewDepartments();
					break;

				case "Add Employee":
					addEmployee();
					break;

				case "Add Role":
					addRoles();
					break;

				case "Add Department":
					addDepartment();
					break;

				case "Update Employee Role":
					updateEmployeeRole();
					break;

				case "End":
					connection.end();
					break;
			}
		});
}

function viewEmployees() {
	console.log("Employees");

	var query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name,' ',m.last_name) AS manager FROM employee e LEFT JOIN role r ON e.role_id = r.id LEFT JOIN department d on d.id = r.department_id LEFT JOIN employee m ON m.id = e.manager_id`;

	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table(res);

		starterPrompt();
	});
}
function viewRoles() {}

function viewDepartments() {
	let query = "SELECT * from department";
	db.query(query, function (err, res) {
		if (err) throw err;
	});
}

function addEmployee() {}
function addRole() {}
function addDepartment() {}

function updateEmployeeRole() {}
