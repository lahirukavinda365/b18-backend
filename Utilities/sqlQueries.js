const queries = {
    getAllCustomers: `
    SELECT c.customer_id,c.customer_name FROM customers c,invoices i WHERE c.customer_id = i.customer_id and i.due_date <= ?;
      `,

    getInvoiceData: `
     SELECT * FROM invoices WHERE customer_id = ?;
    ` ,
    getCustomerById: `
    SELECT * FROM customers WHERE customer_id = ?;
    `
    
  };
  
export default queries;




























