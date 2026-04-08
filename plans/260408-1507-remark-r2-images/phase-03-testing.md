# Phase 03: Testing & Verification
Status: ⬜ Pending
Dependencies: Phase 02

## Objective
Kiểm tra tất cả ảnh đã chuyển sang CDN URL đúng cách.

## Test Criteria

### 1. Dev Server
- [ ] `npm run dev` chạy thành công, không lỗi
- [ ] Truy cập trang blog list → ảnh thumbnail load từ CDN
- [ ] Truy cập 1 bài blog cụ thể → ảnh cover load từ CDN
- [ ] Ảnh trong nội dung Markdown cũng load từ CDN
- [ ] Trang chủ → section "Có gì mới?" hiển thị ảnh từ CDN

### 2. View Source / Inspect
- [ ] Không còn `src="/images/..."` (relative path)
- [ ] Tất cả ảnh đều là `src="https://images.hoangnamcantho.com/images/..."`

### 3. Build
- [ ] `npm run build` thành công, không lỗi

### 4. Edge Cases
- [ ] Ảnh đã có full URL (http...) → giữ nguyên, không thêm prefix
- [ ] Bài viết không có coverImage → không lỗi, không hiển thị ảnh
- [ ] Ảnh inline HTML trong Markdown → cũng được chuyển CDN URL

## Verification Steps
1. Mở browser → truy cập localhost
2. Inspect Element → kiểm tra src attribute của các ảnh
3. Kiểm tra Network tab → ảnh load từ `images.hoangnamcantho.com`

---
✅ Hoàn thành feature!
