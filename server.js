const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
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
			name: "options",
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
		.then((answer) => {
			switch (answer.options) {
				case "View Employees":
					viewEmployees();
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
					addRole();
					break;

				case "Add Department":
					addDepartment();
					break;

				case "Update Employee Role":
					updateEmployeeRole();
					break;

				case "End":
					connectionEnd();
					break;
				default:
					connectionEnd();
			}
		});
}

function viewEmployees() {
	console.log("Employees");

	let query =
		'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name," ",manager.last_name) AS manager FROM employee employee LEFT JOIN role role ON employee.role_id = role.id LEFT JOIN department department on department.id = role.department_id LEFT JOIN employee manager ON manager.id = employee.manager_id';

	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table(res);

		starterPrompt();
	});
}
function viewRoles() {
	let query = "SELECT * FROM role";
	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table("Roles", res);

		starterPrompt();
	});
}

function viewDepartments() {
	let query = "SELECT * from department";
	connection.query(query, function (err, res) {
		if (err) throw err;
		console.table("Department", res);
		starterPrompt();
	});
}

function addEmployee() {
	console.log("Please add a New Employee");
}
function addRole() {}
function addDepartment() {}
function updateEmployeeRole() {}

function connectionEnd() {
	connection.end();
	console.log("Thank You");
}
