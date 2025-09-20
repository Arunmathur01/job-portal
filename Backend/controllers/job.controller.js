import { Job } from "../models/job.model.js";
//Admin job posting
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const userId = req.id;

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: salary,
      location,
      jobType,
      experienceLevel: experience,
      position,
      company: companyId,
      created_by: userId,
    });
    res.status(201).json({
      message: "Job posted successfully.",
      job,
      status: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", status: false });
  }
};

//Users
export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    
    // Sample data for testing when database is not connected
    const sampleJobs = [
      {
        _id: "1",
        title: "Frontend Developer",
        description: "We are looking for a skilled Frontend Developer to join our team. You will be responsible for building user-facing web applications using React, JavaScript, and modern web technologies.",
        requirements: ["React", "JavaScript", "HTML", "CSS", "Git"],
        salary: "₹6,00,000 - ₹10,00,000",
        location: "Mumbai, India",
        jobType: "Full-time",
        experienceLevel: "2-4 years",
        position: "Mid-level",
        company: {
          _id: "1",
          name: "TechCorp Solutions",
          location: "Mumbai, India"
        },
        createdAt: new Date()
      },
      {
        _id: "2", 
        title: "Backend Developer",
        description: "Join our backend team to build scalable APIs and microservices. Experience with Node.js, Express, and MongoDB required.",
        requirements: ["Node.js", "Express", "MongoDB", "REST APIs", "Git"],
        salary: "₹7,00,000 - ₹12,00,000",
        location: "Bangalore, India",
        jobType: "Full-time",
        experienceLevel: "3-5 years",
        position: "Senior",
        company: {
          _id: "2",
          name: "DataTech Inc",
          location: "Bangalore, India"
        },
        createdAt: new Date()
      },
      {
        _id: "3",
        title: "Full Stack Developer",
        description: "We need a Full Stack Developer who can work on both frontend and backend. Experience with MERN stack preferred.",
        requirements: ["React", "Node.js", "MongoDB", "Express", "JavaScript"],
        salary: "₹8,00,000 - ₹15,00,000",
        location: "Delhi, India",
        jobType: "Full-time",
        experienceLevel: "4-6 years",
        position: "Senior",
        company: {
          _id: "3",
          name: "WebSolutions Ltd",
          location: "Delhi, India"
        },
        createdAt: new Date()
      }
    ];

    // Try to get jobs from database first
    try {
      const query = {
        $or: [
          { title: { $regex: keyword, $options: "i" } },
          { description: { $regex: keyword, $options: "i" } },
        ],
      };
      const jobs = await Job.find(query)
        .populate({
          path: "company",
        })
        .sort({ createdAt: -1 });

      if (jobs && jobs.length > 0) {
        return res.status(200).json({ jobs, status: true });
      }
    } catch (dbError) {
      console.log("Database not connected, using sample data:", dbError.message);
    }

    // If database fails or no jobs found, return sample data
    const filteredJobs = sampleJobs.filter(job => 
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.description.toLowerCase().includes(keyword.toLowerCase())
    );

    return res.status(200).json({ jobs: filteredJobs, status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", status: false });
  }
};

//Users
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found", status: false });
    }
    return res.status(200).json({ job, status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", status: false });
  }
};

//Admin job created

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId }).populate({
      path: "company",
      sort: { createdAt: -1 },
    });
    if (!jobs) {
      return res.status(404).json({ message: "No jobs found", status: false });
    }
    return res.status(200).json({ jobs, status: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server Error", status: false });
  }
};
