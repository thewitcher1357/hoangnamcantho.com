# Plan: Blog Publisher MVP (Web Form Local)

Created: 2026-04-16T20:07
Status: 🟡 Planning

## Overview

Tool web form chạy local giúp đăng bài blog mới lên `hoangnamcantho.com` nhanh chóng.
User paste markdown + upload 2 ảnh + điền metadata → Tool tự upload ảnh lên R2, tạo file .md đúng format, và (tùy chọn) git push.

## Tech Stack

- **Runtime:** Node.js (ESM)
- **Server:** Express.js (lightweight)
- **R2 Upload:** @aws-sdk/client-s3 (R2 tương thích S3 API)
- **Git:** simple-git (optional auto-push)
- **Frontend:** Vanilla HTML + CSS + JS (single page, no framework)
- **Markdown Preview:** marked.js (client-side)

## Architecture

```
tools/blog-publisher/
├── package.json
├── server.mjs              # Express server (port 3456)
├── lib/
│   ├── parser.mjs          # Parse markdown: Description, Title, Body
│   ├── r2-upload.mjs       # Upload images to Cloudflare R2
│   ├── slug.mjs            # Vietnamese-safe slug generator
│   └── publisher.mjs       # Orchestrate: parse → upload → write → git
├── public/
│   ├── index.html          # Main form UI
│   ├── style.css           # Dark theme, modern UI
│   └── app.js              # Frontend logic
└── config.example.json     # Template config (R2 credentials)
```

## Input Format

```
Description: Mô tả SEO của bài viết...

# Tiêu Đề Bài Viết H1

Nội dung markdown body...
```

## Output

- 2 ảnh uploaded tới R2: `/images/{slug}-cover.jpg`, `/images/{slug}-content.jpg`
- File `src/content/blog/{slug}.md` với frontmatter chuẩn
- (Optional) git commit + push

## Phases

| Phase | Name               | Status     | Tasks |
| ----- | ------------------ | ---------- | ----- |
| 01    | Project Setup      | ⬜ Pending | 5     |
| 02    | Backend Core       | ⬜ Pending | 8     |
| 03    | Frontend UI        | ⬜ Pending | 10    |
| 04    | Integration & Test | ⬜ Pending | 6     |

**Tổng:** 29 tasks | Ước tính: 1 session (~3-4 giờ)

## Quick Commands

- Start Phase 1: `/code phase-01`
- Check progress: `/next`
