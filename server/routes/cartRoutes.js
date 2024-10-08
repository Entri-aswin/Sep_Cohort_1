import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { addCourseToCart, getCart, removeCourseFromCart } from "../controllers/cartControllers.js";
const router = e.Router();

router.post("/add-to-cart",authUser,addCourseToCart);
router.get("/get-cart", authUser, getCart);
router.delete("/remove-course",authUser, removeCourseFromCart);

export { router as cartRouter };
