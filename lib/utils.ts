// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"
import axios from 'axios'

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

export function getYear() {
  return new Date().getFullYear()
}

export const BACKEND_URL = process.env.BACKEND_URL
console.log('BACKEND URL', BACKEND_URL);

export const axiosClient = axios.create({
  baseURL: BACKEND_URL,
  timeout: 5000,
  transformRequest: [(data) => {
    // Handle circular references by serializing the data
    if (data) {
      try {
        return JSON.stringify(data);
      } catch (e) {
        console.error('Error serializing request data:', e);
        return JSON.stringify({});
      }
    }
    return data;
  }],
  headers: {
    'Content-Type': 'application/json'
  }
});
