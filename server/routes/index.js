import e from "express";
const router = e.Router();
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";
import { courseRouter } from "./courseRoute.js";

router.use('/user',userRouter)
router.use('/mentor',mentorRouter)
router.use('/course',courseRouter)





export {router as apiRouter}



