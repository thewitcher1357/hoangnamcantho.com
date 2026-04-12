# Phase 02: Khởi Tạo Dự Án Astro

Status: ⬜ Pending
Dependencies: Phase 01

## Mục Tiêu
Cài đặt Astro framework, cấu hình cơ bản, import nội dung từ Phase 01, và đảm bảo project chạy được trên local.

---

## Bước 1: Cài Đặt Astro Project

### Lựa chọn 1: Dùng theme có sẵn (nhanh, phù hợp blog)

```bash
# Ví dụ: Astro Starter Pro (blog-focused)
npm create astro@latest -- --template devgelo-labs/astro-starter-pro
cd ten-du-an
npm run dev
```

> [!TIP]
> **Thuanbui.me** sử dụng theme Astro Starter Pro cho blog du lịch. Phù hợp cho blog thuần túy.

### Lựa chọn 2: Tự thiết kế (linh hoạt, phù hợp website dịch vụ) ⭐ Khuyến khích

```bash
# Tạo project Astro mới hoàn toàn
npm create astro@latest ./
# Chọn: Empty, TypeScript Strict, Install dependencies

# Cài đặt các dependencies cần thiết
npm install @astrojs/sitemap @astrojs/mdx astro-icon@latest \
  @iconify-json/lucide @iconify-json/tabler \
  remark-reading-time unist-util-visit

# Cài TailwindCSS v4 (nếu dùng)
npm install tailwindcss @tailwindcss/vite @tailwindcss/typography
```

> [!IMPORTANT]
> **Dự án hoangnamcantho.com** sử dụng **Lựa chọn 2** vì cần thiết kế custom cho website dịch vụ, không chỉ blog đơn thuần.

---

## Bước 2: Cấu Trúc Thư Mục Chuẩn

```
src/
├── assets/              ← Ảnh tĩnh (logo, og-image, icons)
│   └── og-image.png
├── components/
│   ├── blog/            ← Components cho blog (PostItem.astro)
│   ├── homepage/        ← Components trang chủ (HeroBanner, ServicesGrid,...)
│   ├── layout/          ← Navbar, Footer
│   ├── services/        ← Components cho trang dịch vụ
│   ├── seo/             ← Schema.org structured data
│   ├── ui/              ← UI components chung (buttons, cards)
│   └── widgets/         ← Widgets (floating buttons, social links)
├── config/
│   └── site.ts          ← Cấu hình site (tên, contact, nav links)
├── content/
│   └── blog/            ← File .md bài viết (từ Phase 01)
├── data/                ← JSON data (podcast, danh sách dịch vụ...)
├── layouts/
│   └── BaseLayout.astro ← Layout chính (head, meta, body wrapper)
├── pages/
│   ├── index.astro      ← Trang chủ
│   ├── blog/            ← Danh sách bài viết
│   ├── [...slug].astro  ← Dynamic route cho bài blog
│   ├── dich-vu/         ← Các trang dịch vụ tĩnh
│   ├── category/        ← Trang category
│   ├── tags/            ← Trang tags
│   ├── feed/            ← RSS/Podcast feeds
│   └── *.astro          ← Các trang tĩnh khác
├── plugins/
│   └── remark-r2-images.mjs  ← Plugin chuyển relative → CDN URL
├── styles/
│   └── global.css       ← CSS chính (TailwindCSS import + custom styles)
├── types/               ← TypeScript types
└── utils/               ← Utility functions
```

---

## Bước 3: Cấu Hình Astro (`astro.config.mjs`)

```javascript
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";
import { remarkR2Images } from "./src/plugins/remark-r2-images.mjs";

export default defineConfig({
  site: "https://your-domain.com/",   // ← Đổi thành domain của bạn
  integrations: [sitemap(), icon(), mdx()],
  markdown: {
    remarkPlugins: [
      [remarkR2Images, { base: "https://images.your-domain.com" }],
      remarkReadingTime,
      () => {
        return function (tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  i18n: {
    defaultLocale: "vi",
    locales: ["vi"],
    routing: { prefixDefaultLocale: false },
  },
  prefetch: { defaultStrategy: "viewport" },
  build: { inlineStylesheets: "auto" },
  vite: { plugins: [tailwindcss()] },
});
```

---

## Bước 4: Cấu Hình Content Schema (`src/content.config.ts`)

```typescript
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
    coverImage: z.string().optional(),
    author: z.string().default("Tên tác giả"),    // ← Đổi tên
    description: z.string().optional(),
  }).transform((data) => ({
    ...data,
    pubDate: data.date || new Date(),
    image: data.coverImage,
  })),
});

export const collections = { blog };
```

> [!NOTE]
> Schema phải khớp với frontmatter trong file `.md` từ Phase 01. Nếu frontmatter dùng `date` → schema cũng phải dùng `date`.

---

