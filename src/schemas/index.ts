import * as z from "zod";

export const createTaskSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required",
  }),
  description: z.optional(z.string()),
});

export const updateTaskSchema = z.object({
  id: z.number(),
  title: z.optional(z.string()),
  description: z.optional(z.string()),
});

export const completeTaskSchema = z.object({
  id: z.number(),
  completed: z.boolean(),
});
