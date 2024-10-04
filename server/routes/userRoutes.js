import e from "express";
const router = e.Router();

router.post("/sign-up", (req, res, next) => {});

router.post("/log-in", (req, res, next) => {});

router.put("/profile-update", (req, res, next) => {});

router.get("/profile", (req, res, next) => {});

router.delete("/profile-delete", (req, res, next) => {});

router.post("/log-out", (req, res, next) => {});

router.get("/check-user", (req, res, next) => {});


export { router as userRouter };