## Bước 5: Cấu Hình Site (`src/config/site.ts`)

```typescript
import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Tên Website",
  description: "Mô tả SEO cho website",
  url: "https://your-domain.com",
  lang: "vi",
  locale: "vi_VN",
  author: "Tên tác giả",
  ogImage: ogImage,
  themeColor: "#0056b3",

  contact: {
    hotline: "0912345678",
    hotlineDisplay: "091.234.56.78",
    email: "email@domain.com",
    address: "Địa chỉ công ty",
    zalo: "https://zalo.me/0912345678",
    facebook: "https://facebook.com/page",
  },

  navLinks: [
    { text: "Trang Chủ", href: "/", icon: "lucide:home" },
    { text: "Giới Thiệu", href: "/gioi-thieu", icon: "lucide:info" },
    {
      text: "Dịch Vụ", href: "/dich-vu", icon: "lucide:briefcase",
      children: [
        { text: "Dịch vụ 1", href: "/dich-vu/dich-vu-1" },
        { text: "Dịch vụ 2", href: "/dich-vu/dich-vu-2" },
      ],
    },
    { text: "Blog", href: "/blog", icon: "lucide:book-open" },
    { text: "Liên Hệ", href: "/lien-he", icon: "lucide:mail" },
  ],

  footerLinks: {
    about: [
      { text: "Giới thiệu", href: "/gioi-thieu" },
      { text: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
    ],
  },
};

export const R2_BASE = "https://images.your-domain.com";
```

---

## Bước 6: Tạo Remark Plugin cho R2 Images (`src/plugins/remark-r2-images.mjs`)

```javascript
import { visit } from "unist-util-visit";

/**
 * Remark plugin: Tự động chuyển relative path /images/... thành CDN URL.
 * Sử dụng: remarkR2Images({ base: "https://images.your-domain.com" })
 */
export function remarkR2Images(options = {}) {
  const base = options.base || "";

  return (tree) => {
    // Xử lý ảnh Markdown: ![alt](path)
    visit(tree, "image", (node) => {
      if (node.url.startsWith("/images/")) {
        node.url = `${base}${node.url}`;
      }
    });

    // Xử lý ảnh HTML inline: <img src="..." />
    visit(tree, "html", (node) => {
      node.value = node.value.replace(
        /src="(\/images\/[^"]+)"/g,
        `src="${base}$1"`,
      );
    });
  };
}
```

> [!TIP]
> **Lợi ích của remark plugin:** File markdown chỉ chứa relative path `/images/...`. Khi đổi CDN sau này, chỉ cần sửa base URL trong `astro.config.mjs`, không cần sửa từng file markdown.

---

## Bước 7: Import Nội Dung + Kiểm Tra

```bash
# Copy bài viết markdown từ Phase 01
cp ~/blog-migration/output/posts/*.md src/content/blog/

# Copy ảnh (tạm thời, sẽ chuyển R2 ở Phase 07)
mkdir -p public/images
cp -r ~/blog-migration/output/posts/images/. public/images/

# Chạy dev server
npm run dev
```

### Kiểm tra:
- [ ] `http://localhost:4321` — Trang chủ hiển thị
- [ ] `http://localhost:4321/blog` — Danh sách bài viết
- [ ] `http://localhost:4321/ten-bai-viet` — Bài viết đơn
- [ ] Ảnh trong bài viết hiển thị đúng
- [ ] Tiếng Việt không bị lỗi encoding

---

## Bước 8: Cấu Hình Git + Lint

```bash
# Khởi tạo Git
git init
git add .
git commit -m "Initial Astro setup"

# Cài đặt Lint tools
npm install -D eslint prettier eslint-plugin-astro prettier-plugin-astro \
  @typescript-eslint/parser typescript-eslint eslint-config-prettier \
  husky lint-staged

# Setup husky
npx husky init
```

### `.gitignore` quan trọng:
```
node_modules/
dist/
.astro/
.wrangler/
```

---

## Checklist Phase 02

- [ ] Tạo Astro project (theme có sẵn hoặc custom)
- [ ] Cấu hình `astro.config.mjs` (site URL, plugins, i18n)
- [ ] Tạo Content Schema (`content.config.ts`)
- [ ] Tạo Site Config (`config/site.ts`)
- [ ] Tạo Remark R2 Images plugin
- [ ] Import bài viết markdown + ảnh
- [ ] Dev server chạy thành công
- [ ] Bài viết hiển thị đúng nội dung
- [ ] Git initialized + lint tools cài đặt

---

> **Output của Phase 02:**
> - Astro project chạy được trên local
> - Nội dung blog đã import thành công
> - Cấu hình sẵn sàng cho các phase tiếp theo

**Next Phase:** [Phase 03 - Thiết Kế & Xây Dựng Layout](./phase-03-layout-design.md)
