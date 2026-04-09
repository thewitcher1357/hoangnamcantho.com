# Plan: Batch 2 – 5 Trang Dịch Vụ Mới + Update Nav
Created: 2026-04-09T09:51
Status: ✅ Complete

## Overview
Tạo 5 trang dịch vụ mới cho website hoangnamcantho.com + cập nhật navigation menu:

1. `/dich-vu/giai-the-cong-ty-o-can-tho/` – Giải thể công ty
2. `/dich-vu/dich-vu-ke-toan-can-tho/` – Dịch vụ kế toán thuế
3. `/dich-vu/hoa-don-dien-tu-can-tho/` – Hóa đơn điện tử
4. `/dich-vu/chu-ky-so-can-tho/` – Chữ ký số
5. `/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho/` – Thành lập công ty vốn FDI

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Update Nav + Dich Vu Index | ✅ Complete | 100% |
| 02 | Trang Giải Thể Công Ty | ✅ Complete | 100% |
| 03 | Trang Dịch Vụ Kế Toán | ✅ Complete | 100% |
| 04 | Trang Hóa Đơn Điện Tử | ✅ Complete | 100% |
| 05 | Trang Chữ Ký Số | ✅ Complete | 100% |
| 06 | Trang Thành Lập CT Vốn FDI | ✅ Complete | 100% |
| 07 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Update Navigation + Dich Vu Index

### 1.1 Update `site.ts` – Submenu "Dịch vụ"
- Đổi href "Giải Thể Công Ty": `/giai-the-cong-ty-tai-can-tho` → `/dich-vu/giai-the-cong-ty-o-can-tho`
- Thêm 4 submenu items mới:
  - "Dịch Vụ Kế Toán" → `/dich-vu/dich-vu-ke-toan-can-tho`
  - "Hóa Đơn Điện Tử" → `/dich-vu/hoa-don-dien-tu-can-tho`
  - "Chữ Ký Số" → `/dich-vu/chu-ky-so-can-tho`
  - "Thành Lập CT Vốn Nước Ngoài" → `/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho`

### 1.2 Update `dich-vu.astro` – Dịch Vụ Chính cards
- Đổi href "Giải Thể Công Ty": `/giai-the-cong-ty-tai-can-tho` → `/dich-vu/giai-the-cong-ty-o-can-tho`
- Thêm 4 service cards mới vào services array (hoặc additionalServices array):
  - Dịch Vụ Kế Toán Thuế → link trang mới
  - Hóa Đơn Điện Tử → link trang mới
  - Chữ Ký Số → link trang mới
  - Thành Lập CT Vốn Nước Ngoài → link trang mới
- Chuyển Kế Toán, HĐĐT, Chữ Ký Số từ `additionalServices` (không có link) sang `services` (có link chi tiết)

---

## Phase 02: Trang Giải Thể Công Ty

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/dich-vu-giai-the-cong-ty-binh-duong.png` → `src/assets/images/services/giai-the-cong-ty.png`

### Tạo trang
**File:** `src/pages/dich-vu/giai-the-cong-ty-o-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch vụ giải thể công ty tốt nhất tại Cần Thơ" |
| Giới thiệu | Intro text + ảnh minh họa |
| Bảng dịch vụ | Table giải thể công ty, chi nhánh, VPĐD (5 mục) |
| Lợi ích | 6 lợi ích khi sử dụng dịch vụ (bullet list) |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |
| Các trường hợp giải thể | Điều 201 Luật DN 2014 – 4 trường hợp |
| Điều kiện giải thể | 2 điều kiện + lưu ý phá sản |
| Quy trình | 9 bước thực hiện dịch vụ |
| Cơ quan thuế | 5 bước quy trình tại CQ thuế |
| Sở KH&ĐT | 3 bước quy trình tại Sở |
| Hoạt động bị cấm | 7 hoạt động bị cấm theo Điều 205 |
| Bạn nhận được gì | 4 mục: Tập thể, Giá cả, Gói GP, Đội ngũ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |
| CTA Banner | Liên hệ Hoàng Nam |

---

## Phase 03: Trang Dịch Vụ Kế Toán

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/dich-vu-ke-toan-binh-duong.png` → `src/assets/images/services/dich-vu-ke-toan.png`

### Tạo trang
**File:** `src/pages/dich-vu/dich-vu-ke-toan-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Kế Toán Thuế Tại Cần Thơ" |
| Giới thiệu | Intro text + ảnh minh họa |
| Tại sao cần DV | Rủi ro tự làm kế toán (3 mục) + Lợi ích thuê DV (3 mục) |
| Đối tượng phù hợp | 4 nhóm đối tượng |
| Các dịch vụ | 7 dịch vụ chính + Tư vấn pháp lý miễn phí (4 mục) |
| Quy trình | 3 bước: Tiếp nhận → Thực hiện → Hỗ trợ |
| **Bảng giá** | Table phí theo số lượng chứng từ × 3 ngành (7 hàng) |
| Ưu đãi | 5 mức thanh toán giảm giá |
| Cam kết giá | 2 cam kết: Không phí ẩn + Hỗ trợ giá tốt |
| Tại sao chọn HN | 4 nhóm: Tiết kiệm, Đội ngũ, Toàn diện, 24/7 |
| Câu chuyện thực tế | Case study DN thương mại tại CT |
| CTA Banner | Hotline 091.888.31.79 |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

---

