# Phase 04: Integration & Test

Status: ⬜ Pending
Dependencies: Phase 02, Phase 03

## Objective

Kết nối Frontend ↔ Backend, test end-to-end toàn bộ flow, và polish UX.

## Implementation Steps

### 4.1 End-to-End Flow

1. [ ] Test full flow: paste markdown → upload ảnh → preview → publish
2. [ ] Verify file .md tạo đúng vị trí `src/content/blog/{slug}.md`
3. [ ] Verify 2 ảnh upload thành công lên R2 và accessible
4. [ ] Verify frontmatter đúng schema (Astro build không lỗi)
5. [ ] Test git auto-commit + push (nếu bật)

### 4.2 Error Handling & UX

6. [ ] R2 upload fail → hiện error rõ ràng, không mất data đã nhập
7. [ ] Duplicate slug → cảnh báo và đề xuất slug mới
8. [ ] File quá lớn → reject trước khi upload
9. [ ] Network error → retry suggestion

### 4.3 Polish

10. [ ] Thêm npm script `"publisher"` ở project root package.json
11. [ ] README hướng dẫn setup config.json
12. [ ] Test với bài viết markdown mẫu từ BRIEF

## Verification

- [ ] `npm run publisher` → server start, mở browser
- [ ] Publish 1 bài test → file đúng format
- [ ] `npm run dev` (Astro) → bài mới hiển thị đúng
- [ ] Ảnh load từ CDN images.hoangnamcantho.com → OK

---

✅ DONE → Tool sẵn sàng sử dụng!
