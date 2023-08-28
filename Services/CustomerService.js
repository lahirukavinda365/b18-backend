import * as customerRepository from "./../Repositories/CustomerRepository.js";

export const GetAllCustomers = async () => {
  try {
    const result = await customerRepository.GetAllCustomers();

    if (result.length == 0) {
      return {
        status: true,
        message: "No any Customer",
        result: result,
      };
    }

    return {
      status: true,
      message: "Customers available",
      result: result,
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};

export const GetCustomerById = async (customer_id) => {
  try {
    const result = await customerRepository.GetCustomerById(customer_id);

    if (result.length == 0) {
      return {
        status: false,
        message: "Customer not found",
      };
    }

    return {
      status: true,
      message: "Customer available",
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
