import e from "express";
const router = e.Router();
import { userRouter } from "./userRoutes.js";
import { mentorRouter } from "./mentorRoutes.js";
import { courseRouter } from "./courseRoute.js";
import { cartRouter } from "./cartRoutes.js";
import { paymentRouter } from "./paymentRoutes.js";

router.use('/user',userRouter)
router.use('/mentor',mentorRouter)
router.use('/course',courseRouter)
router.use('/cart',cartRouter)
router.use('/payment',paymentRouter)





export {router as apiRouter}



