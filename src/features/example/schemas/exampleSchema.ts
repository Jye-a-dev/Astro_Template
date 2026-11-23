import { z } from 'zod';

export const exampleItemSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  status: z.enum(['active', 'pending', 'completed']),
});

export type ExampleItemInput = z.infer<typeof exampleItemSchema>;
