DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;


CREATE TABLE department (
     id INT NOT NULL PRIMARY KEY,
    name VARCHAR(50) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NULL,
    salary VARCHAR(50) NULL,
    department_id INT NULL,
    PRIMARY KEY (id),
    ON DELETE CASCADE
);

CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(50) NULL,
last_name VARCHAR(50) NULL,
role_id INT NULL,
manager_id INT NULL,
PRIMARY KEY (id),
ON DELETE SET NULL
);

