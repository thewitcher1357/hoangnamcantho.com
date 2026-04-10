# Plan: Batch 5 – 5 Trang Dịch Vụ Mới (Không thêm submenu)
Created: 2026-04-10T02:49
Status: 🟡 In Progress

## Overview
Tạo 4 trang dịch vụ mới hoangnamcantho.com.
**KHÔNG thêm submenu** vào menu "Dịch vụ" – chỉ tạo trang, thêm card vào trang dich-vu.astro index.

1. `/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho/` – giữ nguyên trang hiện tại
2. `/dich-vu/lam-bao-hiem-xa-hoi-can-tho/` – Dịch vụ làm BHXH tại Cần Thơ (MỚI)
3. `/dich-vu/dich-vu-chuyen-doi-loai-hinh-doanh-nghiep-cong-ty-tai-can-tho/` – Chuyển đổi loại hình DN (MỚI)
4. `/dich-vu/dich-vu-dang-ky-giay-phep-ho-kinh-doanh-tai-can-tho/` – Đăng ký GPKD hộ kinh doanh (MỚI)
5. `/dich-vu/dich-vu-ke-toan-thue-cho-ho-kinh-doanh-tai-can-tho/` – Kế toán thuế hộ kinh doanh (MỚI)

## Lưu ý quan trọng
- ❌ **KHÔNG thêm submenu** vào `site.ts` cho menu "Dịch vụ"
- ✅ **CÓ thêm 4 service cards MỚI** vào `dich-vu.astro` (services array)
- ⚠️ Trang BCTC đã có card rồi → **không thêm card trùng**
- ✅ Tạo 4 trang .astro mới + overwrite 1 trang trong `src/pages/dich-vu/`
- Trang Chuyển đổi loại hình và Đăng ký GPKD có 2 ảnh mỗi trang (download cả 2)

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Update Dich Vu Index (4 cards mới) | ✅ Complete | 100% |
| 02 | Trang Làm BHXH | ✅ Complete | 100% |
| 03 | Trang Chuyển Đổi Loại Hình DN | ✅ Complete | 100% |
| 04 | Trang Đăng Ký GPKD Hộ Kinh Doanh | ✅ Complete | 100% |
| 05 | Trang Kế Toán Thuế Hộ Kinh Doanh | ✅ Complete | 100% |
| 06 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Update Dich Vu Index (KHÔNG update site.ts)

### 1.1 Update `dich-vu.astro` – Thêm 4 service cards MỚI vào `services` array

Thêm 4 cards mới (BCTC đã có card từ Batch 4, không thêm lại):
- "Làm Bảo Hiểm Xã Hội" → `/dich-vu/lam-bao-hiem-xa-hoi-can-tho`
- "Chuyển Đổi Loại Hình Doanh Nghiệp" → `/dich-vu/dich-vu-chuyen-doi-loai-hinh-doanh-nghiep-cong-ty-tai-can-tho`
- "Đăng Ký Giấy Phép Hộ Kinh Doanh" → `/dich-vu/dich-vu-dang-ky-giay-phep-ho-kinh-doanh-tai-can-tho`
- "Kế Toán Thuế Hộ Kinh Doanh" → `/dich-vu/dich-vu-ke-toan-thue-cho-ho-kinh-doanh-tai-can-tho`

### 1.2 KHÔNG chỉnh sửa `site.ts`


---

## Phase 02: Trang Làm Bảo Hiểm Xã Hội

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/lam-bhxh-binh-duong.png`
  → `src/assets/images/services/lam-bhxh.png`

### Tạo trang (MỚI)
**File:** `src/pages/dich-vu/lam-bao-hiem-xa-hoi-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Làm Bảo Hiểm Xã Hội Tại Cần Thơ" |
| Giới thiệu | Intro phần mềm BHXH + ảnh minh họa + cam kết thay mặt DN |
| **Bảng giá BHXH** | Table biểu phí: 4 mức lao động × 3 cột (Cấp MĐV / Báo Tăng Giảm / Thai sản) + Lưu ý + Ưu đãi |
| DV BHXH tại Cần Thơ | 6 mục dịch vụ Hoàng Nam thực hiện |
| Cam kết của Hoàng Nam | 5 cam kết (giao sổ, đảm bảo mức đóng thấp nhất, hướng dẫn thủ tục...) |
| Lý do thuê DV BHXH | 5 đoạn lý do chuyên nghiệp + câu kết luận in đậm |
| Những công việc HN xử lý | 6 bước (ĐK lần đầu → Tử tuất) |
| Kết luận + DV khác | 2 đoạn kết + liệt kê DV đi kèm |
| Info Box | Địa chỉ 03 Quản Trọng Hoàng + SĐT 091.888.3179 + Email + Web |
| Khu vực hỗ trợ | Quận Ninh Kiều, Cái Răng, Bình Thủy, Ô Môn, Thốt Nốt + 4 huyện |

