import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_2: z.string().optional(),
			img_3: z.string().optional(),
			img_4: z.string().optional(),
			img_alt: z.string().optional(),
			img_2_alt: z.string().optional(),
			img_3_alt: z.string().optional(),
			img_4_alt: z.string().optional(),

			
		}),
	}),
};
