'use server';
import { RegisterSchema } from '@/schemas';
import * as z from 'zod';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validadeFields = RegisterSchema.safeParse(values);

  if (!validadeFields.success) {
    return { error: 'Invalid fields' };
  }

  return { success: true };
};
