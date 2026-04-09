# Plan: Trang GPKD + Thay Đổi GPKD + Fix Zalo Icon
Created: 2026-04-09T09:09
Status: ✅ Complete

## Overview
3 việc:
1. Tạo trang `/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho/`
2. Tạo trang `/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho/`
3. Fix Zalo floating icon (ảnh bị die do migrate R2)
4. Update nav links + thêm menu con "Thay Đổi GPKD"

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Fix Zalo + Update Nav | ✅ Complete | 100% |
| 02 | Trang Làm GPKD | ✅ Complete | 100% |
| 03 | Trang Thay Đổi GPKD | ✅ Complete | 100% |
| 04 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Fix Zalo + Update Nav

### 1.1 Fix Zalo Icon
- **Vấn đề:** `FloatingActions.astro` dùng `src="/images/zalo-logo.svg"` — file đã bị xóa khi migrate ảnh lên R2
- **Giải pháp:** Tải SVG từ `https://hoangnamvungtau.com/_astro/zalo-logo.DbH3z4Oz_1bH0Ou.svg` → Lưu vào `src/assets/images/zalo-logo.svg` → Import dùng Astro Image hoặc inline

### 1.2 Update Navigation (`site.ts`)
- Đổi href GPKD: `/lam-giay-phep-kinh-doanh-tai-can-tho` → `/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho`
- Thêm menu con: "Thay Đổi GPKD" → `/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho`

### 1.3 Update Dich Vu page (`dich-vu.astro`)
- Đổi href service card GPKD tương tự

---

## Phase 02: Trang Làm Giấy Phép Kinh Doanh

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/lam-giay-phep-kinh-doanh-binh-duong.png` → `src/assets/images/services/lam-giay-phep-kinh-doanh.png`

### Tạo trang
**File:** `src/pages/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho.astro`

| Section | Nội dung |
|---------|---------|
| Hero Banner | "Dịch Vụ Làm Giấy Phép Kinh Doanh Tại Cần Thơ" |
| Giới thiệu | Intro text + ảnh minh họa |
| Tại sao chọn HN | 4 lợi ích cards |
| Loại hình KD | List 6 loại hình có thể đăng ký |
| Thay đổi GPKD | 7 nội dung thay đổi (links nội bộ) |
| Quy trình 3 bước | Tư vấn → Nộp → Nhận kết quả |
| Hồ sơ cần thiết | 2 nhóm: Hộ cá thể & Doanh nghiệp |
| Kết quả nhận được | Danh sách kết quả + hỗ trợ sau thành lập |
| Dịch vụ trọn gói | 5 cam kết |
| Khu vực hỗ trợ | CT + các tỉnh miền Tây |
| CTA Banner | Liên hê Hoàng Nam |

---

## Phase 03: Trang Thay Đổi Giấy Phép Kinh Doanh

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/thay-doi-giay-phep-kinh-doanh-binh-duong.png` → `src/assets/images/services/thay-doi-giay-phep-kinh-doanh.png`

### Tạo trang
**File:** `src/pages/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho.astro`

| Section | Nội dung |
|---------|---------|
| Hero Banner | "Dịch Vụ Thay Đổi Giấy Phép Kinh Doanh Tại Cần Thơ" |
| Giới thiệu | Intro + ảnh |
| 7 nội dung thay đổi | Danh sách links nội bộ |
| Lợi ích & Kinh nghiệm | Cards + text |
| Quy trình 3 bước | Numbered steps |
| Hồ sơ cần chuẩn bị | Checklist chi tiết |
| **Bảng giá** | Table 3 nhóm: Thay đổi ĐKKD / Cơ cấu vốn / Cấp lại |
| Lưu ý quan trọng | 6 mục: Địa chỉ, Tên, Vốn, Đại diện, Cổ đông, Ngành nghề |
| Kết quả nhận được | Bulleted list |
| CTA Banner | Liên hệ |

---

## Phase 04: Build & Verify

- `npm run build` → No errors
- Verify Zalo icon hiển thị
- Verify menu Dịch Vụ có 4 submenu items
- Verify 2 trang mới render đúng

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| NEW | `src/assets/images/zalo-logo.svg` | Zalo icon SVG |
| MODIFY | `src/components/ui/FloatingActions.astro` | Dùng import SVG thay vì /images/ |
| MODIFY | `src/config/site.ts` | Update hrefs + thêm menu con Thay Đổi GPKD |
| MODIFY | `src/pages/dich-vu.astro` | Update href GPKD |
| NEW | `src/assets/images/services/lam-giay-phep-kinh-doanh.png` | Ảnh GPKD |
| NEW | `src/assets/images/services/thay-doi-giay-phep-kinh-doanh.png` | Ảnh Thay Đổi GPKD |
| NEW | `src/pages/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho.astro` | Trang GPKD |
| NEW | `src/pages/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho.astro` | Trang Thay Đổi GPKD |
