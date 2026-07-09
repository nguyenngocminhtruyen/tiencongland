# Tai lieu du an Tien Cong Land

## 1. Tong quan

**Tien Cong Land** la website gioi thieu ca nhan va dich vu tu van bat dong san cho chuyen vien **Dinh Tien Cong**. Website tap trung vao ba nhom noi dung chinh:

- Gioi thieu thuong hieu ca nhan, kinh nghiem va uy tin tu van.
- Hien thi danh sach bat dong san dang ban/cho thue.
- Chia se bai viet kien thuc ve mua ban, phap ly, dau tu va phong thuy bat dong san.

Website duoc xay dung theo huong static site, toi uu toc do tai trang, SEO va de cap nhat noi dung bang file Markdown/JSON.

## 2. Cong nghe su dung

- **Astro 5**: framework chinh de xay dung static website.
- **TypeScript**: tang do an toan khi viet logic va cau hinh.
- **Tailwind CSS**: xay dung giao dien responsive theo utility classes.
- **Astro Content Collections**: quan ly du lieu bat dong san va bai viet co schema ro rang.
- **@astrojs/sitemap**: tao sitemap phuc vu SEO.
- **@tailwindcss/typography**: dinh dang noi dung bai viet Markdown.

## 3. Cau truc thu muc

```text
.
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
├── src/
│   ├── components/
│   ├── content/
│   │   ├── blog/
│   │   ├── properties/
│   │   └── config.ts
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
└── design-system/
```

### Vai tro cac thu muc chinh

- `src/pages/`: dinh nghia cac route cua website, vi du `index.astro`, `about.astro`, `contact.astro`, `properties/index.astro`, `blog/index.astro`.
- `src/components/`: cac thanh phan giao dien tai su dung nhu header, footer, card bat dong san, card bai viet, SEO, breadcrumbs.
- `src/layouts/`: layout tong the cho cac trang.
- `src/content/`: noi luu du lieu co cau truc.
- `src/content/properties/`: cac file JSON dai dien cho tung bat dong san.
- `src/content/blog/`: cac file Markdown dai dien cho tung bai viet.
- `src/lib/`: hang so, helper va logic dung chung.
- `src/styles/global.css`: style toan cuc va cac class co so.
- `public/images/`: anh tinh duoc website su dung truc tiep.
- `design-system/`: tai lieu/tham chieu ve he thong thiet ke.

## 4. Cac trang chinh

### Trang chu `/`

Trang chu gom cac khoi noi dung:

- Hero gioi thieu chuyen vien va loi keu goi hanh dong.
- Thanh chi so uy tin: nam kinh nghiem, giao dich, khach hang, danh gia.
- Bat dong san noi bat lay tu collection `properties` voi `featured: true`.
- Khoi gioi thieu ngan ve chuyen vien.
- Danh gia khach hang.
- Bai viet moi nhat lay tu collection `blog`.
- CTA lien he cuoi trang.

Trang chu cung khai bao structured data dang `RealEstateAgent` de ho tro SEO.

### Trang gioi thieu `/about`

Gioi thieu chi tiet ve chuyen vien, kinh nghiem, gia tri tu van va thong tin lien quan den uy tin nghe nghiep.

### Trang bat dong san `/properties`

Hien thi danh sach bat dong san tu `src/content/properties/*.json`.

Tinh nang hien co:

- Sap xep theo `publishDate` moi nhat.
- Loc phia client theo:
  - nhu cau: ban/cho thue;
  - loai hinh;
  - khu vuc.
- Trang thai rong khi khong co ket qua phu hop.

### Trang chi tiet bat dong san `/properties/[slug]`

Moi file JSON trong `src/content/properties/` tao ra mot trang chi tiet tuong ung. Slug duoc lay tu ten file.

### Trang blog `/blog`

Hien thi danh sach bai viet tu `src/content/blog/*.md`, sap xep theo ngay dang moi nhat. Trang co hien thi cac danh muc hien co trong du lieu bai viet.

### Trang chi tiet blog `/blog/[slug]`

Moi file Markdown trong `src/content/blog/` tao ra mot trang bai viet rieng. Noi dung bai viet duoc render tu Markdown va metadata frontmatter.

### Trang lien he `/contact`

Cung cap thong tin lien he, kenh ket noi va loi keu goi dat lich tu van.

## 5. Quan ly noi dung

Du an su dung Astro Content Collections tai `src/content/config.ts` de rang buoc schema cho du lieu.

### Bat dong san

Moi bat dong san la mot file JSON trong:

```text
src/content/properties/
```

Schema chinh:

```ts
{
  title: string;
  status: 'for-sale' | 'for-rent' | 'sold';
  propertyType: 'apartment' | 'house' | 'villa' | 'land' | 'shophouse';
  price: number;
  priceUnit: 'billion' | 'million-per-month';
  district: string;
  city: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  legalStatus: string;
  featured: boolean;
  images: string[];
  description: string;
  amenities: string[];
  publishDate: Date;
}
```

Vi du them bat dong san moi:

