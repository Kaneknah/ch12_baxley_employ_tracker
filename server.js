const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createconnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "Password123",
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
				"View Employees by Department",
				"Add Employee",
				"Remove Employees",
				"Update Employee Role",
				"Add Role",
				"End",
			],
		})
		.then(function ({ task }) {
			switch (task) {
				case "View Employees":
					viewEmployee();
					break;

				case "View Employees by Department":
					viewEmployeeByDepartment();
					break;

				case "Add Employee":
					addEmployee();
					break;

				case "Remove Employees":
					removeEmployees();
					break;

				case "Update Employee Role":
					updateEmployeeRole();
					break;

				case "Add Role":
					addRole();
					break;

				case "End":
					connection.end();
					break;
			}
		});
}

function viewEmployees() {}

function viewEmployeesByManager() {}

function viewEmployeesByDepartment() {}

function addEmployee() {}

function employeeData() {}
