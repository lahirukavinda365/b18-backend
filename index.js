import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import customerRouter from "./Routes/CustomerRoutes.js";
import invoiceRouter from "./Routes/InvoiceRoutes.js"

const app = express();
const environmentalVariables = dotenv.config();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/customer", customerRouter);
app.use("/invoices",invoiceRouter)




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





