import * as customerRepository from "./../Repositories/CustomerRepository.js";

export const GetAllCustomers = async () => {
  try {
    const result = await customerRepository.GetAllCustomers();

    if (result.length == 0) {
      return {
        status: false,
        message: "No any Customer",
        result: result,
      };
    }

    return {
      status: true,
      message: "Customer available",
      result: result,
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
