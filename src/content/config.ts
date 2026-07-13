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
    distributor: z.string().optional(),
    infoSource: z.string().default('Theo thông tin công bố/tài liệu bán hàng tại thời điểm cập nhật'),
    updatedDate: z.coerce.date().optional(),
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
    author: z.string().default('Đinh Tiến Công'),
    category: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

/**
 * Project profiles (dự án) — whole-development overview pages (lifestyle, gallery,
 * highlights). Distinct from `properties`, which models individual unit listings
 * with a numeric price/area/bedroom count.
 */
const projects = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    location: z.string(),
    locationNote: z.string().optional(),
    type: z.string(),
    developer: z.string().optional(),
    distributor: z.string().optional(),
    status: z.string().default('Đang cập nhật'),
    priceLabel: z.string().default('Vui lòng liên hệ để kiểm tra bảng giá mới nhất'),
    legalStatus: z.string().default('Theo thông tin công bố/tài liệu bán hàng tại thời điểm cập nhật'),
    updatedDate: z.coerce.date(),
    source: z.string().default('Tài liệu/thông tin bán hàng tại thời điểm cập nhật'),
    featuredUnit: z.string().optional(),
    heroImage: z.string(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        })
      )
      .default([]),
    highlights: z.array(z.string()).default([]),
    lifestyleValues: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .default([]),
    cta: z
      .object({
        headline: z.string().optional(),
        text: z.string().optional(),
      })
      .optional(),
    relatedPosts: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

export const collections = { properties, blog, projects };
