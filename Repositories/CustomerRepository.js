import queries from "../Utilities/sqlQueries.js";
import connection from "../config/database.js";

export const GetAllCustomers = async () => {
  try {
    const currentDate = new Date();

    const currentDayOfWeek = currentDate.getDay();

    const daysToAdd = [12, 11, 10, 9, 8, 7, 6];

    currentDate.setDate(currentDate.getDate() + daysToAdd[currentDayOfWeek]);

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    console.log("formattedDate:", formattedDate);

    return new Promise(async (resolve, reject) => {
      connection.query(
        queries.getAllCustomers,
        [formattedDate],
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

export const GetCustomerById = async (customer_id) => {
  try {
    return new Promise(async (resolve, reject) => {
      connection.query(
        queries.getCustomerById,
        [customer_id],
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
