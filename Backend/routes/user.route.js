import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
  toggleSaveJob,
  getSavedJobs,
} from "../controllers/user.controller.js";
import authenticateToken from "../middleware/isAuthenticated.js";
import { singleUpload } from "../middleware/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router
  .route("/profile/update")
  .post(authenticateToken, singleUpload, updateProfile);

// Saved jobs
router.route("/save/:jobId").post(authenticateToken, toggleSaveJob);
router.route("/saved").get(authenticateToken, getSavedJobs);

export default router;
