import { z } from 'zod';

export const formExampleSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'First name must be greater than 3 characters' }),
  lastName: z
    .string()
    .min(3, { message: 'Last name must be greater than 3 characters' }),
});

export type FormExampleSchema = z.infer<typeof formExampleSchema>;
