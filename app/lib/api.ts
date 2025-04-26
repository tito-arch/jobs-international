import axios from 'axios';
import { ApiResponse } from '@/app/types/types';

const API_BASE_URL = 'https://www.arbeitnow.com/api/job-board-api';

export async function fetchJobs(page: number = 1): Promise<ApiResponse> {
  try {
    const response = await axios.get<ApiResponse>(API_BASE_URL, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return {
      data: [],
      links: {},
      meta: {
        current_page: 1,
        from: 0,
        last_page: 1,
        per_page: 0,
        to: 0,
        total: 0,
      },
    };
  }
}
