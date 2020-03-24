import express from "express";

const router = express.Router();

require("./todo").default(router);

export default router;
