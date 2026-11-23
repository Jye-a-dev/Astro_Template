import type { FeatureItem } from '../types';

export async function getExampleItems(): Promise<FeatureItem[]> {
  return [
    { id: '1', name: 'Astro 5 Architecture', status: 'completed' },
    { id: '2', name: 'Tailwind CSS v4 Integration', status: 'completed' },
    { id: '3', name: 'Zod Environment Validation', status: 'completed' },
    { id: '4', name: 'Conventional Commits & Husky', status: 'active' },
  ];
}
