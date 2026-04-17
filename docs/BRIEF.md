# 💡 BRIEF: Hoàng Nam Blog Publisher MVP

**Ngày tạo:** 2026-04-16
**Brainstorm cùng:** Anh Hoàng Nam

---

## 1. VẤN ĐỀ CẦN GIẢI QUYẾT

Hiện tại, để đăng 1 bài viết blog mới trên `hoangnamcantho.com`, cần thực hiện **thủ công** nhiều bước:

1. Tạo file `.md` trong `src/content/blog/` với đúng frontmatter format
2. Upload 2 hình ảnh (cover + content) lên Cloudflare R2 bucket thủ công
3. Đặt đúng path `/images/filename.jpg` trong markdown và frontmatter `coverImage`
4. Git commit + push để deploy

**Pain point chính:** Quy trình rời rạc, dễ sai sót, mất thời gian - đặc biệt khi đăng nhiều bài liên tục.

## 2. ĐẶC ĐIỂM KỸ THUẬT HIỆN TẠI (Đã khảo sát)

| Thành phần            | Chi tiết                                                                     |
| --------------------- | ---------------------------------------------------------------------------- |
| **Framework**         | Astro v6 + Tailwind v4                                                       |
| **Content**           | Markdown files trong `src/content/blog/`                                     |
| **Image CDN**         | Cloudflare R2 → `https://images.hoangnamcantho.com`                          |
| **Image Plugin**      | `remarkR2Images` tự chuyển `/images/...` → CDN URL                           |
| **Frontmatter**       | `title`, `date`, `description`, `categories`, `tags`, `coverImage`, `author` |
| **CoverImage format** | `/images/Ten Anh.jpg` (relative, plugin xử lý)                               |
| **Content images**    | `![alt](/images/ten-anh.jpg)` trong markdown body                            |
| **Deploy**            | Cloudflare Pages via Wrangler                                                |
| **Git**               | GitHub repo, không có CI/CD auto-deploy                                      |

### Mẫu frontmatter thực tế:

```yaml
---
title: "Thuế Hộ Kinh Doanh Cần Thơ Doanh Thu Trên 500 Triệu: Kê Khai 2026"
date: 2026-04-14
description: "Hướng dẫn thuế hộ kinh doanh..."
categories:
  - "tin-tuc-vung-tau"
tags:
  - "thuế hộ kinh doanh"
  - "kê khai thuế"
coverImage: "/images/Huong dan Thue Ho Kinh Doanh Can Tho Tren 500 Trieu 2026.jpg"
author: "Hoàng Nam"
---
```

## 3. ĐẦU VÀO CỦA TOOL

Từ user:

- **1 cục markdown** chứa: Description ở dòng đầu + H1 = Title + Body content
- **2 hình ảnh**: 1 cover + 1 content (file local hoặc URL)
- **Category** (text)
- **Tags** (danh sách)
- R2 credentials (cấu hình 1 lần)

## 4. ĐẦU RA CỦA TOOL

- ✅ 2 hình ảnh được upload lên R2 bucket `hoangnamcantho-image`
- ✅ File `.md` hoàn chỉnh với frontmatter đúng schema
- ✅ File được đặt đúng vị trí `src/content/blog/{slug}.md`
- ✅ Tự tạo slug từ title (loại dấu tiếng Việt, lowercase, dashes)
- ✅ (Tùy chọn) Git commit + push tự động

---

## 5. CÁC PHƯƠNG ÁN

---

### 🅰️ Phương án A: Node.js CLI Script (⭐ RECOMMENDED cho MVP)

**Mô tả:** Một script chạy trên terminal, nhận file markdown + 2 ảnh → tự xử lý hết.

**Cách dùng:**

```bash
node publish.mjs \
  --content ./bai-viet.md \
  --cover ./cover.jpg \
  --content-image ./noi-dung.jpg \
  --category "tin-tuc-vung-tau" \
  --tags "thuế,kê khai,Cần Thơ"
```

**Ưu điểm:**

- ⚡ Nhanh nhất để build (2-3 giờ)
- 🔧 Chạy local, không cần server
- 🔄 Dễ tích hợp vào workflow hiện tại (cùng thư mục project)
- 📦 Zero dependency ngoài `@aws-sdk/client-s3` (R2 tương thích S3 API)

**Nhược điểm:**

- 🖥️ Cần mở terminal
- 📝 Phải nhớ cú pháp command

**Tech stack:** Node.js + AWS S3 SDK (compatible R2) + fs/path

**Workflow:**

```
Input markdown → Parse (Description, Title, Body)
     ↓
Upload 2 ảnh → R2 bucket
     ↓
Generate frontmatter + inject image paths
     ↓
Write .md file to src/content/blog/
     ↓
(Optional) git add + commit + push
```

---

### 🅱️ Phương án B: Local Web Form (Single Page)

**Mô tả:** Một trang web chạy local (localhost) với form đẹp, paste markdown + drag-drop ảnh → bấm "Publish".

**Cách dùng:**

```bash
node server.mjs
# Mở browser → http://localhost:3456
```

**Ưu điểm:**

- 🎨 UI trực quan, dễ dùng
- 👁️ Preview bài viết trước khi publish
- 🖱️ Drag & Drop ảnh
- ✏️ Có thể edit frontmatter trực quan

**Nhược điểm:**

- ⏱️ Tốn hơn thời gian build (~4-6 giờ)
- 🖥️ Cần start server mỗi lần dùng
- 📦 Cần thêm Express/Fastify

**Tech stack:** Node.js + Express + Vanilla HTML/CSS/JS + AWS S3 SDK

**UI mockup:**

