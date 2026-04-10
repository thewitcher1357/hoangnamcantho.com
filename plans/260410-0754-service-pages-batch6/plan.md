# Plan: Batch 6 – 6 Trang Dịch Vụ Mới (Không thêm submenu)
Created: 2026-04-10T07:54
Status: ✅ Complete

## Overview
Tạo 6 trang dịch vụ mới hoangnamcantho.com.
**KHÔNG thêm submenu** vào menu "Dịch vụ" – chỉ tạo trang, thêm card vào trang dich-vu.astro index.

1. `/dich-vu/dich-vu-bo-sung-thay-doi-von-dieu-le-cong-ty-tai-can-tho/` – Thay đổi vốn điều lệ (MỚI)
2. `/dich-vu/dich-vu-thay-doi-cccd-tren-giay-phep-kinh-doanh-tai-can-tho/` – Thay đổi CCCD trên GPKD (MỚI)
3. `/dich-vu/dich-vu-thay-doi-co-dong-cong-ty-co-phan-tai-can-tho/` – Thay đổi cổ đông CTCP (MỚI)
4. `/dich-vu/dich-vu-thay-doi-dia-chi-tru-so-cong-ty-tai-can-tho/` – Thay đổi địa chỉ trụ sở (MỚI)
5. `/dich-vu/dich-vu-thay-doi-nguoi-dai-dien-phap-luat-cong-ty-giam-doc-cong-ty-tai-can-tho/` – Thay đổi người ĐĐPL (MỚI)
6. `/dich-vu/dich-vu-thay-doi-ten-cong-ty-tai-can-tho/` – Thay đổi tên công ty (MỚI)
7. `/dich-vu/dich-vu-thay-doi-bo-sung-nganh-nghe-kinh-doanh-tai-can-tho/` – Thay đổi ngành nghề (MỚI)

## Lưu ý quan trọng
- ❌ **KHÔNG thêm submenu** vào `site.ts` cho menu "Dịch vụ"
- ✅ **CÓ thêm 7 service cards MỚI** vào `dich-vu.astro` (services array)
- ✅ Tạo 7 trang .astro mới trong `src/pages/dich-vu/`
- Địa chỉ liên hệ: 462 Lê Hồng Nhi, KV1, P. Ba Láng, Q. Cái Răng, Tp. Cần Thơ
- Email: tructuyenhoangnam@gmail.com

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Tải ảnh từ WP | ✅ Complete | 100% |
| 02 | Trang Thay Đổi Vốn Điều Lệ | ✅ Complete | 100% |
| 03 | Trang Thay Đổi CCCD trên GPKD | ✅ Complete | 100% |
| 04 | Trang Thay Đổi Cổ Đông CTCP | ✅ Complete | 100% |
| 05 | Trang Thay Đổi Địa Chỉ Trụ Sở | ✅ Complete | 100% |
| 06 | Trang Thay Đổi Người ĐĐPL | ✅ Complete | 100% |
| 07 | Trang Thay Đổi Tên Công Ty | ✅ Complete | 100% |
| 08 | Trang Thay Đổi Ngành Nghề KD | ✅ Complete | 100% |
| 09 | Update Dich Vu Index (7 cards mới) | ✅ Complete | 100% |
| 10 | Build & Verify | ✅ Complete | 100% |

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| NEW | `src/assets/images/services/thay-doi-von-dieu-le.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/so-ke-hoach-dau-tu-steps.png` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-cccd-gpkd.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/ho-so-cap-nhat-cccd.png` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-co-dong.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/so-ke-hoach-dau-tu-steps2.png` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-dia-chi-tru-so.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/quy-trinh-thay-doi-dia-chi.png` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-dai-dien-phap-luat.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-ten-cong-ty.jpg` | ✅ Đã tải |
| NEW | `src/assets/images/services/quy-trinh-doi-ten-cong-ty.png` | ✅ Đã tải |
| NEW | `src/assets/images/services/thay-doi-nganh-nghe.jpg` | ✅ Đã tải |
| NEW | `src/pages/dich-vu/dich-vu-bo-sung-thay-doi-von-dieu-le-cong-ty-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-cccd-tren-giay-phep-kinh-doanh-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-co-dong-cong-ty-co-phan-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-dia-chi-tru-so-cong-ty-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-nguoi-dai-dien-phap-luat-cong-ty-giam-doc-cong-ty-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-ten-cong-ty-tai-can-tho.astro` | |
| NEW | `src/pages/dich-vu/dich-vu-thay-doi-bo-sung-nganh-nghe-kinh-doanh-tai-can-tho.astro` | |
| MODIFY | `src/pages/dich-vu.astro` | Thêm 7 service cards mới |
