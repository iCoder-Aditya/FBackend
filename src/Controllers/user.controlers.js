import { asyncHandler } from "../Utils/asyncHandler.util.js";
import { ApiError } from "../Utils/ApiError.util.js";
import { User } from "../Models/user.model.js";
import { UploadOnCloudinary } from "../Utils/FileUpload.util.js";
import { ApiResponce } from "../Utils/ApiResponce.util.js";

const registerUser = asyncHandler(async (req, res) => {
  // get data from the user
  // check data is valid - empty
  // check user already present
  // check image , required one
  // store files to cloudinary
  // store user data to database by creating objct
  // check user created
  // remove password and refreshToken from responce
  // send responce

  const { username, fullName, email, password } = req.body;

  if (
    [username, fullName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "all fields are required");
  }
  const userPresent = await User.findOne({ $or: [{ username }, { email }] });

  if (userPresent) {
    throw new ApiError(409, "user already present");
  }
  const avatarLocalFilePath = req.files?.avtar[0]?.path;
  const coverImageLocalFIlePath = req.files?.coverImage[0]?.path;

  if (!avatarLocalFilePath) {
    throw new ApiError(400, "avter is required");
  }

  const avtar = await UploadOnCloudinary(avatarLocalFilePath);
  const coverImage = await UploadOnCloudinary(coverImageLocalFIlePath);

  if (!avtar) {
    throw new ApiError(400, "avter is required");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    avtar: avtar.url,
    coverImage: coverImage?.url || "",
    fullName,
    email,
    password,
  });

  const createdUser = await User.findById(user._id).select(
    "-password  -refteshToken"
  );

  if (!createdUser) {
    throw ApiError(500, "user not created");
  }

  res
    .status(201)
    .json(new ApiResponce(200, createdUser, "User Register successfully"));
});

export { registerUser };
