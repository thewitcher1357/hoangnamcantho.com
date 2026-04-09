# Plan: Batch 4 – 4 Trang Dịch Vụ Thuế & Kế Toán (Không thêm submenu)
Created: 2026-04-09T16:12
Status: ✅ Complete

## Overview
Tạo 5 trang dịch vụ mới về thuế và kế toán cho website hoangnamcantho.com.
**KHÔNG thêm submenu** vào menu "Dịch vụ" – chỉ tạo trang, thêm card vào trang dich-vu.astro index.

1. `/dich-vu/quyet-toan-thue-thu-nhap-ca-nhan/` – Quyết toán thuế TNCN
2. `/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho/` – Dịch vụ làm BCTC
3. `/dich-vu/khai-thue-ban-dau/` – Khai thuế ban đầu
4. `/dich-vu/khai-bao-thue-tai-can-tho/` – Khai báo thuế
5. `/dich-vu/ke-khai-thue-thu-nhap-ca-nhan/` – Kê khai thuế TNCN (chuyên sâu)

## Lưu ý quan trọng
- ❌ **KHÔNG thêm submenu** vào `site.ts` cho menu "Dịch vụ"
- ✅ **CÓ thêm service cards** vào `dich-vu.astro` (services array)
- ✅ Tạo 5 trang .astro mới trong `src/pages/dich-vu/`

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Update Dich Vu Index (cards) | ✅ Complete | 100% |
| 02 | Trang Quyết Toán Thuế TNCN | ✅ Complete | 100% |
| 03 | Trang Dịch Vụ Làm BCTC | ✅ Complete | 100% |
| 04 | Trang Khai Thuế Ban Đầu | ✅ Complete | 100% |
| 05 | Trang Khai Báo Thuế | ✅ Complete | 100% |
| 06 | Trang Kê Khai Thuế TNCN | ✅ Complete | 100% |
| 07 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Update Dich Vu Index (KHÔNG update site.ts)

### 1.1 Update `dich-vu.astro` – Thêm 5 service cards vào `services` array

Thêm 5 cards mới:
- "Quyết Toán Thuế TNCN" → `/dich-vu/quyet-toan-thue-thu-nhap-ca-nhan`
- "Làm Báo Cáo Tài Chính" → `/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho`
- "Khai Thuế Ban Đầu" → `/dich-vu/khai-thue-ban-dau`
- "Khai Báo Thuế" → `/dich-vu/khai-bao-thue-tai-can-tho`
- "Kê Khai Thuế TNCN" → `/dich-vu/ke-khai-thue-thu-nhap-ca-nhan`

### 1.2 KHÔNG chỉnh sửa `site.ts`

---

## Phase 02: Trang Quyết Toán Thuế TNCN

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/quyet-toan-thue-thu-nhap-ca-nhan.png` → `src/assets/images/services/quyet-toan-thue-tncn.png`

### Tạo trang
**File:** `src/pages/dich-vu/quyet-toan-thue-thu-nhap-ca-nhan.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Quyết Toán Thuế Thu Nhập Cá Nhân Tại Cần Thơ" |
| Giới thiệu | Định nghĩa quyết toán thuế + ảnh minh họa |
| Dịch vụ HN | 5 mục dịch vụ TNCN của Hoàng Nam |
| Quy trình | 6 bước: Tư vấn → Chuẩn bị → Soạn → Ký → Nộp → Bàn giao |
| Tại sao chọn HN | 3 lợi ích: Kinh nghiệm, Tránh thuế 2 lần, Tiết kiệm thời gian |
| Cam kết | 5 cam kết của Hoàng Nam |
| Info Box | Thông tin liên hệ Hoàng Nam CN Cần Thơ |

---

## Phase 03: Trang Dịch Vụ Làm BCTC

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/bao-cao-tai-chinh-binh-duong.png` → `src/assets/images/services/bao-cao-tai-chinh.png`

### Tạo trang
**File:** `src/pages/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Làm Báo Cáo Tài Chính Tại Cần Thơ" |
| Giới thiệu | Intro BCTC là gì + ảnh minh họa |
| DV của HN | 4 điểm nổi bật dịch vụ BCTC |
| Quy trình | 8 bước quy trình làm việc |
| Vì sao chọn HN | Intro + 8 trường hợp DN thường gặp |
| Công việc triển khai | 12 đầu mục công việc chi tiết |
| Bạn nhận được gì | 4 mục: Tập thể, Giá cả, Gói GP, Đội ngũ |
| Info Box | Thông tin liên hệ |
| Khu vực hỗ trợ | Quận/huyện Cần Thơ |

---

