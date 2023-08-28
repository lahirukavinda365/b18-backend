import * as invoiceServices from "./../Services/InvoiceServices.js";
import * as custmerService from "./../Services/CustomerService.js";

export const GetCustomerInvoiceData = async (req, res) => {
  try {
    const customer_id = req.params.id;
    const isCustomerValid = await custmerService.GetCustomerById(customer_id);

    if (!isCustomerValid.status) {
      res.status(404).json({ message: isCustomerValid.message });
      return;
    }

    const result = await invoiceServices.GetInvoiceData(customer_id);
    if (result.status == false) {
      res.status(400).json({ message: result.message });
      return;
    }
    res.status(200).json({ message: result.message, result: result.result });
    return;
  } catch (error) {
    res.status(400).json({ error: error });
    return;
  }
};
