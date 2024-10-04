import e from "express";
const router = e.Router();
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";

router.use('/user',userRouter)
router.use('/mentor',mentorRouter)





export {router as apiRouter}



