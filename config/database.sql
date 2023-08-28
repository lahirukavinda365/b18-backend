CREATE DATABASE payment_management


CREATE TABLE customers(
 
    customer_id varchar(36) PRIMARY KEY,
    customer_name varchar(100)

);


CREATE TABLE invoices(
 
    invoice_id varchar(36) PRIMARY KEY,
    customer_id varchar(36),
    invoice_amount decimal(10,2),
    invoice_date date,
    due_date date,
    due_payment decimal(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers (customer_id) ON DELETE CASCADE 
);


INSERT INTO customers (customer_id, customer_name)
VALUES
    (UUID(), 'John Doe'),
    (UUID(), 'Jane Smith'),
    (UUID(), 'Michael Johnson'),
    (UUID(), 'Emily Williams'),
    (UUID(), 'David Brown');


INSERT INTO invoices (invoice_id, customer_id, invoice_amount, invoice_date, due_date, due_payment)
VALUES
    (UUID(), '9ad3db38-4572-11ee-bbee-b4a9fca2ac7c', 250.00, '2023-08-01', '2023-08-15', 250.00),
    (UUID(), '9ad3db38-4572-11ee-bbee-b4a9fca2ac7c', 150.75, '2023-08-05', '2023-08-20', 150.75),
    (UUID(), '9ad3e024-4572-11ee-bbee-b4a9fca2ac7c', 500.20, '2023-08-10', '2023-08-25', 500.20),
    (UUID(), '9ad3e024-4572-11ee-bbee-b4a9fca2ac7c', 75.50, '2023-08-15', '2023-08-30', 75.50),
    (UUID(), '9ad3e024-4572-11ee-bbee-b4a9fca2ac7c', 1000.00, '2023-08-20', '2023-09-04', 1000.00);
