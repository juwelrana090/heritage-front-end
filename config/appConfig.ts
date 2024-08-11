const NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const baseUrl =
  typeof window !== 'undefined' && window.location.origin
    ? window.location.origin
    : NEXT_PUBLIC_BASE_URL;

const apiUrl = NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';
const backendUrl = NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';

export { baseUrl, backendUrl, apiUrl };
