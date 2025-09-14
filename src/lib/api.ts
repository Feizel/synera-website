import { RecommendationResponse } from '../types';

const API_BASE = process.env.VITE_API_URL || '/api/v1';

export class ApiClient {
  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getRecommendations(userId: string): Promise<RecommendationResponse> {
    return this.request<RecommendationResponse>('/recommendations', {
      method: 'POST',
      body: JSON.stringify({ userId }),
    });
  }

  async getUserProfile(userId: string) {
    return this.request(`/users/${userId}/profile`);
  }

  async getRole(roleId: string) {
    return this.request(`/roles/${roleId}`);
  }

  async getOpportunities(filters?: {
    roleId?: string;
    team?: string;
    location?: string;
    status?: string;
  }) {
    const params = new URLSearchParams();
    if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value) params.append(key, value);
      });
    }
    return this.request(`/opportunities?${params.toString()}`);
  }

  async importCSV(type: string, file: File) {
    const formData = new FormData();
    formData.append('type', type);
    formData.append('file', file);

    return fetch(`${API_BASE}/import/csv`, {
      method: 'POST',
      body: formData,
    });
  }
}

export const api = new ApiClient();