```
┌─────────────────────────────────────────┐
│  📝 Hoàng Nam Blog Publisher            │
├─────────────────────────────────────────┤
│                                         │
│  [Paste Markdown Content Here........]  │
│  [....................................]  │
│  [....................................]  │
│                                         │
│  📸 Cover Image: [Drag & Drop / Browse] │
│  📸 Content Image: [Drag & Drop]        │
│                                         │
│  Category: [tin-tuc-vung-tau     ▼]     │
│  Tags:     [thuế] [kê khai] [+ Add]    │
│                                         │
│  ─── Preview ──────────────────────     │
│  Title: Chốt Thuế Chuyển Trụ Sở...     │
│  Slug: chot-thue-chuyen-tru-so...       │
│  Cover: ✅ uploaded                      │
│                                         │
│  [🚀 PUBLISH]  [📋 Copy Markdown]      │
└─────────────────────────────────────────┘
```

---

### 🅲 Phương án C: Cloudflare Worker API + Simple Frontend

**Mô tả:** Deploy 1 Worker trên Cloudflare có R2 binding, frontend là 1 static page gọi API.

**Cách dùng:** Mở URL `https://publisher.hoangnamcantho.com` → paste + upload → publish

**Ưu điểm:**

- 🌐 Dùng từ bất kỳ đâu (không cần máy local)
- ☁️ R2 upload native (Worker có R2 binding, không cần credentials)
- 🔄 Có thể tạo file qua GitHub API (không cần git local)

**Nhược điểm:**

- ⏱️ Tốn nhiều thời gian build hơn (~6-8 giờ)
- 🔒 Cần bảo mật endpoint (auth)
- 🌐 Phụ thuộc internet
- 📦 Setup phức tạp hơn (Worker + R2 binding + GitHub token)

**Tech stack:** Cloudflare Worker + R2 binding + GitHub API + HTML frontend

---

### 🅳 Phương án D: GitHub Actions Workflow

**Mô tả:** Push 1 file markdown + ảnh vào thư mục `drafts/` → GitHub Actions tự xử lý upload R2 + move file + deploy.

**Cách dùng:**

```bash
# Copy files vào drafts/
cp bai-viet.md ./drafts/
cp cover.jpg ./drafts/images/
git add . && git commit -m "New post" && git push
# GitHub Actions tự chạy
```

**Ưu điểm:**

- 🤖 Tự động hoàn toàn sau khi push
- 🔄 Tích hợp vào CI/CD flow
- 📝 Có thể review qua PR

**Nhược điểm:**

- ⏱️ Chậm (phải chờ Actions chạy 1-3 phút)
- 🧩 Debug khó hơn
- 📦 Cần setup GitHub Secrets cho R2 credentials
- ❌ Vẫn phải tạo file theo đúng format thủ công

---

## 6. SO SÁNH CÁC PHƯƠNG ÁN

| Tiêu chí             | A: CLI      | B: Web Form | C: Worker   | D: GH Actions |
| -------------------- | ----------- | ----------- | ----------- | ------------- |
| **Thời gian build**  | ⭐ 2-3h     | 4-6h        | 6-8h        | 3-4h          |
| **Dễ dùng**          | 🟡 Terminal | ⭐ UI đẹp   | ⭐ Web      | 🔴 Git        |
| **Tốc độ publish**   | ⭐ Tức thì  | ⭐ Tức thì  | 🟡 Network  | 🔴 1-3 phút   |
| **Không cần server** | ⭐ Có       | 🔴 Cần      | ⭐ Cloud    | ⭐ Có         |
| **Dùng mọi nơi**     | 🔴 Local    | 🔴 Local    | ⭐ Mọi nơi  | 🟡 Cần git    |
| **Bảo mật**          | ⭐ Local    | ⭐ Local    | 🟡 Cần auth | ⭐ GitHub     |
| **Mở rộng sau**      | 🟡          | ⭐          | ⭐          | 🟡            |

## 7. GỢI Ý CHIẾN LƯỢC

### 🏆 MVP ngay bây giờ: **Phương án A (CLI Script)**

- Build nhanh nhất, giải quyết pain point ngay
- Chạy ngay trên máy, trong thư mục project

### 📈 Nâng cấp sau (Phase 2): **Phương án B (Web Form)**

- Khi cần UI đẹp, preview, hoặc cho nhiều người dùng
- Có thể wrap CLI logic thành API

### 🚀 Tương lai (Phase 3): **Phương án C (Worker)**

- Khi cần publish từ bất kỳ đâu
- Tích hợp sâu với Cloudflare ecosystem

---

## 8. CHI TIẾT MVP (Phương án A - CLI)

### Core Features:

- [x] Parse markdown: tách Description, Title (H1), Body
- [x] Tạo slug từ title (loại dấu tiếng Việt)
- [x] Upload 2 ảnh lên R2 via S3 API
- [x] Generate frontmatter đúng schema
- [x] Inject cover image path vào frontmatter
- [x] Inject content image vào body (thay vào vị trí sau H2 đầu tiên hoặc user chỉ định)
- [x] Write file `.md` vào `src/content/blog/`
- [x] Git add + commit + push (optional flag)

### Config file (`.publish.json` - tạo 1 lần):

```json
{
  "r2": {
    "accountId": "xxx",
    "accessKeyId": "xxx",
    "secretAccessKey": "xxx",
    "bucketName": "hoangnamcantho-image",
    "publicUrl": "https://images.hoangnamcantho.com"
  },
  "defaults": {
    "author": "Hoàng Nam",
    "category": "tin-tuc-vung-tau"
  },
  "outputDir": "src/content/blog"
}
```

### Dependencies tối thiểu:

```json
{
  "@aws-sdk/client-s3": "latest",
  "mime-types": "latest"
}
```

## 9. BƯỚC TIẾP THEO

→ Chọn phương án rồi chạy `/plan` để lên thiết kế chi tiết và bắt tay code!
