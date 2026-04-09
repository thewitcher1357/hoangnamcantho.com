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
    author: z.string().default("Hoàng Nam"),
    description: z.string().optional(),
  }).transform((data) => ({
    ...data,
    pubDate: data.date || new Date(), // Đổi từ pubDatetime thành pubDate
    image: data.coverImage,
  })),
});

export const collections = { blog };