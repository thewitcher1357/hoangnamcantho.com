# Quy Trình Chuyển Đổi Website WordPress → Astro + Cloudflare

> **Dự án tham chiếu:** hoangnamcantho.com (Website dịch vụ doanh nghiệp)
> **Hướng dẫn tham khảo:** [thuanbui.me - WordPress to Astro Series](https://thuanbui.me/wordpress-to-astro-phan-1/)
> **Ngày tạo:** 2026-04-12
> **Trạng thái:** 📖 Tài liệu quy trình (Process Documentation)

---

## 📋 Tổng Quan

Tài liệu này tổng hợp **quy trình chi tiết** để chuyển đổi một website WordPress sang Astro + Cloudflare, dựa trên kinh nghiệm thực tế từ dự án **hoangnamcantho.com** kết hợp có chọn lọc với hướng dẫn từ **thuanbui.me**.

### Đặc điểm dự án hoangnamcantho.com:
- **Loại site:** Website dịch vụ doanh nghiệp (không phải blog thuần túy)
- **Nội dung:** 46 bài blog + 29 trang dịch vụ + trang chủ + podcast RSS feed
- **Tech stack:** Astro 6 + TailwindCSS 4 + Cloudflare Workers + R2
- **Tên miền:** hoangnamcantho.com (images: images.hoangnamcantho.com)

### Khác biệt so với hướng dẫn thuanbui.me:
| Thuanbui.me | Dự án hoangnamcantho.com |
|---|---|
| Blog thuần túy (chỉ có bài viết) | Website dịch vụ + blog + podcast |
| Theme Astro Starter Pro | Theme custom (thiết kế riêng) |
| Cloudflare Pages (đã deprecated) | Cloudflare Workers (mới) |
| Chỉ có blog posts | Blog + 29 trang dịch vụ tĩnh |
| Không có podcast | Có RSS feed cho podcast |
| Ảnh update trực tiếp URL | Remark plugin tự động chuyển relative → CDN URL |

---

## 🛠️ Yêu Cầu Hệ Thống

### Phần mềm cần cài đặt:
```bash
# Kiểm tra phiên bản
node --version    # >= 20.x
git --version     # >= 2.x
gh auth status    # GitHub CLI đã đăng nhập
```

### Tài khoản cần có:
- ✅ GitHub (free)
- ✅ Cloudflare (free)
- ✅ Truy cập WordPress Admin (site cần chuyển đổi)

### Công cụ bổ sung (tùy chọn):
- `rclone` — để upload ảnh lên Cloudflare R2
- `cwebp` — chuyển đổi ảnh sang WebP (nếu dùng Cách 1 tối ưu ảnh)
- VS Code — IDE khuyến khích

---

## Phases

| Phase | Tên | Trạng thái | Mô tả |
|-------|-----|--------|-------|
| 01 | Export & Chuyển đổi nội dung | ⬜ Pending | Export WP, chuyển sang Markdown |
| 02 | Khởi tạo dự án Astro | ⬜ Pending | Cài đặt Astro + cấu hình ban đầu |
| 03 | Thiết kế & Xây dựng Layout | ⬜ Pending | Navbar, Footer, BaseLayout |
| 04 | Xây dựng trang chủ | ⬜ Pending | Hero, Services, CTA, Blog mới nhất |
| 05 | Xây dựng hệ thống Blog | ⬜ Pending | Blog list, bài viết, category, tags |
| 06 | Xây dựng trang dịch vụ | ⬜ Pending | Các trang dịch vụ tĩnh |
| 07 | Cloudflare R2 - Media Storage | ⬜ Pending | Upload ảnh, cấu hình CDN |
| 08 | Deploy lên Cloudflare Workers | ⬜ Pending | GitHub, Wrangler, CI/CD |
| 09 | Tối ưu hiệu năng & SEO | ⬜ Pending | Ảnh, cache, Core Web Vitals |
| 10 | Go Live & Hậu kiểm | ⬜ Pending | Chuyển domain, kiểm tra, backup WP |

---

## Quick Commands
- Bắt đầu Phase 1: `/code phase-01`
- Check progress: `/next`
- Save context: `/save-brain`
