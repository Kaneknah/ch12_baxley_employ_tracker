const mysql = require("mysql2");
const inquirer = require("inquirer");
require("console.table");

//Setting up out connection to mysql
var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "Superman1!",
	database: "employee_db",
});

//Initializing connection with the starterPrompt function.
connection.connect(function (err) {
	if (err) throw err;
	starterPrompt();
});

//Function for starting our inquire prompts for the user.
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
		//Switch statement for running specific functions based in inquire responses.
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

//Function for rendering the specific items for viewing all Employees.
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
	inquirer
		.prompt([
			{
				type: "input",
				name: "first_name",
				message: "What is the Employee's First Name?",
			},
			{
				type: "input",
				name: "new_role",
				message: "what is the Employee's role ID 1-8",
			},
			{
				type: "list",
				name: "manager",
				message: "what is the Employee's Manage ID",
				choices: ["1", "3", "5", "7"],
			},
		])
		.then((answer) => {
			connection.query("INSERT INTO employee SET ?", {
				first_name: answer.first_name,
				last_name: answer.last_name,
				role_id: answer.role,
				manager_id: answer.manager,
			});
			let query = "SELECT * FROM employee";
			connection.query(query, function (err, res) {
				if (err) throw err;
				console.table("Employees", res);
				starterPrompt();
			});
		});
}

function addRole() {}
function addDepartment() {}
function updateEmployeeRole() {}

function connectionEnd() {
	connection.end();
	console.log("Thank You");
}
