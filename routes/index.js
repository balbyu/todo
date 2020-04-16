import express from "express";

const router = express.Router();

// Passes the single Express Router to every route.
require("./todo").default(router);
require("./user").default(router);

export default router;
