// This file would normally contain actual API calls to a backend server
// For this demo app, we'll just simulate API calls using the dummy data

import dummyJobs from './dummyJobs';

// Simulated API service for fetching job data
// In a real app, these functions would make actual API calls

/**
 * Fetch all jobs from the API
 * @returns {Promise} A promise that resolves to an array of job objects
 */
export const fetchJobs = async () => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyJobs);
    }, 1000);
  });
};

/**
 * Fetch a specific job by ID
 * @param {string|number} id - The ID of the job to fetch
 * @returns {Promise} A promise that resolves to a job object
 */
export const fetchJobById = async (id) => {
  // Simulate API call delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = dummyJobs.find(job => job.id === id);
      if (job) {
        resolve(job);
      } else {
        reject(new Error('Job not found'));
      }
    }, 800);
  });
};

/**
 * Fetch results from the API
 * @returns {Promise} A promise that resolves to an array of result objects
 */
export const fetchResults = async () => {
  // This would be implemented in a real app
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data would be returned here
      resolve([]);
    }, 1000);
  });
};

/**
 * Fetch admit cards from the API
 * @returns {Promise} A promise that resolves to an array of admit card objects
 */
export const fetchAdmitCards = async () => {
  // This would be implemented in a real app
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data would be returned here
      resolve([]);
    }, 1000);
  });
};

/**
 * Search jobs by query
 * @param {string} query - The search query
 * @returns {Promise} A promise that resolves to an array of matching job objects
 */
export const searchJobs = async (query) => {
  // Simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      const normalizedQuery = query.toLowerCase();
      const results = dummyJobs.filter(job => 
        job.title.toLowerCase().includes(normalizedQuery) || 
        job.organization.toLowerCase().includes(normalizedQuery)
      );
      resolve(results);
    }, 1000);
  });
};