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
				"View All Departments",
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

				case "View All Department":
					viewAllDepartment();
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

function viewEmployees() {
	console.log("Employees")
	let query e
}

function viewEmployeesByManager() {}

function viewAllDepartments() {
	let query = 'SELECT * from department'
	db.query(query, function(err, res){
		if(err)throw err;
	})
}

function addEmployee() {}

function employeeData() {}
