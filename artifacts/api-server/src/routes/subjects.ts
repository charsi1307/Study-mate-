import { Router } from "express";
import { subjects, getSubjectById, getChapterById } from "../data/content";

const router = Router();

router.get("/subjects", (req, res) => {
  const result = subjects.map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    icon: s.icon,
    color: s.color,
    chapterCount: s.chapters.length,
  }));
  res.json(result);
});

router.get("/subjects/:subjectId/chapters", (req, res) => {
  const subject = getSubjectById(req.params.subjectId);
  if (!subject) {
    res.status(404).json({ error: "Subject not found" });
    return;
  }
  const result = subject.chapters.map((c) => ({
    id: c.id,
    subjectId: c.subjectId,
    number: c.number,
    title: c.title,
    description: c.description,
    youtubeVideoId: c.youtubeVideoId,
    duration: c.duration,
  }));
  res.json(result);
});

router.get("/chapters/:chapterId", (req, res) => {
  const chapter = getChapterById(req.params.chapterId);
  if (!chapter) {
    res.status(404).json({ error: "Chapter not found" });
    return;
  }
  const subject = getSubjectById(chapter.subjectId);
  res.json({
    ...chapter,
    subjectName: subject?.name ?? "",
  });
});

export default router;
