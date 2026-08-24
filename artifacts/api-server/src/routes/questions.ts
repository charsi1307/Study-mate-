import { Router, type Request, type Response } from "express";
import { allQuestions, getQuestionsByChapterId, getQuestionsBySubjectId } from "../data/questions";

const router = Router();

router.get("/questions", (req: Request, res: Response) => {
  const subjectId = req.query.subjectId as string | undefined;
  const questions = subjectId ? getQuestionsBySubjectId(subjectId) : allQuestions;
  res.json(questions);
});

router.get(
  "/questions/:chapterId",
  (req: Request<{ chapterId: string }>, res: Response) => {
  const questions = getQuestionsByChapterId(req.params.chapterId);
  if (!questions) {
    res.status(404).json({ error: "Questions not found" });
    return;
  }
  res.json(questions);
  },
);

export default router;