---

## Phase 03: Trang Chuyển Đổi Loại Hình Doanh Nghiệp

### Tải hình ảnh (2 ảnh)
- `http://hoangnamcantho.com/wp-content/uploads/2025/07/Dich-vu-chuyen-doi-loai-hinh-doanh-nghiep-tai-can-tho.jpg`
  → `src/assets/images/services/chuyen-doi-loai-hinh-dn.jpg`
- `http://hoangnamcantho.com/wp-content/uploads/2025/07/Ho-so-chuyen-doi-loai-hinh-doanh-nghiep-bao-gom_-visual-selection.png`
  → `src/assets/images/services/ho-so-chuyen-doi-loai-hinh.png`

### Tạo trang (MỚI)
**File:** `src/pages/dich-vu/dich-vu-chuyen-doi-loai-hinh-doanh-nghiep-cong-ty-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Chuyển Đổi Loại Hình Doanh Nghiệp Tại Cần Thơ" |
| Intro + Ảnh 1 | Đoạn mở đầu cam kết 3-5 ngày + ảnh hero |
| Tầm quan trọng | H2/H3 – 3 lợi ích + trường hợp phổ biến (3 loại chuyển đổi) |
| Rủi ro & Lợi ích | H2/H3 – 3 rủi ro nếu không chuyển đổi + 3 lợi ích khi chuyển |
| Quy trình | 3 bước: Chuẩn bị → Nộp hồ sơ SKH&ĐT → Nhận kết quả |
| Hồ sơ cần chuẩn bị | Ảnh 2 + 7 loại giấy tờ + 3 lưu ý quan trọng |
| Chi phí | 2 mức phí DV + lệ phí nhà nước 200k + cam kết không phát sinh |
| Lợi ích sử dụng DV | 3 nhóm: Nhanh, Chuyên gia, Tư vấn miễn phí |
| Tại sao chọn Hoàng Nam | 2 nhóm: Trọn gói A-Z + Tiết kiệm so tự làm |
| CTA | H2 kêu gọi hotline 091.888.31.79 |
| Info Box | Địa chỉ 03 Đ. Quản Trọng Hoàng, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam + SĐT + Email tructuyenhoangnam |
| Khu vực hỗ trợ | Quận Ninh Kiều, Cái Răng, Bình Thủy, Ô Môn, Thốt Nốt + 4 huyện |

---

## Phase 04: Trang Đăng Ký Giấy Phép Hộ Kinh Doanh

### Tải hình ảnh (1 ảnh)
- `http://hoangnamcantho.com/wp-content/uploads/2025/07/Dich-Vu-Dang-Ky-Giay-Phep-Ho-Kinh-Doanh-tai-Can-Tho.jpg`
  → `src/assets/images/services/dang-ky-ho-kinh-doanh.jpg`

### Tạo trang (MỚI)
**File:** `src/pages/dich-vu/dich-vu-dang-ky-giay-phep-ho-kinh-doanh-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Đăng Ký Giấy Phép Hộ Kinh Doanh Tại Cần Thơ" |
| Intro + Ảnh | Đoạn mở đầu cam kết 3 ngày + ảnh hero |
| Ai cần đăng ký | H2/H3 – 3 trường hợp bắt buộc + ví dụ thực tế |
| Lợi ích hợp pháp hóa | 4 lợi ích (Tránh phạt, Uy tín, Mở rộng, Pháp lý) |
| Hồ sơ & Quy trình | H2 – 5 loại giấy tờ + Lưu ý + 2 cách nộp (tự làm vs Hoàng Nam) |
| Thời gian & Chi phí | Thời gian 3-5 ngày + lệ phí nhà nước + phí DV 800k-1.5tr |
| Sai lầm thường gặp | 3 sai lầm (Tên sai/trùng, Thiếu CChN, Khai sai địa chỉ) với Giải pháp |
| DV trọn gói Hoàng Nam | 3 nhóm: Tư vấn A-Z, Chi phí minh bạch, Quy trình 3 ngày |
| Câu chuyện thực tế | Case study quán ăn Cái Răng + kết quả |
| CTA | H2 kêu gọi hotline 091.888.31.79 + báo giá trọn gói |
| Info Box | Địa chỉ 03 Đ. Quản Trọng Hoàng, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam + SĐT + Email tructuyenhoangnam |
| Khu vực hỗ trợ | Quận Ninh Kiều, Cái Răng, Bình Thủy, Ô Môn, Thốt Nốt + 4 huyện |

---

## Phase 05: Trang Kế Toán Thuế Hộ Kinh Doanh

### Tải hình ảnh (2 ảnh)
- `http://hoangnamcantho.com/wp-content/uploads/2025/07/Dich-Vu-Ke-Toan-Thue-Cho-Ho-Kinh-Doanh-tai-Can-Tho.jpg`
  → `src/assets/images/services/ke-toan-thue-ho-kinh-doanh.jpg`
