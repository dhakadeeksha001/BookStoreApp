import express from "express";
import { addBook, getBook, removeBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);
router.post("/remove", removeBook);
router.post("/add", addBook);

export default router;