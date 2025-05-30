import express from "express";

import { signup, login } from "../controller/user.controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

export { router as userRouter };
