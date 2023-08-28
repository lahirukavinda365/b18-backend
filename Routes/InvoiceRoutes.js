import express from "express";
import * as invoiceController from "./../Controllers/InvoiceController.js";
const router = express.Router();

router.get("/:id", invoiceController.GetCustomerInvoiceData);


export default router;





