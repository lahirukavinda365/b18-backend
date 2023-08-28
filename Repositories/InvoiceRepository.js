import queries from "../Utilities/sqlQueries.js";
import connection from "../config/database.js";

export const GetInvoiceData = async (customer_id) => {
    try {
        
        return new Promise(async (resolve, reject) => { 
            connection.query(
              queries.getInvoiceData,[customer_id],         
              (err, result) => {
                if (err) {
                  reject(err);
                } else {
                
                  resolve(result);
                }
              }
            );
          });

        
        } catch (error) {
          throw error;
        }
}