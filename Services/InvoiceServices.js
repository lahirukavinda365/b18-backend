import * as invoiceRepository from "./../Repositories/InvoiceRepository.js";

export const GetInvoiceData = async (customer_id) => {
  try {
    const result = await invoiceRepository.GetInvoiceData(customer_id);

    if (result.length == 0) {
      return {
        status: true,
        message: "No any Invoices ",
        result: result,
      };
    }

    return {
      status: true,
      message: "Invoices available",
      result: result,
    };
  } catch (error) {
    return { status: false, message: error.message };
  }
};
