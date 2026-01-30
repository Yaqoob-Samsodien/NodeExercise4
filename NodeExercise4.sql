CREATE DATABASE `pick_n_steal`;
USE `pick_n_steal`;

CREATE TABLE `pick_n_steal`.`employee` (
  `employee_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone_number` VARCHAR(15) NOT NULL,
  `department` VARCHAR(50) NOT NULL,
  `salary` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`employee_id`));
  
INSERT INTO `pick_n_steal`.`employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES ('1', 'John', 'Doe', 'john.doe@example.com', '555-1234', 'Engineering', '85000.00');
INSERT INTO `pick_n_steal`.`employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES ('2', 'Jane', 'Smith', 'jane.smith@example.com', '555-5678', 'Marketing', '92000.00');
INSERT INTO `pick_n_steal`.`employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES ('3', 'Michael', 'Johnson', 'michael.johnson@example.com', '555-8765', 'Human Resources', '75000.00');
INSERT INTO `pick_n_steal`.`employee` (`employee_id`, `first_name`, `last_name`, `email`, `phone_number`, `department`, `salary`) VALUES ('4', 'Emily', 'Davis', 'emily.davis@example.com', '555-4321', 'Sales', '78000.00');