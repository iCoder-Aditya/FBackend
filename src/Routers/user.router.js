import Router from "express";
import { registerUser } from "../Controllers/user.controlers.js";

const router = Router();

router.route("/regiter").post(registerUser);

export default router;
