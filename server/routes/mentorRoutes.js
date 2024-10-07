import e from "express";
import { checkMentor, mentorLogin, mentorLogout, mentorProfile, mentorSignup } from "../controllers/mentorControllers.js";
import { authMentor } from "../middlewares/authMentor.js";
const router = e.Router();

router.post("/sign-up", mentorSignup);

router.post("/log-in", mentorLogin);

router.get("/profile", authMentor, mentorProfile);

// router.put("/profile-update", mentorProfile);

router.delete("/profile-delete", (req, res, next) => {});

router.post("/log-out",authMentor, mentorLogout);

router.get("/check-mentor", authMentor, checkMentor);


export { router as mentorRouter };