## Phase 04: Trang Khai Thuế Ban Đầu

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/khai-thue-ban-dau.png` → `src/assets/images/services/khai-thue-ban-dau.png`

### Tạo trang
**File:** `src/pages/dich-vu/khai-thue-ban-dau.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Khai Thuế Ban Đầu Tại Cần Thơ" |
| Giới thiệu | Intro + ảnh + cảnh báo phạt vi phạm |
| Thời hạn | 2 mốc thời hạn: 10 ngày + 30 ngày |
| Hồ sơ | 7 mục hồ sơ khai thuế ban đầu |
| HN hỗ trợ | 2 nhóm: Thiết lập hồ sơ (5 bước) + Mua hóa đơn (3 bước) |
| Giấy tờ cần cung cấp | 3 giấy tờ DN cần cung cấp |
| Lưu ý quan trọng | 5 lưu ý về thời hạn nộp |
| Lợi ích DV | 6 lợi ích khi sử dụng dịch vụ Hoàng Nam |
| Info Box | Thông tin liên hệ |

---

## Phase 05: Trang Khai Báo Thuế

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/khai-bao-thue-binh-duong.png` → `src/assets/images/services/khai-bao-thue.png`

### Tạo trang
**File:** `src/pages/dich-vu/khai-bao-thue-tai-can-tho.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Khai Báo Thuế Tại Cần Thơ" |
| Giới thiệu | Intro dịch vụ + ảnh minh họa + khối lượng CV |
| **Bảng giá** | Table biểu phí hàng tháng theo số chứng từ × 3 ngành (7 hàng) |
| Ưu đãi | 5 mức thanh toán giảm giá |
| DV bao gồm | 12 công việc chi tiết |
| Quy trình | 10 bước quy trình làm việc |
| Vì sao chọn HN | 4 lợi ích: Tiết kiệm 60%, Không nhân sự, Không tuyển dụng, Cập nhật |
| Bạn nhận được gì | 4 mục: Tập thể, Giá cả, Gói GP, Đội ngũ |
| Info Box | Thông tin liên hệ |

---

## Phase 06: Trang Kê Khai Thuế TNCN

### Tải hình ảnh
- `http://hoangnamcantho.com/wp-content/uploads/2021/04/ke-khai-thue-thu-nhap-ca-nhan.png` → `src/assets/images/services/ke-khai-thue-tncn.png`

### Tạo trang
**File:** `src/pages/dich-vu/ke-khai-thue-thu-nhap-ca-nhan.astro`

| Section | Nội dung |
|---------|----------|
| Hero Banner | "Dịch Vụ Kê Khai Thuế Thu Nhập Cá Nhân Tại Cần Thơ" |
| Giới thiệu | Intro DV khai thuế TNCN + ảnh minh họa |
| DV tại HN | Intro + 9 dịch vụ cụ thể (danh sách) |
| Vì sao chọn HN | 2 đoạn intro + 5 mục chi tiết |
| Lợi ích DV | 6 lợi ích khi sử dụng dịch vụ |
| HN hỗ trợ | 5 dịch vụ hỗ trợ cụ thể |
| Bạn nhận được gì | 4 mục: Tập thể, Giá cả, Gói GP, Đội ngũ |
| Info Box | Thông tin liên hệ |

---

## Phase 07: Build & Verify

- `npm run build` → No errors
- Verify 5 trang mới render đúng
- Verify menu "Dịch vụ" KHÔNG thay đổi
- Verify trang `/dich-vu` hiển thị đủ cards mới
- Verify các link nội bộ hoạt động

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| MODIFY | `src/pages/dich-vu.astro` | Thêm 5 service cards mới |
| NEW | `src/assets/images/services/quyet-toan-thue-tncn.png` | Ảnh quyết toán thuế |
| NEW | `src/assets/images/services/bao-cao-tai-chinh.png` | Ảnh BCTC |
| NEW | `src/assets/images/services/khai-thue-ban-dau.png` | Ảnh khai thuế ban đầu |
| NEW | `src/assets/images/services/khai-bao-thue.png` | Ảnh khai báo thuế |
| NEW | `src/assets/images/services/ke-khai-thue-tncn.png` | Ảnh kê khai thuế TNCN |
| NEW | `src/pages/dich-vu/quyet-toan-thue-thu-nhap-ca-nhan.astro` | Trang quyết toán thuế TNCN |
| NEW | `src/pages/dich-vu/dich-vu-lam-bao-cao-tai-chinh-can-tho.astro` | Trang làm BCTC |
| NEW | `src/pages/dich-vu/khai-thue-ban-dau.astro` | Trang khai thuế ban đầu |
| NEW | `src/pages/dich-vu/khai-bao-thue-tai-can-tho.astro` | Trang khai báo thuế |
| NEW | `src/pages/dich-vu/ke-khai-thue-thu-nhap-ca-nhan.astro` | Trang kê khai thuế TNCN |