- `http://hoangnamcantho.com/wp-content/uploads/2025/07/Ho-So-Can-Chuan-Bi-visual-selection-1.png`
  → `src/assets/images/services/ho-so-can-chuan-bi.png`

### Tạo trang (MỚI)
**File:** `src/pages/dich-vu/dich-vu-ke-toan-thue-cho-ho-kinh-doanh-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Kế Toán Thuế Cho Hộ Kinh Doanh Tại Cần Thơ" |
| Intro + Ảnh 1 | Đoạn mở đầu cam kết Nghị định 70 + Thông tư 40 + ảnh hero |
| Tại sao cần DV chuyên nghiệp | H2/H3 – 3 rủi ro tự làm + 4 quy định pháp luật + 4 lợi ích thuê |
| DV trọn gói | Ảnh 2 + 5 công việc kế toán chính + HĐĐTử + Tư vấn thuế |
| Quy trình | 3 bước (Tiếp nhận → Báo cáo thuế/Sổ sách → Tư vấn liên tục) |
| Giá DV | 2 yếu tố ảnh hưởng + 2 gói giá (500k-1tr / 1.2tr-2tr) + cam kết minh bạch |
| Tại sao chọn Hoàng Nam | 3 nhóm: Đội ngũ, Quy trình, Hỗ trợ 24/7 |
| Câu chuyện thực tế | Case study HKD bán lẻ bị phạt 2tr + Hoàng Nam giải quyết |
| CTA | H2 kêu gọi hotline 091.888.31.79 |
| Info Box | Địa chỉ 03 Đ. Quản Trọng Hoàng, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam + SĐT + Email tructuyenhoangnam |

---

## Phase 07: Build & Verify

- `npm run build` → No errors
- Verify 4 trang mới render đúng
- Verify trang BCTC đã cập nhật nội dung đầy đủ hơn
- Verify menu "Dịch vụ" KHÔNG thay đổi
- Verify trang `/dich-vu` hiển thị đủ 4 cards mới (không bị trùng BCTC)
- Verify các link nội bộ hoạt động

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| MODIFY | `src/pages/dich-vu.astro` | Thêm 4 service cards mới |
| NEW | `src/assets/images/services/lam-bhxh.png` | Ảnh BHXH |
| NEW | `src/assets/images/services/chuyen-doi-loai-hinh-dn.jpg` | Ảnh chuyển đổi loại hình |
| NEW | `src/assets/images/services/ho-so-chuyen-doi-loai-hinh.png` | Ảnh hồ sơ chuyển đổi |
| NEW | `src/assets/images/services/dang-ky-ho-kinh-doanh.jpg` | Ảnh đăng ký HKD |
| NEW | `src/assets/images/services/ke-toan-thue-ho-kinh-doanh.jpg` | Ảnh kế toán thuế HKD |
| NEW | `src/assets/images/services/ho-so-can-chuan-bi.png` | Ảnh hồ sơ cần chuẩn bị |
| OVERWRITE | `src/pages/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho.astro` | Nội dung đầy đủ hơn từ WP |
| NEW | `src/pages/dich-vu/lam-bao-hiem-xa-hoi-can-tho.astro` | Trang làm BHXH |
| NEW | `src/pages/dich-vu/dich-vu-chuyen-doi-loai-hinh-doanh-nghiep-cong-ty-tai-can-tho.astro` | Trang chuyển đổi loại hình DN |
| NEW | `src/pages/dich-vu/dich-vu-dang-ky-giay-phep-ho-kinh-doanh-tai-can-tho.astro` | Trang đăng ký GPKD hộ KD |
| NEW | `src/pages/dich-vu/dich-vu-ke-toan-thue-cho-ho-kinh-doanh-tai-can-tho.astro` | Trang kế toán thuế HKD |

## Ghi chú đặc biệt

| Vấn đề | Chi tiết |
|--------|----------|
| Địa chỉ liên hệ |  tất cả trang dùng địa chỉ 03 Đ. Quản Trọng Hoàng, Xuân Khánh, Ninh Kiều, Cần Thơ, Việt Nam |
| Email liên hệ | BCTC & BHXH: `cskh@hoangnamcantho.com`; 3 trang mới: `tructuyenhoangnam@gmail.com` |
| Bảng giá | Trang BHXH có bảng giá HTML phức tạp (rowspan/colspan) → dùng styled table component |
| Ảnh từ 2025/07 | 3 trang mới (Chuyển đổi, ĐKGPKD, KTTKHD) có ảnh mới từ `/2025/07/` – cần download đúng |
