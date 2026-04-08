# Phase 02: Config & Components
Status: ⬜ Pending
Dependencies: Phase 01

## Objective
Cấu hình remark plugin trong Astro và cập nhật các component để xử lý ảnh frontmatter qua CDN.

## Implementation Steps

### 1. Cập nhật `astro.config.mjs`
- [ ] Import `remarkR2Images` từ `./src/plugins/remark-r2-images.mjs`
- [ ] Thêm vào `remarkPlugins` array (cùng với `remarkReadingTime` đã có)

```javascript
// Thêm import
import { remarkR2Images } from "./src/plugins/remark-r2-images.mjs";

// Thêm vào remarkPlugins array
markdown: {
  remarkPlugins: [
    remarkR2Images,  // ← THÊM MỚI
    remarkReadingTime,
    () => { ... },   // existing reading time plugin
  ],
},
```

### 2. Cập nhật `src/pages/[...slug].astro`
- [ ] Import `toR2Url` từ `@/utils/r2`
- [ ] Tạo `coverImage = toR2Url(image)` 
- [ ] Dùng `coverImage` thay `image` cho: hiển thị ảnh, ogImage, Schema

**Trước:**
```astro
const metadata = { title, description, ogImage: image };
{image && <img src={image} ... />}
<Schema data={{ image, ... }} />
```

**Sau:**
```astro
import { toR2Url } from "@/utils/r2";
const coverImage = toR2Url(image);
const metadata = { title, description, ogImage: coverImage };
{coverImage && <img src={coverImage} ... />}
<Schema data={{ image: coverImage, ... }} />
```

### 3. Cập nhật `src/components/blog/PostItem.astro`
- [ ] Import `toR2Url` từ `@/utils/r2`
- [ ] Tạo `coverImage = toR2Url(post.data.image)`
- [ ] Dùng `coverImage` thay `post.data.image`

**Trước:**
```astro
{post.data.image && <img src={post.data.image} ... />}
```

**Sau:**
```astro
import { toR2Url } from "@/utils/r2";
const coverImage = toR2Url(post.data.image);
{coverImage && <img src={coverImage} ... />}
```

### 4. Cập nhật `src/components/homepage/LatestPosts.astro`
- [ ] Import `toR2Url` từ `@/utils/r2`
- [ ] Dùng `toR2Url(post.data.coverImage)` trong template

**Trước:**
```astro
{post.data.coverImage ? <img src={post.data.coverImage} ... /> : ...}
```

**Sau:**
```astro
import { toR2Url } from "@/utils/r2";
// Trong map():
const coverUrl = toR2Url(post.data.coverImage);
{coverUrl ? <img src={coverUrl} ... /> : ...}
```

## Files to Modify
- `astro.config.mjs` — Thêm remarkR2Images plugin
- `src/pages/[...slug].astro` — Xử lý cover image + ogImage + Schema
- `src/components/blog/PostItem.astro` — Xử lý thumbnail image
- `src/components/homepage/LatestPosts.astro` — Xử lý thumbnail image

## Test Criteria
- [ ] `npm run dev` chạy không lỗi
- [ ] Ảnh cover hiển thị đúng CDN URL
- [ ] Ảnh trong nội dung Markdown hiển thị đúng CDN URL

---
Next Phase: [phase-03-testing.md](./phase-03-testing.md)
