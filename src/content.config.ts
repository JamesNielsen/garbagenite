import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const nites = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/nites" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    specialEvents: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          highlight: z.string().optional(),
        }),
      )
      .optional(),
    topics: z.array(z.string()).optional(),
    drinks: z.array(z.string()).optional(),
    movieReviews: z
      .array(
        z.object({
          movie: z.string(),
          rating: z.string(),
          review: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { nites };
