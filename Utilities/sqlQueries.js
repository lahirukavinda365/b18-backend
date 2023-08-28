const queries = {
    getAllCustomers: `
      SELECT * FROM customers;
      `,

    getInvoiceData: `
     SELECT * FROM invoices WHERE customer_id = ?;
    ` ,
    getCustomerById: `
    SELECT * FROM customers WHERE customer_id = ?;
    `
    
  };
  
export default queries;




























