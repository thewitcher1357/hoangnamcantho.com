# Phase 02: Backend Core

Status: ⬜ Pending
Dependencies: Phase 01

## Objective

Xây dựng backend xử lý: parse markdown, upload R2, tạo file .md, optional git push.

## Implementation Steps

### 2.1 Markdown Parser (`lib/parser.mjs`)

1. [ ] Parse dòng đầu `Description: ...` → extract description
2. [ ] Parse H1 `# ...` → extract title (loại bỏ dấu `#`)
3. [ ] Phần còn lại → body content
4. [ ] Handle edge cases: không có Description, không có H1

### 2.2 Slug Generator (`lib/slug.mjs`)

5. [ ] Chuyển tiếng Việt có dấu → không dấu (ă→a, ơ→o, đ→d...)
6. [ ] Lowercase, replace spaces/special chars → dashes
7. [ ] Trim dashes thừa, max length 80 chars

### 2.3 R2 Upload (`lib/r2-upload.mjs`)

8. [ ] Init S3Client với R2 endpoint: `https://{accountId}.r2.cloudflarestorage.com`
9. [ ] Function `uploadImage(file, key)` → PutObject to R2
10. [ ] Return public URL: `{publicUrl}/images/{key}`
11. [ ] Handle errors: auth fail, network, file too large

### 2.4 Publisher Orchestrator (`lib/publisher.mjs`)

12. [ ] Function `publish({ markdown, coverFile, contentImageFile, category, tags })`
13. [ ] Flow: parse → slugify → upload 2 images → generate frontmatter → write .md
14. [ ] Frontmatter generation đúng schema hiện tại
15. [ ] Image insertion: cover → frontmatter `coverImage`, content → chèn `![alt](/images/key)` sau H2 đầu tiên

### 2.5 Express Server (`server.mjs`)

16. [ ] POST `/api/publish` - nhận form data (markdown + 2 files + metadata)
17. [ ] POST `/api/preview` - chỉ parse + trả preview (không publish)
18. [ ] GET `/api/categories` - trả danh sách categories có sẵn
19. [ ] Multer middleware cho file upload (limit 10MB/file)
20. [ ] Serve static files từ `public/`

## API Contract

### POST /api/publish

```
Request: multipart/form-data
  - markdown: string (raw markdown content)
  - coverImage: file (jpg/png/webp)
  - contentImage: file (jpg/png/webp)
  - category: string
  - tags: string (comma-separated)
  - imagePosition: string ("after-h2" | "after-intro" | "custom-line-N")
  - autoGit: boolean

Response: 200
{
  "success": true,
  "slug": "chot-thue-chuyen-tru-so-...",
  "filePath": "src/content/blog/chot-thue-...",
  "coverUrl": "https://images.hoangnamcantho.com/images/...",
  "contentImageUrl": "https://images.hoangnamcantho.com/images/..."
}
```

### POST /api/preview

```
Request: application/json
  - markdown: string

Response: 200
{
  "title": "...",
  "description": "...",
  "slug": "...",
  "bodyHtml": "...",
  "frontmatter": { ... }
}
```

## Test Criteria

- [ ] Parse markdown mẫu → đúng title, description, body
- [ ] Slug tiếng Việt: "Chốt Thuế Chuyển Trụ Sở" → "chot-thue-chuyen-tru-so"
- [ ] Upload ảnh test lên R2 → accessible via public URL
- [ ] File .md tạo ra → Astro dev build thành công

---

Next Phase: → phase-03-frontend.md
