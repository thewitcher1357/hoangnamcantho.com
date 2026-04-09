# Handover Document — hoangnamcantho.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 HANDOVER — 2026-04-09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## 📍 Đang làm
**Feature:** Service Pages Expansion — Trang dịch vụ chi tiết  
**Status:** ✅ HOÀN THÀNH — Tất cả 8 service pages đã có nội dung

---

## ✅ Đã xong (Session 2026-04-09)

| Hạng mục | Chi tiết |
|----------|----------|
| **Logo** | Tải logo HN từ hoangnamvungtau.com (150×150px WebP), fix Navbar props |
| **Service page: GPKD** | `/dich-vu/lam-giay-phep-kinh-doanh-tai-can-tho` — 12 sections đầy đủ |
| **Service page: Thay đổi GPKD** | `/dich-vu/thay-doi-giay-phep-kinh-doanh-tai-can-tho` |
| **Service page: Giải Thể CT** | `/dich-vu/giai-the-cong-ty-o-can-tho` |
| **Service page: Kế Toán** | `/dich-vu/dich-vu-ke-toan-can-tho` — có bảng giá kế toán |
| **Service page: Hóa Đơn Điện Tử** | `/dich-vu/hoa-don-dien-tu-can-tho` |
| **Service page: Chữ Ký Số** | `/dich-vu/chu-ky-so-can-tho` |
| **Service page: CT Vốn FDI** | `/dich-vu/thanh-lap-cong-ty-von-dau-tu-nuoc-ngoai-tai-can-tho` |
| **Menu Navigation** | `site.ts`: 8 items trong Dịch Vụ dropdown |
| **Bugfix spacing** | 52 sections × 7 files: `py-16 md:py-24` → `py-10 md:py-14` |

---

## ⏳ Còn lại (Todo)

- [ ] Test responsive mobile trên 8 service pages
- [ ] Deploy lên Cloudflare (wrangler.json đã sẵn sàng)
- [ ] Xóa file English cũ: `about.astro`, `contact.astro`, `services.astro`
- [ ] Pin chính xác Google Maps tại văn phòng Cần Thơ
- [ ] (Optional) Đồng bộ spacing `thanh-lap-cong-ty` page về `py-10 md:py-14`

---

## 🔧 Quyết định quan trọng

| Quyết định | Lý do |
|-----------|-------|
| Logo: `width={150} height={150}`, CSS `h-[50px] w-auto` | Intrinsic size 150×150, CSS control display size |
| Section padding service pages: `py-10 md:py-14` | Tránh khoảng trắng 192px khi 2 section trắng liền nhau |
| `thanh-lap-cong-ty` giữ `py-16 md:py-24` | Có `bg-primary` section xen giữa, không bị lỗi spacing |

---

## ⚠️ Lưu ý quan trọng cho session sau

1. **Spacing rule:** Service pages mới → `py-10 md:py-14`. Nếu có section màu khác xen giữa thì có thể dùng lớn hơn
2. **Logo:** Khi dùng `<Image>`, `width` và `height` PHẢI khớp intrinsic size của file ảnh gốc
3. **Navigation:** Mọi service page route cần thêm vào `site.ts → siteConfig.navLinks.children`
4. **GPKD page** (`lam-giay-phep...`) cũng chứa nội dung về Thay Đổi GPKD (cross-sell)

---

## 📁 Files quan trọng

| File | Mô tả |
|------|-------|
| `src/config/site.ts` | Contact info + toàn bộ navigation menu |
| `src/styles/global.css` | Design tokens, prose styles, animations |
| `src/assets/images/logo.webp` | Logo HN 150×150px |
| `src/components/layout/Navbar.astro` | Header + mobile menu |
| `src/components/homepage/CTABanner.astro` | Reusable CTA cuối mỗi service page |
| `.brain/brain.json` | Knowledge base dự án |
| `.brain/session.json` | Tiến độ hiện tại |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Lần sau quay lại: gõ `/recap` để nhớ lại context
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
