import { z, defineCollection } from "astro:content";

export const collections = {
  services: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
    }),
  }),
};
