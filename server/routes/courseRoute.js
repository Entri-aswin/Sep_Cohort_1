import e from "express";
import { authUser } from "../middlewares/authUser.js";
import { createCourse, deleteCourse, fetchCourseDetails, findAllCourses, updateCourse } from "../controllers/courseControllers.js";
import { authMentor } from "../middlewares/authMentor.js";
import { upload } from "../middlewares/multer.js";
const router = e.Router();

router.get("/all-courses", authUser, findAllCourses);
router.get("/courseDetails/:id", authUser, fetchCourseDetails);
router.post("/create", authMentor, upload.single('image'), createCourse);
router.put("/update",authMentor,upload.single('image'), updateCourse);
router.delete("/delete",authMentor,deleteCourse);

export { router as courseRouter };
