# Phase 04: Xây Dựng Trang Chủ

Status: ⬜ Pending
Dependencies: Phase 03

## Mục Tiêu
Xây dựng trang chủ hoàn chỉnh với các section chuyên nghiệp, phù hợp cho website dịch vụ doanh nghiệp.

---

## Các Section Trang Chủ (Theo thứ tự)

### 1. HeroBanner (`src/components/homepage/HeroBanner.astro`)
- Headline mạnh mẽ + sub-headline
- Nút CTA chính (Liên Hệ, Tư Vấn Miễn Phí)
- Background gradient hoặc ảnh
- Thông tin highlight (số năm kinh nghiệm, số khách hàng...)

### 2. ServicesGrid (`src/components/homepage/ServicesGrid.astro`)
- Grid 3-4 cột các dịch vụ chính
- Icon + tên dịch vụ + mô tả ngắn
- Link đến trang dịch vụ chi tiết
- Hover effects

### 3. WhyChooseUs (`src/components/homepage/WhyChooseUs.astro`)
- 3-4 lý do chọn dịch vụ
- Icon + tiêu đề + mô tả
- Layout: grid hoặc alternating rows

### 4. PricingTable (`src/components/homepage/PricingTable.astro`)
- Bảng giá dịch vụ (nếu có)
- So sánh các gói dịch vụ
- Nút CTA cho mỗi gói

### 5. ProcessSteps (`src/components/homepage/ProcessSteps.astro`)
- Quy trình làm việc (4-5 bước)
- Timeline hoặc numbered steps
- Icon + mô tả từng bước

### 6. RequiredDocs (`src/components/homepage/RequiredDocs.astro`)
- Danh sách hồ sơ cần thiết
- Checklist style

### 7. LatestPosts (`src/components/homepage/LatestPosts.astro`)
- 3-6 bài viết blog mới nhất
- Card layout (ảnh + tiêu đề + ngày + excerpt)
- Link "Xem tất cả" → trang Blog

### 8. ContactForm (`src/components/homepage/ContactForm.astro`)
- Form liên hệ nhanh
- Hoặc: thông tin liên hệ + nút CTA

### 9. CTABanner (`src/components/homepage/CTABanner.astro`)
- Banner kêu gọi hành động cuối trang
- Hotline + nút Zalo

---

## Trang Chủ (`src/pages/index.astro`)

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import HeroBanner from "@/components/homepage/HeroBanner.astro";
import ServicesGrid from "@/components/homepage/ServicesGrid.astro";
import WhyChooseUs from "@/components/homepage/WhyChooseUs.astro";
import PricingTable from "@/components/homepage/PricingTable.astro";
import ProcessSteps from "@/components/homepage/ProcessSteps.astro";
import LatestPosts from "@/components/homepage/LatestPosts.astro";
import CTABanner from "@/components/homepage/CTABanner.astro";
---

<BaseLayout
  title="Trang Chủ"
  description="Mô tả SEO trang chủ"
>
  <HeroBanner />
  <ServicesGrid />
  <WhyChooseUs />
  <PricingTable />
  <ProcessSteps />
  <LatestPosts />
  <CTABanner />
</BaseLayout>
```

---

## Các Trang Tĩnh Khác

Đồng thời tạo các trang tĩnh cơ bản:

| Trang | File | Nội dung |
|-------|------|----------|
| Giới thiệu | `gioi-thieu.astro` | Thông tin công ty, lịch sử, đội ngũ |
| Liên hệ | `lien-he.astro` | Form liên hệ + bản đồ + thông tin |
| Chính sách bảo mật | `chinh-sach-bao-mat.astro` | Nội dung chính sách |
| Điều khoản sử dụng | `dieu-khoan-su-dung.astro` | Nội dung điều khoản |
| 404 | `404.astro` | Trang lỗi 404 tiếng Việt |
| robots.txt | `robots.txt.ts` | Cấu hình crawl |
| RSS Feed | `rss.xml.js` | RSS cho blog |

---

## Checklist Phase 04

- [ ] HeroBanner với CTA
- [ ] ServicesGrid với links
- [ ] WhyChooseUs sections
- [ ] ProcessSteps quy trình
- [ ] LatestPosts (query blog posts)
- [ ] CTABanner
- [ ] Trang giới thiệu
- [ ] Trang liên hệ
- [ ] Trang chính sách + điều khoản
- [ ] Trang 404
- [ ] robots.txt + RSS feed
- [ ] Responsive tất cả sections

---

> **Output của Phase 04:**
> - Trang chủ hoàn chỉnh, chuyên nghiệp
> - Các trang tĩnh cơ bản đã sẵn sàng
> - Tất cả responsive trên mobile

**Next Phase:** [Phase 05 - Xây Dựng Hệ Thống Blog](./phase-05-blog-system.md)
