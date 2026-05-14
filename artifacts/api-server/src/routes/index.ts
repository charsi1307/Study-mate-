import { Router, type IRouter } from "express";
import healthRouter from "./health";
import subjectsRouter from "./subjects";
import notesRouter from "./notes";
import aiRouter from "./ai";

const router: IRouter = Router();

router.use(healthRouter);
router.use(subjectsRouter);
router.use(notesRouter);
router.use(aiRouter);

export default router;
