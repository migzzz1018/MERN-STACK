import express from "express";
import { getFeedPosts, getUsersPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:usersId/posts", verifyToken, getUsersPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;