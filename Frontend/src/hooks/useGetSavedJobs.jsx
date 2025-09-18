import { useEffect, useState } from "react";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/data";

const useGetSavedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const run = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`${USER_API_ENDPOINT}/saved`, { withCredentials: true });
        if (res?.data?.success) setJobs(res.data.jobs || []);
        else setError("Failed to load saved jobs");
      } catch (e) {
        setError(e.message || "Failed to load saved jobs");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, []);

  return { jobs, loading, error };
};

export default useGetSavedJobs;
