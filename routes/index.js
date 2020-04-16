import express from "express";

const router = express.Router();

require("./todo").default(router);
require("./user").default(router);

export default router;
