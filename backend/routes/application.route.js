import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import {
  applyJob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

// Student applies to a job (job ID passed as :id)
router.route("/apply/:id").get(isAuthenticated, applyJob);

// Student views all jobs they’ve applied to
router.route("/get").get(isAuthenticated, getAppliedJobs);

//  Recruiter views all applicants for a specific job (job ID passed as :id)
router.route("/:id/applicants").get(isAuthenticated, getApplicants);

//  Recruiter updates application status (application ID passed as :id)
router.route("/status/:id/update").post(isAuthenticated, updateStatus);

export default router;
