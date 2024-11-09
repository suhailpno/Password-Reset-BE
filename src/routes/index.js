import express from "express";
import UserRouter from "./user.js";

const router = express.Router();
router.get("/", (req, res) => {
  res
    .status(200)
    .send(
      ` <h1> Welcome to our FSD-WD-T-B4-T12 Password Reset Backend Server</h1>`
    );
});
router.use("/user", UserRouter);

export default router;
