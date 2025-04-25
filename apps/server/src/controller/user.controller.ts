import { Request, Response } from "express";
import logger from "../lib/logger";
import authService from "../services/auth.service";

function signup(req: Request, res: Response) {
  try {
    const data: { email: string; password: string } = req.body;
    authService.setUser({ user: {} });
    console.log(data);
    console.log("Here we are");
    return res.status(200).json({ success: true });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({ success: false });
  }
}

function login(req: Request, res: Response) {
  return res.status(200);
}

export { signup, login };
