# Phase 06: Xây Dựng Trang Dịch Vụ

Status: ⬜ Pending
Dependencies: Phase 04

## Mục Tiêu
Xây dựng các trang dịch vụ tĩnh (service pages) — đây là phần **khác biệt lớn** so với hướng dẫn thuanbui.me (chỉ có blog). Website dịch vụ cần nhiều trang tĩnh chuyên biệt với nội dung SEO mạnh.

> [!IMPORTANT]
> Thuanbui.me **KHÔNG** có phần này. Đây là kinh nghiệm riêng từ dự án hoangnamcantho.com, nơi có **29 trang dịch vụ** được xây dựng hoàn toàn thủ công (không dùng Content Collection).

---

## Bước 1: Kiến Trúc Trang Dịch Vụ

### Cấu trúc files:
```
src/pages/
├── dich-vu.astro                        ← Trang index liệt kê tất cả dịch vụ
└── dich-vu/
    ├── thanh-lap-cong-ty-tai-can-tho.astro
    ├── dich-vu-ke-toan-can-tho.astro
    ├── hoa-don-dien-tu-can-tho.astro
    ├── giai-the-cong-ty-o-can-tho.astro
    └── ... (29 trang)
```

### Tại sao dùng `.astro` thay vì Markdown?
- Trang dịch vụ cần **layout phức tạp** (không chỉ text)
- Mỗi trang có sections khác nhau: giới thiệu, bảng giá, quy trình, FAQ
- Cần tích hợp **components reusable** (PricingTable, ProcessSteps...)
- SEO control chi tiết cho từng trang

---

## Bước 2: Template Trang Dịch Vụ

### Mỗi trang dịch vụ bao gồm:

```astro
---
import BaseLayout from "@/layouts/BaseLayout.astro";
import { siteConfig } from "@/config/site";

const pageTitle = "Dịch Vụ Thành Lập Công Ty Tại Cần Thơ";
const pageDescription = "Mô tả SEO chi tiết cho dịch vụ...";
---

<BaseLayout title={pageTitle} description={pageDescription}>
  <!-- 1. Hero Section (riêng cho trang dịch vụ) -->
  <section class="bg-gradient-to-r from-primary-700 to-primary-500 text-white py-16">
    <h1>{pageTitle}</h1>
    <p>Sub-headline giới thiệu dịch vụ</p>
    <a href={siteConfig.contact.zalo}>Tư Vấn Miễn Phí</a>
  </section>

  <!-- 2. Nội dung chính -->
  <section class="prose max-w-4xl mx-auto">
    <h2>Giới Thiệu Dịch Vụ</h2>
    <!-- Nội dung HTML/component -->
  </section>

  <!-- 3. Bảng Giá -->
  <section>
    <h2>Bảng Giá Dịch Vụ</h2>
    <!-- Pricing table component -->
  </section>

  <!-- 4. Quy Trình -->
  <section>
    <h2>Quy Trình Thực Hiện</h2>
    <!-- Steps component -->
  </section>

  <!-- 5. Hồ Sơ Cần Thiết -->
  <section>
    <h2>Hồ Sơ Cần Chuẩn Bị</h2>
    <!-- Checklist component -->
  </section>

  <!-- 6. CTA -->
  <section class="bg-primary-50 py-12 text-center">
    <h2>Liên hệ tư vấn ngay</h2>
    <a href="tel:{siteConfig.contact.hotline}">
      📞 {siteConfig.contact.hotlineDisplay}
    </a>
  </section>
</BaseLayout>
```

---

## Bước 3: Components Reusable cho Dịch Vụ

### `src/components/services/ServiceFeature.astro`
- Icon + tiêu đề + mô tả
- Dùng lại trong nhiều trang dịch vụ

### Có thể tái sử dụng từ homepage:
- `PricingTable.astro` → Bảng giá
- `ProcessSteps.astro` → Quy trình
- `RequiredDocs.astro` → Hồ sơ cần thiết
- `CTABanner.astro` → Kêu gọi hành động

---

## Bước 4: Trang Index Dịch Vụ (`src/pages/dich-vu.astro`)

### Yêu cầu:
- Grid hiển thị tất cả dịch vụ
- Mỗi card: icon + tên dịch vụ + mô tả ngắn + link
- Chia nhóm dịch vụ (VD: Thành lập, Kế toán, Thay đổi, Giải thể)

```astro
<!-- Nhóm: Thành Lập Doanh Nghiệp -->
<section>
  <h2>Thành Lập Doanh Nghiệp</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ServiceCard
      title="Thành Lập Công Ty"
      href="/dich-vu/thanh-lap-cong-ty-tai-can-tho"
      icon="lucide:building"
      description="Dịch vụ thành lập công ty TNHH, cổ phần..."
    />
    <!-- ... more cards -->
  </div>
</section>
```

---

## Bước 5: Quy Trình Tạo Trang Dịch Vụ Mới

### Mỗi khi cần thêm trang dịch vụ mới:

1. **Tạo file** `src/pages/dich-vu/ten-dich-vu.astro`
2. **Copy template** từ trang dịch vụ tương tự
3. **Chỉnh sửa nội dung** (title, description, sections)
4. **Thêm card** vào `dich-vu.astro` (trang index)
5. **Thêm vào nav** (nếu cần) trong `site.ts` → `navLinks.children`
6. **Build test** `npm run build` để kiểm tra

### Batch creation (tạo nhiều trang cùng lúc):
- Dự án hoangnamcantho.com đã tạo **8 batch** service pages
- Mỗi batch tạo 3-6 trang dịch vụ
- Sử dụng template chuẩn và chỉ đổi nội dung

---

## Checklist Phase 06

- [ ] Template trang dịch vụ chuẩn
- [ ] Tạo tất cả trang dịch vụ cần thiết
- [ ] Trang index dịch vụ với grid cards
- [ ] Mỗi trang có: Hero, Nội dung, Bảng giá, Quy trình, CTA
- [ ] SEO meta tags đầy đủ cho từng trang
- [ ] Thêm service links vào navbar dropdown
- [ ] Responsive trên mobile
- [ ] Schema.org Service/LocalBusiness structured data

---

> **Output của Phase 06:**
> - Tất cả trang dịch vụ với nội dung SEO
> - Trang index với grid navigation
> - Navbar dropdown cập nhật

**Next Phase:** [Phase 07 - Cloudflare R2 Media Storage](./phase-07-cloudflare-r2.md)
