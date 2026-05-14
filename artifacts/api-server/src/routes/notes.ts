import { Router } from "express";
import { allNotes, getNotesByChapterId, getNotesBySubjectId } from "../data/notes";

const router = Router();

router.get("/notes", (req, res) => {
  const subjectId = req.query.subjectId as string | undefined;
  const notes = subjectId ? getNotesBySubjectId(subjectId) : allNotes;
  res.json(notes);
});

router.get("/notes/:chapterId", (req, res) => {
  const notes = getNotesByChapterId(req.params.chapterId);
  if (!notes) {
    res.status(404).json({ error: "Notes not found" });
    return;
  }
  res.json(notes);
});

export default router;
