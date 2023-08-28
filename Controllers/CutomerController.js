
import * as custmerService from "./../Services/CustomerService.js"

export const GetAllCustomers = async (req, res) => {
  try {
     const result = await custmerService.GetAllCustomers();
    if (result.status == false) {
      res.status(400).json({ message: result.message });
      return;
    }
    res.status(200).json({ message: result.message,result:result.result});
    return;
  } catch (error) {
    res.status(400).json({ error: error });
  }
};





