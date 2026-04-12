# Phase 09: Tối Ưu Hiệu Năng & SEO

Status: ⬜ Pending
Dependencies: Phase 08

## Mục Tiêu
Tối ưu hiệu năng (Core Web Vitals), ảnh (responsive, WebP), cache, và SEO (Schema.org, meta tags).

> [!NOTE]
> Phase này kết hợp nội dung từ **Phần 5** (thuanbui.me) về tối ưu ảnh + kinh nghiệm tối ưu Core Web Vitals từ dự án hoangnamcantho.com.

---

## I. Tối Ưu Hình Ảnh

### Bước 1: Cloudflare Worker cho Image Cache

Tạo Worker mới trên Cloudflare Dashboard để thiết lập cache headers cho ảnh:

```javascript
export default {
  async fetch(request) {
    const response = await fetch(request);
    if (!response.ok) return response;

    const url = new URL(request.url);
    const isImage = /\.(webp|jpe?g|png|gif|svg|avif)$/i.test(url.pathname);
    if (!isImage) return response;

    const headers = new Headers(response.headers);
    // Cache 1 năm tại browser + Cloudflare edge
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('Vary', 'Accept');

    return new Response(response.body, {
      status: response.status,
      headers,
    });
  },
};
```

### Cấu hình route:
Vào Settings → Domains & Routes → Add:
- Route: `images.your-domain.com/images/*`
- Zone: your-domain.com

---

### Bước 2: Responsive Images (2 cách)

#### Cách 1: Upload WebP thủ công (Không tốn phí)

1. Chuyển ảnh sang WebP:
```bash
# Cài cwebp
sudo apt install webp  # Linux
brew install webp       # macOS

# Chuyển đổi tất cả ảnh
for f in public/images/*.{jpg,jpeg,png}; do
  cwebp -q 80 "$f" -o "${f%.*}.webp"
done
```

2. Upload WebP lên R2:
```bash
rclone copy images/ hoangnam-images:bucket/images/ --progress
```

3. Tạo rehype plugin (`src/plugins/rehype-picture-webp.mjs`):
```javascript
import { visit } from 'unist-util-visit';
import { R2_BASE } from '../config/site';

export function rehypePictureWebp() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img') return;
      if (!parent || index == null) return;

      const src = node.properties?.src || '';
      if (!src.startsWith(R2_BASE)) return;
      if (!/\.(jpe?g|png)$/i.test(src)) return;

      const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

      parent.children[index] = {
        type: 'element',
        tagName: 'picture',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'source',
            properties: { type: 'image/webp', srcSet: webpSrc },
            children: [],
          },
          {
            ...node,
            properties: {
              ...node.properties,
              loading: 'lazy',
              decoding: 'async',
            },
          },
        ],
      };
    });
  };
}
```

#### Cách 2: Cloudflare Image Transformations (On-the-fly, có giới hạn free)

```javascript
// src/plugins/rehype-picture-webp.mjs
import { visit } from 'unist-util-visit';
import { R2_BASE } from '../config/site';

const WIDTHS = [480, 800, 1200];
const SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px';

function buildTransformUrl(src, width) {
  const path = src.replace(R2_BASE, '');
  return `${R2_BASE}/cdn-cgi/image/width=${width},format=auto,onerror=redirect${path}`;
}

export function rehypePictureWebp() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img') return;
      if (!parent || index == null) return;

      const src = node.properties?.src || '';
      if (!src.startsWith(R2_BASE)) return;

      const srcset = WIDTHS.map(w => `${buildTransformUrl(src, w)} ${w}w`).join(', ');
      const defaultSrc = buildTransformUrl(src, 800);

      parent.children[index] = {
        type: 'element',
        tagName: 'picture',
        properties: {},
        children: [
          {
            type: 'element',
            tagName: 'source',
            properties: { type: 'image/webp', srcSet: srcset, sizes: SIZES },
            children: [],
          },
          {
            ...node,
            properties: {
              ...node.properties,
              src: defaultSrc,
              srcSet: srcset,
              sizes: SIZES,
              loading: 'lazy',
              decoding: 'async',
            },
          },
        ],
      };
    });
  };
}
```

> [!TIP]
> Cách 2 sử dụng Cloudflare Image Transformations: 5,000 transforms/tháng miễn phí. Tham số `onerror=redirect` đảm bảo ảnh gốc hiển thị nếu vượt quota.

### Cập nhật `astro.config.mjs`:
```javascript
import { rehypePictureWebp } from "./src/plugins/rehype-picture-webp.mjs";

export default defineConfig({
  markdown: {
    remarkPlugins: [/* ... */],
    rehypePlugins: [rehypePictureWebp],  // ← Thêm rehype plugin
  },
});
```

---

## II. Tối Ưu Core Web Vitals

### CLS (Cumulative Layout Shift):
- [ ] Thiết lập `width` và `height` cho tất cả ảnh
- [ ] Font loading: `font-display: swap` + preconnect
- [ ] Navbar không gây layout shift khi sticky

### LCP (Largest Contentful Paint):
- [ ] Hero image: `loading="eager"` (không lazy load)
- [ ] Critical CSS inline
- [ ] Preload hero image

### FID/INP (Interaction to Next Paint):
- [ ] Minimize JavaScript
- [ ] Defer non-critical scripts
- [ ] Astro mặc định đã tốt (0 JS ship by default)

---

## III. SEO Nâng Cao

### Schema.org Structured Data:

```astro
<!-- LocalBusiness (cho trang chủ) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Tên công ty",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "Cần Thơ",
    "addressCountry": "VN"
  },
  "telephone": "+84-xxx-xxx-xxx",
  "url": "https://your-domain.com"
}
</script>

<!-- Article (cho bài blog) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "datePublished": "{pubDate}",
  "author": { "@type": "Person", "name": "{author}" }
}
</script>
```

### Các mục SEO khác:
- [ ] Canonical URLs cho mọi trang
- [ ] Open Graph meta tags
- [ ] Twitter Card meta tags
- [ ] Sitemap.xml tự động (đã cài `@astrojs/sitemap`)
- [ ] robots.txt chính xác

---

## IV. Performance Testing

### Công cụ kiểm tra:
```
https://pagespeed.web.dev/         ← Google PageSpeed Insights
https://www.webpagetest.org/       ← WebPageTest
https://validator.w3.org/          ← W3C Validator
https://search.google.com/test/rich-results  ← Rich Results Test
```

### Mục tiêu:
| Metric | Mobile | Desktop |
|--------|--------|---------|
| Performance | > 90 | > 95 |
| Accessibility | > 90 | > 90 |
| Best Practices | > 90 | > 90 |
| SEO | > 95 | > 95 |

> [!TIP]
> Astro + Cloudflare Workers thường đạt 95-100 Performance trên Desktop mà không cần tối ưu nhiều. Cần chú ý chủ yếu cho Mobile.

---

## Checklist Phase 09

- [ ] Worker cache headers cho ảnh (1 năm)
- [ ] Responsive images (WebP/AVIF)
- [ ] Lazy loading cho ảnh (trừ hero)
- [ ] Core Web Vitals pass (CLS, LCP, INP)
- [ ] Schema.org structured data
- [ ] Canonical URLs + Open Graph
- [ ] Sitemap + robots.txt
- [ ] PageSpeed Insights > 90 (mobile)
- [ ] Rich Results Test pass

---

> **Output của Phase 09:**
> - Ảnh tối ưu (responsive, WebP, cached)
> - PageSpeed > 90 mobile
> - SEO structured data hoàn chỉnh

**Next Phase:** [Phase 10 - Go Live & Hậu Kiểm](./phase-10-go-live.md)
