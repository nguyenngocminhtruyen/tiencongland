import { defineCollection, z } from 'astro:content';

const properties = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    status: z.enum(['for-sale', 'for-rent', 'sold']),
    propertyType: z.enum(['apartment', 'house', 'villa', 'land', 'shophouse']),
    price: z.number(),
    priceUnit: z.enum(['billion', 'million-per-month']),
    district: z.string(),
    city: z.string().default('TP. Hồ Chí Minh'),
    address: z.string(),
    bedrooms: z.number().int().nonnegative(),
    bathrooms: z.number().int().nonnegative(),
    area: z.number(),
    legalStatus: z.string(),
    developer: z.string().optional(),
    handover: z.string().optional(),
    featured: z.boolean().default(false),
    images: z.array(z.string()).min(1),
    description: z.string(),
    amenities: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Đinh Tỉến Công'),
    category: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { properties, blog };
