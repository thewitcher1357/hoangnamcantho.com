import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    // Khớp với tên coverImage trong file .md của bạn
    coverImage: z.string().optional(),
    author: z.string().default("Nguyễn Trần Chung"),
    description: z.string().optional(),
  }).transform((data) => ({
    ...data,
    // Nếu template starter-pro của bạn cần biến 'image' hoặc 'pubDatetime'
    // thì ta "ánh xạ" chúng sang tên mà template yêu cầu ở đây:
    image: data.coverImage,
    pubDatetime: data.date,
  })),
});

export const collections = { blog };