export interface Job {
  slug: string;
  title: string;
  company_name: string;
  location: string;
  remote: boolean;
  visa_sponsorship: boolean;
  description: string;
  url: string;
  created_at: number;
}

export interface ApiResponse {
  data: Job[];
  links: {
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}
