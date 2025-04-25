import express from "express";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes";

dotenv.config();
const port = 3001;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ server_up: true });
});

app.listen(port, () => {
  console.log(`Server listening at post ${port}`);
});
