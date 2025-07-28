import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import dummyJobs from '@data/dummyJobs';
import { fetchJobs as apiFetchJobs, fetchJobById as apiFetchJobById } from '@data/apiService';

// Create a context for jobs data
const JobContext = createContext();

// Provider component that wraps the app and provides jobs data
export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fetch all jobs
  const fetchJobs = async () => {
    setLoading(true);
    try {
      // In a real app, this would fetch from an API
      // const response = await apiFetchJobs();
      // setJobs(response);
      
      // Using dummy data for now
      setJobs(dummyJobs);
      setError(null);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to fetch jobs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch a specific job by ID
  const getJobById = async (id) => {
    try {
      // In a real app, this would fetch from an API
      // const job = await apiFetchJobById(id);
      // return job;
      
      // Using dummy data for now
      const job = dummyJobs.find(job => job.id === id);
      if (!job) {
        throw new Error('Job not found');
      }
      return job;
    } catch (err) {
      console.error('Error fetching job details:', err);
      throw err;
    }
  };
  
  const value = {
    jobs,
    loading,
    error,
    fetchJobs,
    getJobById,
  };
  
  return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};

// Custom hook to use the jobs context
export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};

JobProvider.propTypes = {
  children: PropTypes.node.isRequired,
};