```json
{
  "title": "Can ho mau Quan 2",
  "status": "for-sale",
  "propertyType": "apartment",
  "price": 5.2,
  "priceUnit": "billion",
  "district": "Quan 2",
  "city": "TP. Ho Chi Minh",
  "address": "Duong Mai Chi Tho, Quan 2",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 78,
  "legalStatus": "So hong rieng",
  "featured": true,
  "images": ["/images/properties/can-ho-mau-1.svg"],
  "description": "Can ho vi tri dep, tien ich day du, phu hop o thuc hoac dau tu.",
  "amenities": ["Ho boi", "Phong gym", "Bao ve 24/7"],
  "publishDate": "2026-01-15"
}
```

Ten file se anh huong den slug URL. Vi du:

```text
src/content/properties/can-ho-mau-quan-2.json
```

se tao URL:

```text
/properties/can-ho-mau-quan-2
```

### Bai viet blog

Moi bai viet la mot file Markdown trong:

```text
src/content/blog/
```

Frontmatter chinh:

```yaml
---
title: "Tieu de bai viet"
description: "Mo ta ngan phuc vu SEO va card hien thi"
publishDate: "2026-01-15"
author: "Dinh Tien Cong"
category: "Phap ly"
image: "/images/blog/ten-anh.svg"
featured: true
---
```

Phan noi dung bai viet nam ben duoi frontmatter va viet bang Markdown.

## 6. Cau hinh thuong hieu va lien he

Thong tin thuong hieu nam tai:

```text
src/lib/site.ts
```

Noi dung co the cap nhat:

- ten ca nhan;
- ten thuong hieu;
- tieu de va mo ta SEO mac dinh;
- domain website;
- so dien thoai;
- email;
- dia chi;
- gio lam viec;
- lien ket Facebook, Zalo, YouTube;
- menu dieu huong.

Khi doi thong tin lien he hoac domain, nen kiem tra lai cac trang co CTA va structured data.

## 7. Lenh phat trien

Cai dat phu thuoc:

```bash
npm install
```

Chay moi truong phat trien:

```bash
npm run dev
```

Kiem tra type va build production:

```bash
npm run build
```

Xem ban build:

```bash
npm run preview
```

## 8. SEO va hieu nang

Du an da co cac diem SEO chinh:

- `astro.config.mjs` khai bao `site`.
- Tich hop `@astrojs/sitemap`.
- Component `Seo.astro` phuc vu meta tag.
- Trang chu co JSON-LD dang `RealEstateAgent`.
- Noi dung bat dong san va blog duoc render thanh route tinh.
- Anh nam trong `public/images/` va duoc tham chieu bang duong dan public.

Khi them trang moi, nen dam bao:

- co `title` va `description` ro rang;
- dung heading theo thu bac hop ly;
- anh co `alt`;
- URL ngan gon, de doc;
- noi dung khong trung lap qua nhieu voi trang khac.

## 9. Huong dan cap nhat thuong gap

### Them bat dong san noi bat

1. Tao file JSON moi trong `src/content/properties/`.
2. Dien day du cac truong theo schema.
3. Dat `"featured": true` neu muon hien thi tren trang chu.
4. Them anh vao `public/images/properties/`.
5. Chay `npm run build` de kiem tra schema va route.

### Them bai viet moi

1. Tao file Markdown moi trong `src/content/blog/`.
2. Dien frontmatter.
3. Viet noi dung bai ben duoi frontmatter.
4. Them anh dai dien vao `public/images/blog/`.
5. Chay `npm run build`.

### Doi thong tin lien he

1. Mo `src/lib/site.ts`.
2. Cap nhat `phone`, `phoneDisplay`, `email`, `address`, `workingHours` hoac `social`.
3. Chay lai website va kiem tra header, footer, CTA, trang lien he.

### Doi menu dieu huong

Cap nhat mang `NAV_LINKS` trong `src/lib/site.ts`.

## 10. Ghi chu van hanh

- Du an hien la static website, khong co backend rieng.
- Bo loc bat dong san tren trang danh sach dang xu ly bang JavaScript phia client.
- Du lieu lien he trong repo co the la du lieu mau, can thay bang thong tin thuc truoc khi deploy chinh thuc.
- Cac anh hien tai chu yeu la SVG trong `public/images/`; co the thay bang anh thuc te de tang do tin cay khi dua vao san xuat.
- Khi cap nhat schema trong `src/content/config.ts`, can cap nhat lai tat ca file noi dung lien quan de tranh loi build.

## 11. De xuat phat trien tiep

- Them form lien he co xu ly submit qua API/email service.
- Them tim kiem theo tu khoa cho trang bat dong san.
- Them loc theo khoang gia va dien tich.
- Them phan trang neu so luong bat dong san/bai viet tang nhieu.
- Them anh thuc te va toi uu anh bang dinh dang WebP/AVIF.
- Them tracking su kien cho nut goi dien, Zalo va form lien he.
- Them schema chi tiet cho tung bat dong san neu can day SEO local.
