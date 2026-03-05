import { Request, Response } from "express";
import RequestModel from "../models/request.model";

const createRequest = async (req: Request, res: Response) => {
  try {
    const { username, email, targetSubDomain } = req.body;

    if (!username || !email || !targetSubDomain) {
      return res.status(400).json({
        success: false,
        message: "username, email and targetSubDomain are required",
      });
    }

    const newRequest = await RequestModel.create({
      username,
      email,
      targetSubDomain,
    });

    if (!newRequest) {
      return res.status(500).json({
        success: false,
        message: "Failed to create request",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Request stored successfully",
      data: newRequest,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export { createRequest };