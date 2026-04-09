# Plan: Menu + Logo + Trang Dịch Vụ Thành Lập Công Ty
Created: 2026-04-09T02:52
Status: ✅ Complete

## Overview
3 thay đổi cho hoangnamcantho.com:
1. Đổi menu "Chia Sẻ" → "Blog" (/blog), bỏ submenu
2. Thay logo mới từ hoangnamvungtau.com
3. Tạo trang dịch vụ `/dich-vu/thanh-lap-cong-ty-tai-can-tho/`

## Phases

| Phase | Name | Status | Progress |
|-------|------|--------|----------|
| 01 | Menu & Logo Update | ✅ Complete | 100% |
| 02 | Trang Dịch Vụ TLCT | ✅ Complete | 100% |
| 03 | Build & Verify | ✅ Complete | 100% |

---

## Phase 01: Menu & Logo Update

### 1.1. Đổi menu "Chia Sẻ" → "Blog"

**File:** `src/config/site.ts` (dòng 57-65)

**Hiện tại:**
```ts
{
  text: "Chia Sẻ",
  href: "/tin-tuc",
  icon: "lucide:book-open",
  children: [
    { text: "Tin tức công ty", href: "/tin-tuc/cong-ty" },
    { text: "Kiến thức chuyên ngành", href: "/tin-tuc/kien-thuc" },
  ],
},
```

**Đổi thành:**
```ts
{
  text: "Blog",
  href: "/blog",
  icon: "lucide:book-open",
},
```

> Lý do: Bỏ submenu vì không dùng, đường link `/tin-tuc` không tồn tại, `/blog` đã có sẵn.

### 1.2. Thay logo

**Bước 1:** Tải logo từ `https://hoangnamvungtau.com/_astro/logo.CtwFPiVy_2dyVqu.webp`
**Bước 2:** Ghi đè file `src/assets/images/logo.webp`
**Bước 3:** Không cần sửa code vì Navbar đã import từ `@/assets/images/logo.webp`

---

## Phase 02: Trang Dịch Vụ Thành Lập Công Ty

### 2.1. Tải hình ảnh

- Tải `http://hoangnamcantho.com/wp-content/uploads/2026/01/thanh-lap-cong-ty-tai-can-tho.jpg`
- Lưu vào `src/assets/images/services/thanh-lap-cong-ty-tai-can-tho.jpg`

### 2.2. Tạo trang Astro

**File mới:** `src/pages/dich-vu/thanh-lap-cong-ty-tai-can-tho.astro`

**Nội dung chuyển đổi từ HTML → Astro + TailwindCSS:**

| Section HTML gốc | Chuyển thành |
|-------------------|-------------|
| Tiêu đề chính (gradient #253690) | Hero Banner (pattern site: `from-primary to-primary-light`) |
| Giới thiệu + ảnh | Section trắng với Image component + prose text |
| Thông tin liên hệ nhanh | Card gradient primary với grid 2 cột |
| Quy trình 5 bước | ProcessSteps với step circles (tương tự homepage) |
| Bảng giá 3 gói | PricingCards grid 3 cột (Cơ Bản / Trọn Gói / VIP) |
| Lợi ích 8 items | Grid 4 cột cards với icons emoji |
| Hồ sơ cần chuẩn bị | Card với checklist items |
| Hỏi đáp 3 câu | FAQ accordion với border-left styling |
| Khu vực hỗ trợ | Dashed border banner |
| CTA cuối trang | CTABanner component (reuse) |

**Design decisions:**
- Dùng `BaseLayout` + `siteConfig` nhất quán với toàn site
- Import Image component cho hình ảnh (optimized webp)
- Dùng Tailwind classes theo design system đã có (rounded-2xl, ring-1, hover effects...)
- Màu primary (#0056b3) thay vì #253690 để đồng bộ
- Contact info lấy từ `siteConfig.contact` (Single Source of Truth)

### 2.3. Cập nhật link trong site.ts

Menu "Dịch Vụ" > children hiện tại link đến `/thanh-lap-cong-ty-tai-can-tho` (root path)
→ Đổi thành `/dich-vu/thanh-lap-cong-ty-tai-can-tho` (nested route)

Tương tự cập nhật href trong `dich-vu.astro` service card đầu tiên.

---

## Phase 03: Build & Verify

- `npm run build` → Kiểm tra không có lỗi
- Verify menu hiển thị đúng "Blog" → /blog
- Verify logo mới đã load
- Verify trang `/dich-vu/thanh-lap-cong-ty-tai-can-tho` render đúng
- Verify responsive trên mobile

---

## Files to Create/Modify

| Action | File | Mô tả |
|--------|------|-------|
| MODIFY | `src/config/site.ts` | Đổi menu Chia Sẻ → Blog, update TLCT href |
| MODIFY | `src/pages/dich-vu.astro` | Update href service card TLCT |
| REPLACE | `src/assets/images/logo.webp` | Logo mới từ hoangnamvungtau |
| NEW | `src/assets/images/services/thanh-lap-cong-ty-tai-can-tho.jpg` | Ảnh TLCT |
| NEW | `src/pages/dich-vu/thanh-lap-cong-ty-tai-can-tho.astro` | Trang dịch vụ TLCT |

## Quick Commands
- Start: `/code phase-01`
- Check progress: `/next`
- Save context: `/save-brain`
