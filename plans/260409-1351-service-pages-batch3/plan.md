# Plan: Batch 3 – 4 Trang Dịch Vụ Mới (Không thêm submenu)
Created: 2026-04-09T13:51
Status: ✅ Complete

## Overview
Tạo 5 trang dịch vụ mới cho website hoangnamcantho.com.
**KHÔNG thêm submenu** vào menu "Dịch vụ" – chỉ tạo trang, thêm card vào trang dich-vu.astro index.

1. `/dich-vu/thanh-lap-van-phong-dai-dien-tai-can-tho/` – Thành lập văn phòng đại diện
2. `/dich-vu/phan-mem-ke-toan-can-tho/` – Phần mềm kế toán
3. `/dich-vu/thanh-lap-chi-nhanh-cong-ty-can-tho/` – Thành lập chi nhánh công ty
4. `/dich-vu/giai-the-chi-nhanh-can-tho/` – Giải thể chi nhánh
5. `/dich-vu/giai-the-van-phong-dai-dien-can-tho/` – Giải thể văn phòng đại diện

## Lưu ý quan trọng
- ❌ **KHÔNG thêm submenu** vào `site.ts` cho menu "Dịch vụ"
- ✅ **CÓ thêm service cards** vào `dich-vu.astro` (services array hoặc additionalServices)
- ✅ Tạo 5 trang .astro mới trong `src/pages/dich-vu/`

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Update Dich Vu Index (cards) | ✅ Complete | 100% |
| 02 | Trang Thành Lập VPĐD | ✅ Complete | 100% |
| 03 | Trang Phần Mềm Kế Toán | ✅ Complete | 100% |
| 04 | Trang Thành Lập Chi Nhánh | ✅ Complete | 100% |
| 05 | Trang Giải Thể Chi Nhánh | ✅ Complete | 100% |
| 06 | Trang Giải Thể VPĐD | ✅ Complete | 100% |
| 07 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Update Dich Vu Index (KHÔNG update site.ts)

### 1.1 Update `dich-vu.astro` – Thêm 5 service cards vào `services` array

Thêm 5 cards mới:
- "Thành Lập Văn Phòng Đại Diện" → `/dich-vu/thanh-lap-van-phong-dai-dien-tai-can-tho`
- "Phần Mềm Kế Toán" → `/dich-vu/phan-mem-ke-toan-can-tho`
- "Thành Lập Chi Nhánh Công Ty" → `/dich-vu/thanh-lap-chi-nhanh-cong-ty-can-tho`
- "Giải Thể Chi Nhánh" → `/dich-vu/giai-the-chi-nhanh-can-tho`
- "Giải Thể Văn Phòng Đại Diện" → `/dich-vu/giai-the-van-phong-dai-dien-can-tho`

Đồng thời:
- Chuyển "Phần Mềm Kế Toán" từ `additionalServices` sang `services` (có link chi tiết)

### 1.2 KHÔNG chỉnh sửa `site.ts`
User yêu cầu không thêm submenu nào.

---

## Phase 02: Trang Thành Lập Văn Phòng Đại Diện

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/thanh-lap-van-phong-dai-dien-binh-duong.png` → `src/assets/images/services/thanh-lap-van-phong-dai-dien.png`

### Tạo trang
**File:** `src/pages/dich-vu/thanh-lap-van-phong-dai-dien-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Thành Lập Văn Phòng Đại Diện Tại Cần Thơ" |
| Giới thiệu | Intro text giới thiệu dịch vụ VPĐD + ảnh minh họa |
| Lợi ích DV | 8 lợi ích: Linh hoạt, Chính xác, Phí tốt, Nhanh, Tận nơi, Chu đáo, Hậu mãi, Thành công |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |
| Thủ tục | 8 bước quy trình thành lập VPĐD tại Cần Thơ |
| Nghĩa vụ thuế | Lưu ý thuế môn bài sau khi thành lập (5 bullets) |
| Ưu điểm VPĐD | 3 ưu điểm nổi bật: Con dấu riêng, Không chịu nghĩa vụ thuế KD, Thành lập đa tỉnh |
| CTA Banner | Liên hệ Hoàng Nam |

---

## Phase 03: Trang Phần Mềm Kế Toán

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2024/11/pmkt-soft-133-va-200.jpg` → `src/assets/images/services/phan-mem-ke-toan-banner.jpg`
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/phan-mem-ke-toan-binh-duong.png` → `src/assets/images/services/phan-mem-ke-toan.png`

### Tạo trang
**File:** `src/pages/dich-vu/phan-mem-ke-toan-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Phần Mềm Kế Toán Online Tại Cần Thơ" |
| Banner ảnh | Ảnh pmkt-soft banner |
| Khuyến mãi | Chương trình giảm 50% + liên hệ Mr.Hoàng |
| Giới thiệu | Phần mềm kế toán là gì + ảnh minh họa |
| Lợi ích PM | 7 lợi ích: Tiết kiệm, Chính xác, Tự động hóa, Quyết định, Tra cứu, Kế thừa, Báo cáo thuế |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |
| Danh sách PM | 26 phần mềm kế toán thông dụng (ordered list) |
| Quy trình DV | 9 bước quy trình dịch vụ kế toán Hoàng Nam |
| Bạn nhận được gì | 4 mục: Tập thể tận tâm, Giá cả hợp lý, Gói giải pháp, Đội ngũ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

> **Lưu ý:** Bảng giá trong nội dung gốc dùng `[table id=XX /]` (WordPress shortcode) → Không có data thực → Bỏ qua shortcode tables, chỉ giữ nội dung text.

---

## Phase 04: Trang Thành Lập Chi Nhánh Công Ty

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/thanh-lap-chi-nhanh-cong-ty-binh-duong.png` → `src/assets/images/services/thanh-lap-chi-nhanh.png`

