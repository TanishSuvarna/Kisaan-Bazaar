import express  from "express";
const userRouter = express.Router();
import { isSignedIn } from "../middleware/middleware.js";
import { isValid } from "../validator/commonValidator.js";
import { getSellerProducts } from "../controller/products.js";
userRouter.get("/seller/getProducts" ,isSignedIn , isValidSeller,isValid, getSellerProducts);

export default userRouter;