import Router from "express";
import { registerUser } from "../Controllers/user.controlers.js";
import { upload } from "../Middlewares/multer.middleware.js";

const router = Router();

router.route("/regiter").post(
  upload([
    { name: avtar, maxCount: 1 },
    { name: coverImage, maxCount: 1 },
  ]),
  registerUser
);

export default router;
