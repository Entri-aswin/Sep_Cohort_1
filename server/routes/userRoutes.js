import e from "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userControllers.js";
import { authUser } from "../middlewares/authUser.js";
const router = e.Router();

router.post("/sign-up", userSignup);

router.post("/log-in", userLogin);

router.get("/profile", authUser, userProfile);

router.put("/profile-update", authUser, (req, res, next) => {});

router.delete("/profile-delete",authUser, (req, res, next) => {});

router.post("/log-out", authUser, userLogout);

router.get("/check-user", authUser,checkUser);



export { router as userRouter };
