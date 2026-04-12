# Phase 05: Xây Dựng Hệ Thống Blog

Status: ⬜ Pending
Dependencies: Phase 04

## Mục Tiêu
Xây dựng hệ thống blog hoàn chỉnh: danh sách bài viết (phân trang), trang bài viết đơn, trang category, trang tags.

---

## Bước 1: Trang Danh Sách Blog (`src/pages/blog/[...page].astro`)

### Yêu cầu:
- Phân trang (pagination) — hiển thị 9-12 bài/trang
- PostItem card: ảnh cover + tiêu đề + ngày + category + excerpt
- Sắp xếp theo ngày mới nhất

```astro
---
import type { GetStaticPaths } from "astro";
import { getCollection } from "astro:content";
import BaseLayout from "@/layouts/BaseLayout.astro";
import PostItem from "@/components/blog/PostItem.astro";

export const getStaticPaths = (async ({ paginate }) => {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );
  return paginate(sortedPosts, { pageSize: 9 });
}) satisfies GetStaticPaths;

const { page } = Astro.props;
---

<BaseLayout title="Blog" description="Bài viết mới nhất">
  <!-- Grid bài viết -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {page.data.map((post) => <PostItem post={post} />)}
  </div>

  <!-- Pagination -->
  <nav>
    {page.url.prev && <a href={page.url.prev}>← Trước</a>}
    <span>Trang {page.currentPage} / {page.lastPage}</span>
    {page.url.next && <a href={page.url.next}>Tiếp →</a>}
  </nav>
</BaseLayout>
```

---

## Bước 2: PostItem Component (`src/components/blog/PostItem.astro`)

### Cấu trúc card:
```
┌─────────────────────────┐
│ [Cover Image]           │
├─────────────────────────┤
│ Category badge          │
│ Tiêu Đề Bài Viết       │
│ 15/01/2025 · 5 phút đọc│
│ Mô tả ngắn bài viết... │
└─────────────────────────┘
```

### Xử lý cover image từ R2:
```astro
---
const { post } = Astro.props;
import { R2_BASE } from "@/config/site";

function toR2Url(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${R2_BASE}${path}`;
}

const coverImage = toR2Url(post.data.image);
---
```

---

## Bước 3: Trang Bài Viết Đơn (`src/pages/[...slug].astro`)

### Yêu cầu:
- Render Markdown content
- Cover image (từ R2)
- Meta thông tin (ngày, tác giả, category, thời gian đọc)
- Breadcrumbs
- Bài viết liên quan (related posts)
- Schema.org Article structured data

### Cấu trúc URL:
```
WordPress: /ten-bai-viet/
Astro:     /ten-bai-viet/   ← PHẢI KHỚP để giữ SEO
```

> [!IMPORTANT]
> **URL phải khớp với WordPress cũ!** Nếu WP dùng `/%postname%/` thì Astro cũng phải dùng `[...slug].astro` ở root (không phải trong `/blog/`).

### Xử lý dynamic route:
```astro
---
import { getCollection, render } from "astro:content";
import BaseLayout from "@/layouts/BaseLayout.astro";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---

<BaseLayout title={post.data.title} description={post.data.description}>
  <article class="prose prose-lg mx-auto">
    <h1>{post.data.title}</h1>
    <Content />
  </article>
</BaseLayout>
```

---

## Bước 4: Trang Category (`src/pages/category/[category].astro`)

### Yêu cầu:
- Liệt kê bài viết theo category
- URL: `/category/ten-danh-muc/`
- Tiêu đề category viết hoa đẹp (không dùng slug)

```astro
---
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  const categories = [...new Set(posts.flatMap((p) => p.data.categories || []))];

  return categories.map((cat) => ({
    params: { category: cat.toLowerCase().replace(/\s+/g, "-") },
    props: {
      category: cat,
      posts: posts.filter((p) => p.data.categories?.includes(cat)),
    },
  }));
}
---
```

---

## Bước 5: Trang Tags (`src/pages/tags/[tag].astro`)

Tương tự category nhưng dùng `tags` thay vì `categories`.

URL: `/tags/ten-tag/`

---

## Bước 6: RSS Feed (`src/pages/rss.xml.js`)

```javascript
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/config/site";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate - a.data.pubDate)
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/${post.id}/`,
      })),
  });
}
```

---

## Bước 7: Podcast RSS Feed (Tùy Chọn)

> [!NOTE]
> Dự án hoangnamcantho.com có tích hợp **podcast RSS feed** — đây là tính năng đặc biệt, không phổ biến. Chỉ làm nếu website gốc có podcast.

### Cấu trúc:
```
src/data/
├── podcast-config.json    ← Thông tin podcast channel
├── podcasts.json          ← Danh sách episodes
src/pages/feed/
└── podcast/
    └── index.astro        ← Generate RSS XML
```

### Worker xử lý podcast feed:
```
wrangler.jsonc:
  "run_worker_first": ["/feed/podcast", "/feed/podcast/"]

worker.js:
  → Set Content-Type: application/rss+xml
  → Set CORS headers
  → Cache 1 giờ
```

---

## Checklist Phase 05

- [ ] Trang blog list với pagination
- [ ] PostItem component với cover image từ R2
- [ ] Trang bài viết đơn (dynamic route)
- [ ] URL khớp với WordPress cũ
- [ ] Trang category
- [ ] Trang tags
- [ ] RSS feed
- [ ] Podcast RSS feed (nếu cần)
- [ ] Breadcrumbs trên bài viết
- [ ] Schema.org Article structured data
- [ ] Prose styling cho markdown content

---

> **Output của Phase 05:**
> - Blog system hoàn chỉnh
> - URL cấu trúc giữ nguyên từ WordPress
> - RSS/Podcast feed hoạt động

**Next Phase:** [Phase 06 - Xây Dựng Trang Dịch Vụ](./phase-06-service-pages.md)