### Tạo trang
**File:** `src/pages/dich-vu/thanh-lap-chi-nhanh-cong-ty-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Thành Lập Chi Nhánh Công Ty Tại Cần Thơ" |
| Giới thiệu | Intro + ảnh minh họa |
| Giấy tờ cần cung cấp | 5 mục: 2 bản GPKD, 2 CMND, Địa chỉ, SĐT chi nhánh, SĐT GĐ |
| Bảng giá | Table: Thành lập VPĐD + Chi nhánh – 3 ngày – 1.700.000đ |
| Info Box | Thông tin liên hệ HOÀNG NAM CORP |
| Điều kiện | 4 điều kiện thành lập chi nhánh |
| Chuẩn bị | 5 mục chuẩn bị trước khi thành lập |
| Hồ sơ | 7 mục hồ sơ cần thiết |
| Thủ tục sau thành lập | 8 bước sau khi có GCN hoạt động |
| Lợi ích DV | 8 lợi ích: Linh hoạt, Chính xác, Phí tốt, Nhanh, Tận nơi, Chu đáo, Hậu mãi, Thành công |

---

## Phase 05: Trang Giải Thể Chi Nhánh

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/giai-the-chi-nhanh-cong-ty-binh-duong.png` → `src/assets/images/services/giai-the-chi-nhanh.png`

### Tạo trang
**File:** `src/pages/dich-vu/giai-the-chi-nhanh-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Giải Thể Chi Nhánh Tại Cần Thơ" |
| Giới thiệu | Intro text + ảnh minh họa |
| Bảng dịch vụ | Table giải thể công ty, chi nhánh, VPĐD (5 mục) |
| Điều kiện giải thể | 3 điều kiện: Thanh toán nợ, Không tranh chấp, Phá sản |
| Quy trình | 5 bước: Tư vấn soạn thảo → Gửi hồ sơ → Nhận & nộp → Hủy dấu → Tiếp nhận KQ |
| Thủ tục | 3 thủ tục: Đóng MST, Trả dấu, Giải thể ĐKKD |
| Lưu ý trả dấu | Hồ sơ trả con dấu (3 mục) + Thông báo niêm yết |
| Khó khăn DN | 3 đoạn mô tả khó khăn khi tự thực hiện |
| HN thực hiện DV | Danh sách khu vực hỗ trợ giải thể (9 địa điểm) |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |

---

## Phase 06: Trang Giải Thể Văn Phòng Đại Diện

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/giai-the-van-phong-dai-dien-binh-duong.png` → `src/assets/images/services/giai-the-van-phong-dai-dien.png`

### Tạo trang
**File:** `src/pages/dich-vu/giai-the-van-phong-dai-dien-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Giải Thể Văn Phòng Đại Diện Tại Cần Thơ" |
| Giới thiệu | Intro text: VPĐD không hiệu quả → giải thể + ảnh minh họa |
| 3 câu hỏi | Thủ tục? Hồ sơ? Bên thuế có phức tạp? |
| Bảng dịch vụ | Table giải thể công ty, chi nhánh, VPĐD (5 mục) |
| Quy định chung | 3 quy định về chấm dứt hoạt động VPĐD |
| Quy trình | 3 bước chi tiết: Khóa MST (5 mục) → Trả dấu (3 mục) → Chuẩn bị hồ sơ (8 mục) |
| HN đồng hành | 5 bước: Tư vấn → Gửi hồ sơ → Nhận & nộp → Hủy dấu → KQ |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |

---

## Phase 07: Build & Verify

- `npm run build` → No errors
- Verify 5 trang mới render đúng
- Verify menu "Dịch vụ" KHÔNG thay đổi (vẫn 8 submenu items)
- Verify trang `/dich-vu` hiển thị đủ cards mới
- Verify các link nội bộ hoạt động

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| MODIFY | `src/pages/dich-vu.astro` | Thêm 5 service cards mới, chuyển PM Kế Toán từ additional sang services |
| NEW | `src/assets/images/services/thanh-lap-van-phong-dai-dien.png` | Ảnh VPĐD |
| NEW | `src/assets/images/services/phan-mem-ke-toan-banner.jpg` | Banner PM kế toán |
| NEW | `src/assets/images/services/phan-mem-ke-toan.png` | Ảnh PM kế toán |
| NEW | `src/assets/images/services/thanh-lap-chi-nhanh.png` | Ảnh chi nhánh |
| NEW | `src/assets/images/services/giai-the-chi-nhanh.png` | Ảnh giải thể chi nhánh |
| NEW | `src/assets/images/services/giai-the-van-phong-dai-dien.png` | Ảnh giải thể VPĐD |
| NEW | `src/pages/dich-vu/thanh-lap-van-phong-dai-dien-tai-can-tho.astro` | Trang thành lập VPĐD |
| NEW | `src/pages/dich-vu/phan-mem-ke-toan-can-tho.astro` | Trang PM kế toán |
| NEW | `src/pages/dich-vu/thanh-lap-chi-nhanh-cong-ty-can-tho.astro` | Trang chi nhánh |
| NEW | `src/pages/dich-vu/giai-the-chi-nhanh-can-tho.astro` | Trang giải thể chi nhánh |
| NEW | `src/pages/dich-vu/giai-the-van-phong-dai-dien-can-tho.astro` | Trang giải thể VPĐD |
