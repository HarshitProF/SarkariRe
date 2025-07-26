// Application-wide constants

// App information
export const APP_INFO = {
  name: 'Sarkari Results App',
  version: '1.0.0',
  build: '1',
};

// API endpoints
// In a real app, these would point to actual API URLs
export const API = {
  BASE_URL: 'https://api.example.com/v1',
  JOBS: '/jobs',
  RESULTS: '/results',
  ADMIT_CARDS: '/admit-cards',
  SEARCH: '/search',
};

// Navigation route names
export const ROUTES = {
  HOME: 'Home',
  JOBS: 'Jobs',
  JOBS_LIST: 'JobsList',
  JOB_DETAILS: 'JobDetails',
  RESULTS: 'Results',
  ADMIT_CARDS: 'AdmitCards',
};

// Local storage keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  RECENT_SEARCHES: 'recent_searches',
  BOOKMARKED_JOBS: 'bookmarked_jobs',
};

// Time formats
export const DATE_FORMATS = {
  DISPLAY_DATE: 'DD MMM, YYYY',
  API_DATE: 'YYYY-MM-DD',
};

// App settings
export const SETTINGS = {
  RESULTS_PER_PAGE: 20,
  MAX_RECENT_SEARCHES: 10,
  MAX_BOOKMARKS: 50,
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection and try again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'The requested resource was not found.',
  DEFAULT: 'Something went wrong. Please try again.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  BOOKMARK_ADDED: 'Job bookmarked successfully!',
  BOOKMARK_REMOVED: 'Job removed from bookmarks.',
};