
INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"), 
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 150000, 1),
       ("SalesPerson", 100000, 1),
       ("Lead Engineer", 220000, 2), 
       ("Engineer", 125000, 2),
       ("Legal Team Lead", 250000, 3),
       ("Legal Aid", 120000, 3), 
       ("Lead Project Manager", 125000, 4),
       ("Government Liason", 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jane", "Doe", 1, NULL),
       ("Norah", "Rios", 2, 1),
       ("Kate", "Mellor", 3, NULL),
       ("Shiv", "Betts", 4, 3),
       ("Leen", "Hurst", 5, NULL),
       ("Gary", "Leer", 6, 5),
       ("Tom", "Cruise", 7, NULL),
       ("Daisy", "Hooper", 8, 7);