import type { APIRoute } from 'astro';
import type { ApiResponse, HealthCheckData } from '@/types/api';

export const GET: APIRoute = async () => {
  const data: HealthCheckData = {
    status: 'healthy',
    uptime: typeof process !== 'undefined' ? process.uptime() : 0,
    timestamp: new Date().toISOString(),
    environment: import.meta.env.MODE,
  };

  const payload: ApiResponse<HealthCheckData> = {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
