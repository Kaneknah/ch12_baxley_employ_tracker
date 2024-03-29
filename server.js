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

	//The Variable query will select the specifc idata from the database that is needed to render all the employees.
	let query =
		'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name," ",manager.last_name) AS manager FROM employee employee LEFT JOIN role role ON employee.role_id = role.id LEFT JOIN department department on department.id = role.department_id LEFT JOIN employee manager ON manager.id = employee.manager_id';

	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table(res);

		starterPrompt();
	});
}
//Function for rendering the specific items for viewing all roles.
function viewRoles() {
	let query = "SELECT * FROM role";
	connection.query(query, function (err, res) {
		if (err) throw err;

		console.table("Roles", res);

		starterPrompt();
	});
}
//Function for rendering the specific items for viewing all Employees.
function viewDepartments() {
	let query = "SELECT * from department";
	connection.query(query, function (err, res) {
		if (err) throw err;
		console.table("Department", res);
		starterPrompt();
	});
}
// functions for adding a new employee to the database
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
				name: "last_name",
				message: "What is the Employee's Last Name Name?",
			},
			{
				type: "list",
				name: "role",
				message: "what is the Employee's role ID 1-8",
				choices: ["1", "2", "3", "4", "5", "6", "7", "8"],
			},
			{
				type: "list",
				name: "manager",
				message:
					"What is the Employee's Manage ID. 1. James Baxley, 3. CJ Paskowski, 5. Titan Brash, 7. Alex Waters.",
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

function addRole() {
	console.log("Please add a New Role");
	inquirer
		.prompt([
			{
				type: "input",
				name: "title",
				message: "What is the title of the new Role?",
			},
			{
				type: "input",
				name: "salary",
				message: "what is the Role's Salary",
			},
			{
				type: "list",
				name: "department_id",
				message:
					"What is the Role's department ID. 1. Sales , 2. Engineering, 3. Finance, 4. Legal ",
				choices: ["1", "2", "3", "4"],
			},
		])
		.then((answer) => {
			connection.query("INSERT INTO role SET ?", {
				title: answer.title,
				salary: answer.salary,
				department_id: answer.department_id,
			});
			let query = "SELECT * FROM role";
			connection.query(query, function (err, res) {
				if (err) throw err;
				console.table("Roles", res);
				starterPrompt();
			});
		});
}

//Function for adding a new Department
function addDepartment() {
	console.log("Please add a New Department");
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "what is the name of the new Department?",
			},
		])
		.then((answer) => {
			connection.query("INSERT INTO department SET ?", {
				name: answer.name,
			});
			let query = "SELECT * FROM department";
			connection.query(query, function (err, res) {
				if (err) throw err;
				console.table("Department", res);
				starterPrompt();
			});
		});
}

//Updates and Employee Role
function updateEmployeeRole() {
	console.log("Please Update an Employee");
	const query = `SELECT * FROM employee ORDER BY last_name`;
	connection.query(query, (err, res) => {
		if (err) throw err;
		//created the const employeeList that will be utilized to give a list of employees for the user to choose.
		const employeeList = res.map(({ id, first_name, last_name }) => ({
			value: id,
			name: `${first_name} ${last_name}`,
		}));
		//    console.log(employeeList)
		return inquirer
			.prompt([
				{
					name: "title",
					type: "list",
					message: "select employee to update their role",
					choices: employeeList,
				},
			])
			.then((answers) => {
				// console.log(employeeList)
				const query = `SELECT * FROM role`;
				connection.query(query, (err, res) => {
					if (err) throw err;
					//created the const roleList that will be utilized to give a list of the roles for the user to choose.
					const roleList = res.map(({ id, title, salary }) => ({
						value: id,
						title: `${title}`,
						salary: `${salary}`,
						name: `${title}`,
					}));

					return (
						inquirer
							.prompt([
								{
									type: "list",
									name: "role",
									message: "select role",
									choices: roleList,
								},
							])

							//Updated the provided data to the role_id
							.then((ans) => {
								const query = `UPDATE employee SET role_id = ? WHERE id = ?`;
								const params = [ans.role, answers.title];
								// console.log(answers.title)
								// console.log(ans.role)
								connection.query(query, params, (err, res) => {
									if (err) throw err;
									starterPrompt();
								});
							})
					);
				});
			});
	});
}
// function deleteEmployee(){

//Ends the terminal application
function connectionEnd() {
	connection.end();
	console.log("Thank You");
}
