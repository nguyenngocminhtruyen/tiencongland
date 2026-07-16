import { defineCollection, z } from 'astro:content';

/**
 * Property/product listings. Numeric fields (price/area/bedrooms/bathrooms) are optional —
 * many products (e.g. a phân khu/sub-collection introduced via marketing material without a
 * published price list) have no confirmed figures yet. Never fabricate a value here; omit the
 * field and the UI will skip rendering that row rather than show a placeholder number.
 */
const properties = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string().optional(),
    audienceFit: z.string().optional(),
    projectSlug: z.string().optional(),
    subdivision: z.string().optional(),
    // Nếu sản phẩm này thuộc một phân khu mà chính phân khu đó cũng có trang property riêng
    // (ví dụ "Nhà phố Vịnh Ngọc 48" thuộc phân khu "Boulevard Prime"), trỏ tới slug của trang đó
    // để hiển thị badge phân khu dạng link thay vì chỉ là text.
    subdivisionSlug: z.string().optional(),
    status: z.enum(['for-sale', 'for-rent', 'sold']).default('for-sale'),
    propertyType: z.enum(['apartment', 'house', 'villa', 'land', 'shophouse']),
    price: z.number().optional(),
    priceUnit: z.enum(['billion', 'million-per-month']).optional(),
    priceLabel: z.string().default('Vui lòng liên hệ để nhận bảng giá mới nhất'),
    district: z.string().optional(),
    city: z.string().default('TP. Hồ Chí Minh'),
    address: z.string().optional(),
    bedrooms: z.number().int().nonnegative().optional(),
    bathrooms: z.number().int().nonnegative().optional(),
    area: z.number().optional(),
    areaLabel: z.string().optional(),
    legalStatus: z.string().optional(),
    developer: z.string().optional(),
    distributor: z.string().optional(),
    infoSource: z.string().default('Theo tài liệu/thông tin giới thiệu tại thời điểm cập nhật'),
    updatedDate: z.coerce.date().optional(),
    handover: z.string().optional(),
    handoverStandard: z.string().optional(),
    featured: z.boolean().default(false),
    heroImage: z.string(),
    gallery: z.array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() })).min(1),
    videos: z.array(z.object({ src: z.string(), title: z.string(), description: z.string().optional() })).default([]),
    designHighlights: z.array(z.string()).default([]),
    valueHighlights: z.array(z.object({ title: z.string(), description: z.string() })).default([]),
    amenities: z.array(z.string()).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    relatedPosts: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    publishDate: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Đinh Tiến Công'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    imageAlt: z.string().optional(),
    // Liên kết chủ đề: bài viết thuộc dự án/sản phẩm nào để tự động sinh internal link + related content.
    projectSlug: z.string().optional(),
    propertySlugs: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
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
    // Dòng sản phẩm/phân khu thuộc dự án (không phải listing cụ thể — không có giá/diện tích xác nhận
    // thì không tạo entry trong collection `properties`, chỉ mô tả định tính tại đây).
    productLines: z
      .array(
        z.object({
          name: z.string(),
          type: z.string(),
          tagline: z.string().optional(),
          description: z.string(),
          image: z.string(),
          gallery: z
            .array(z.object({ src: z.string(), alt: z.string(), caption: z.string().optional() }))
            .default([]),
        })
      )
      .default([]),
    // Lộ trình hạ tầng kết nối theo tài liệu quy hoạch/công bố của chủ đầu tư — luôn gắn nhãn "dự kiến".
    infrastructureTimeline: z
      .array(
        z.object({
          year: z.string(),
          items: z.array(z.object({ label: z.string(), note: z.string().optional() })),
        })
      )
      .default([]),
    // Cập nhật tiến độ thi công: video/nguồn tham khảo độc lập, không tự khẳng định số liệu tiến độ.
    progress: z
      .object({
        updatedDate: z.coerce.date().optional(),
        summary: z.string().optional(),
        sourceLabel: z.string().optional(),
        sourceUrl: z.string().optional(),
        videos: z.array(z.object({ src: z.string(), title: z.string() })).default([]),
      })
      .optional(),
    videos: z.array(z.object({ src: z.string(), title: z.string(), description: z.string().optional() })).default([]),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
  }),
});

export const collections = { properties, blog, projects };
