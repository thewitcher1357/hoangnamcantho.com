# Plan: Remark R2 Images Plugin - Tự động chuyển relative path thành CDN URL
Created: 2026-04-08T15:07
Status: 🟡 In Progress

## Overview
Cài đặt remark plugin để Astro tự động chuyển relative path `/images/...` thành full CDN URL (`https://images.hoangnamcantho.com/images/...`) khi build hoặc dev. Xử lý cho cả:
- Ảnh trong nội dung Markdown (`![alt](path)` và `<img>` inline)
- Ảnh cover từ frontmatter (`coverImage`)

Muốn đổi CDN sau này chỉ cần sửa `R2_BASE` trong `src/config/site.ts`.

## Tech Stack
- Astro v6 + remark plugin
- `unist-util-visit` (đã cài sẵn trong package.json)
- CDN: Cloudflare R2 (`https://images.hoangnamcantho.com`)

## Phân tích hiện trạng

### Đã có sẵn:
- ✅ `unist-util-visit` đã install
- ✅ `R2_BASE` đã export trong `src/config/site.ts` (dòng 83)
- ✅ `src/plugins/` folder đã tồn tại (hiện trống)
- ✅ Tất cả blog post đều dùng `coverImage: "/images/..."` trong frontmatter

### Cần làm:
- Tạo remark plugin `src/plugins/remark-r2-images.mjs`
- Tạo utility `src/utils/r2.ts`
- Cấu hình plugin trong `astro.config.mjs`
- Cập nhật 3 component: `[...slug].astro`, `PostItem.astro`, `LatestPosts.astro`

### Nơi dùng ảnh (cần xử lý frontmatter):
| File | Cách dùng `image` |
|------|-------------------|
| `src/pages/[...slug].astro` | `image` → hiển thị cover + ogImage + Schema |
| `src/components/blog/PostItem.astro` | `post.data.image` → hiển thị thumbnail |
| `src/components/homepage/LatestPosts.astro` | `post.data.coverImage` → hiển thị thumbnail |

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Plugin & Utility | ⬜ Pending | 0% |
| 02 | Config & Components | ⬜ Pending | 0% |
| 03 | Testing | ⬜ Pending | 0% |

## Quick Commands
- Start Phase 1: `/code phase-01`
- Check progress: `/next`
- Save context: `/save-brain`
