// Update these URLs to match your deployed backend
const BACKEND_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? "http://localhost:5001" : "https://job-portal-backend.onrender.com");

export const USER_API_ENDPOINT = `${BACKEND_URL}/api/user`;
export const JOB_API_ENDPOINT = `${BACKEND_URL}/api/job`;
export const APPLICATION_API_ENDPOINT = `${BACKEND_URL}/api/application`;
export const COMPANY_API_ENDPOINT = `${BACKEND_URL}/api/company`;