## Phase 04: Trang Hóa Đơn Điện Tử

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/hoa-don-dien-tu-binh-duong.png` → `src/assets/images/services/hoa-don-dien-tu.png`
- `http://hoangnamcantho.com/wp-content/uploads/2024/11/hddt-auto-10.2024-1024x406.jpg` → `src/assets/images/services/hddt-auto-banner.jpg`

### Tạo trang
**File:** `src/pages/dich-vu/hoa-don-dien-tu-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Báo Giá Hóa Đơn Điện Tử Cần Thơ" |
| Giới thiệu | Intro: Hona-Invoice, tiêu chí lựa chọn |
| Banner ảnh | hddt-auto banner image |
| Khuyến mãi | Mua gói 10.000+ số → tặng CKS 3 năm |
| Giới thiệu DV | Dịch vụ HĐĐT của Hoàng Nam |
| Thương hiệu | Giới thiệu Hona-Invoice (Autoinvoice) |
| HĐĐT là gì | Khái niệm theo TT 32/2011/TT-BTC (4 bullets) |
| HĐĐT theo TT78 | Quy định TT78 + NĐ123, bắt buộc từ 1/7/2022 |
| Điều kiện | Các điều kiện cần và đủ để sử dụng HĐĐT |
| Lợi ích | 8 lợi ích sử dụng HĐĐT |
| Quy trình đăng ký | 5 bước đăng ký tại Hoàng Nam |
| Info Box | Thông tin liên hệ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

> **Lưu ý:** Bảng giá trong nội dung gốc dùng `[table id=XX /]` (WordPress shortcode) → Không có data thực → Bỏ qua shortcode tables, chỉ giữ nội dung text.

---

## Phase 05: Trang Chữ Ký Số

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2024/11/z5974387177180_3f88a6bd916a503f7f5f29b2ddd464b0-300x174.jpg` → `src/assets/images/services/chu-ky-so.jpg`

### Tạo trang
**File:** `src/pages/dich-vu/chu-ky-so-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Chữ Ký Số Tại Cần Thơ" |
| Khuyến mãi | Mua CKS 3 năm tặng 1 năm + combo HĐĐT |
| Giới thiệu | Intro về CKS + giá gói 4 năm 1.490K |
| CKS là gì | Định nghĩa + 2 đặc điểm (khóa bí mật, toàn vẹn) |
| Thông tin CKS | 8 thông tin có trong chữ ký số |
| CKS đối với DN | 9 ứng dụng của CKS cho doanh nghiệp |
| Viettel CKS | Giới thiệu CKS Viettel |
| **Bảng giá** | 3 bảng lớn: FPT/VINA/VIETTEL + EASY/NEW-CA + CA2/BKAV |
| Bạn nhận được gì | 4 mục: Tập thể, Giá cả, Gói GP, Đội ngũ |
| Info Box | Thông tin liên hệ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

---

## Phase 06: Trang Thành Lập CT Vốn FDI

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/thanh-lap-cong-ty-co-von-dau-tu-nuoc-ngoai.png` → `src/assets/images/services/thanh-lap-cong-ty-fdi.png`

### Tạo trang
**File:** `src/pages/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Thành Lập Công Ty Vốn Đầu Tư Nước Ngoài Tại Cần Thơ" |
| Giới thiệu | Intro + ảnh minh họa |
| Lợi ích DV | 8 lợi ích: Linh hoạt, Chính xác, Phí tốt, Nhanh, Tận nơi, Chu đáo, Hậu mãi, Thành công |
| Quy trình | 3 bước chính: |
| → Bước 1 | Xin cấp GCN đầu tư (3 sub-steps) |
| → Bước 2 | Cấp GCNĐKDN (hồ sơ chi tiết: 5+ mục) |
| → Bước 3 | Công bố nội dung ĐKDN |
| Lợi ích khi dùng HN | 6 cam kết |
| Nội dung công bố | 6 mục + thời hạn 30 ngày |
| DV của Hoàng Nam | 6 dịch vụ tư vấn chi tiết |
| CTA Banner | Liên hệ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

---

## Phase 07: Build & Verify

- `npm run build` → No errors
- Verify menu Dịch Vụ có đủ 8 submenu items
- Verify 5 trang mới render đúng
- Verify các link nội bộ hoạt động

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| MODIFY | `src/config/site.ts` | Update href giải thể + thêm 4 submenu mới |
| MODIFY | `src/pages/dich-vu.astro` | Update href giải thể + thêm service cards mới |
| NEW | `src/assets/images/services/giai-the-cong-ty.png` | Ảnh giải thể công ty |
| NEW | `src/assets/images/services/dich-vu-ke-toan.png` | Ảnh dịch vụ kế toán |
| NEW | `src/assets/images/services/hoa-don-dien-tu.png` | Ảnh HĐĐT |
| NEW | `src/assets/images/services/hddt-auto-banner.jpg` | Banner HĐĐT |
| NEW | `src/assets/images/services/chu-ky-so.jpg` | Ảnh chữ ký số |
| NEW | `src/assets/images/services/thanh-lap-cong-ty-fdi.png` | Ảnh FDI |
| NEW | `src/pages/dich-vu/giai-the-cong-ty-o-can-tho.astro` | Trang giải thể |
| NEW | `src/pages/dich-vu/dich-vu-ke-toan-can-tho.astro` | Trang kế toán |
| NEW | `src/pages/dich-vu/hoa-don-dien-tu-can-tho.astro` | Trang HĐĐT |
| NEW | `src/pages/dich-vu/chu-ky-so-can-tho.astro` | Trang CKS |
| NEW | `src/pages/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho.astro` | Trang FDI |
