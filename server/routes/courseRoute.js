import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createCourse, fetchCourseDetails, findAllCourses } from "../controllers/courseControllers.js";
import { authMentor } from "../middlewares/authMentor.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();

router.get("/all-courses", authUser, findAllCourses);
router.get("/courseDetails/:id", authUser, fetchCourseDetails);
router.post("/create", authMentor, upload.single('image'), createCourse);
router.put("/update");
router.delete("/delete");

export { router as courseRouter };
