import express from "express";
import { createRequest } from "../controllers/request.controller";

const requestRouter = express.Router();

requestRouter.route("/").post(createRequest);

export default requestRouter;
