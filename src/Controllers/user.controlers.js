import { asyncHandler } from "../Utils/asyncHandler.util.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "iCoder-Aditya",
  });
});

export { registerUser };
