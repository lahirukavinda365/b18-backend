import queries from "../Utilities/sqlQueries.js";
import connection from "../config/database.js";

export const GetAllCustomers = async () => {
    try {
        return new Promise(async (resolve, reject) => { 
          connection.query(
            queries.getAllCustomers,         
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
  };