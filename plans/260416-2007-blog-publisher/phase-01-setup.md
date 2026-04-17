# Phase 01: Project Setup

Status: ⬜ Pending
Dependencies: None

## Objective

Khởi tạo project `tools/blog-publisher/` với đầy đủ dependencies và cấu trúc folder.

## Implementation Steps

1. [ ] Tạo folder `tools/blog-publisher/`
2. [ ] Init `package.json` (type: module, scripts: dev/start)
3. [ ] Install dependencies: `express`, `@aws-sdk/client-s3`, `mime-types`, `simple-git`, `multer`
4. [ ] Tạo `config.example.json` (template R2 credentials)
5. [ ] Thêm `tools/blog-publisher/config.json` vào `.gitignore` của project chính

## Files to Create

- `tools/blog-publisher/package.json`
- `tools/blog-publisher/config.example.json`
- `tools/blog-publisher/server.mjs` (skeleton)
- `tools/blog-publisher/lib/` (empty folder)
- `tools/blog-publisher/public/` (empty folder)

## Config Template

```json
{
  "r2": {
    "accountId": "YOUR_ACCOUNT_ID",
    "accessKeyId": "YOUR_ACCESS_KEY",
    "secretAccessKey": "YOUR_SECRET_KEY",
    "bucketName": "hoangnamcantho-image",
    "publicUrl": "https://images.hoangnamcantho.com"
  },
  "blog": {
    "contentDir": "../../src/content/blog",
    "author": "Hoàng Nam",
    "defaultCategory": "tin-tuc-vung-tau"
  },
  "server": {
    "port": 3456
  }
}
```

---

Next Phase: → phase-02-backend.md
