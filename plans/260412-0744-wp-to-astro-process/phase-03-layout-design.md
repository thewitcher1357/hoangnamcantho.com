# Phase 03: Thiết Kế & Xây Dựng Layout

Status: ⬜ Pending
Dependencies: Phase 02

## Mục Tiêu
Xây dựng khung giao diện chính cho toàn bộ website: BaseLayout, Navbar (với responsive menu + dropdown), Footer, và global styles.

---

## Bước 1: BaseLayout (`src/layouts/BaseLayout.astro`)

BaseLayout là wrapper chính cho mọi trang, chứa `<head>` với meta tags SEO và `<body>` với Navbar + Footer.

### Cấu trúc BaseLayout:

```astro
---
import Navbar from "@/components/layout/Navbar.astro";
import Footer from "@/components/layout/Footer.astro";
import "@/styles/global.css";

interface Props {
  title: string;
  description?: string;
  ogImage?: string;
  canonicalURL?: string;
}

const { title, description, ogImage, canonicalURL } = Astro.props;
const siteTitle = `${title} | Tên Website`;
---

<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{siteTitle}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:description" content={description} />
    {ogImage && <meta property="og:image" content={ogImage} />}
    {canonicalURL && <link rel="canonical" href={canonicalURL} />}
    <link rel="sitemap" href="/sitemap-index.xml" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  </head>
  <body>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

### Checklist BaseLayout:
- [ ] SEO meta tags (title, description, og:image, canonical)
- [ ] Favicon
- [ ] Google Fonts preload
- [ ] Sitemap link
- [ ] Schema.org structured data (LocalBusiness nếu là website dịch vụ)

---

## Bước 2: Navbar (`src/components/layout/Navbar.astro`)

### Yêu cầu:
- ✅ Logo + tên công ty
- ✅ Navigation links (từ `siteConfig.navLinks`)
- ✅ Dropdown menu cho "Dịch Vụ" (hover desktop / tap mobile)
- ✅ Hamburger menu responsive (mobile)
- ✅ Sticky header (dính trên đầu khi scroll)
- ✅ Nút CTA (ví dụ: Hotline, Zalo)

### Cấu trúc Nav Links trong `site.ts`:

```typescript
navLinks: [
  { text: "Trang Chủ", href: "/", icon: "lucide:home" },
  {
    text: "Dịch Vụ", href: "/dich-vu", icon: "lucide:briefcase",
    children: [
      { text: "Dịch vụ A", href: "/dich-vu/dich-vu-a" },
      { text: "Dịch vụ B", href: "/dich-vu/dich-vu-b" },
    ],
  },
  // ...
]
```

### Lưu ý quan trọng:
- Mobile menu mở/đóng bằng JavaScript vanilla (`<script>` tag trong component)
- Dropdown menu: hover trên desktop, click/tap trên mobile
- Active state: highlight menu item tương ứng với trang hiện tại

---

## Bước 3: Footer (`src/components/layout/Footer.astro`)

### Yêu cầu:
- ✅ Logo + mô tả công ty
- ✅ Thông tin liên hệ (địa chỉ, SĐT, email)
- ✅ Links nhanh (dịch vụ, chính sách)
- ✅ Social media icons
- ✅ Copyright
- ✅ Responsive grid (2-4 cột)

---

## Bước 4: Global CSS (`src/styles/global.css`)

### Cấu trúc file:

```css
/* TailwindCSS v4 import */
@import "tailwindcss";

/* Custom theme tokens */
@theme {
  --color-primary-50: oklch(0.97 0.01 250);
  --color-primary-500: oklch(0.55 0.15 250);
  --color-primary-700: oklch(0.40 0.12 250);
  /* ... các màu khác */

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
}

/* Base styles */
html { scroll-behavior: smooth; }
body { font-family: var(--font-sans); }

/* Prose styling cho blog content */
.prose img { border-radius: 0.5rem; }
.prose h2 { border-bottom: 2px solid var(--color-primary-100); }

/* Component styles */
.btn-primary { /* ... */ }
.card { /* ... */ }
```

### Lưu ý:
- Dự án hoangnamcantho.com dùng **TailwindCSS v4** (cú pháp `@theme` mới)
- Nếu không dùng Tailwind: viết CSS vanilla
- Responsive breakpoints: mobile-first (`min-width: 768px`, `1024px`)

---

## Bước 5: Floating Widgets (Tùy Chọn)

### Nút Zalo/Hotline cố định góc màn hình:
```
src/components/widgets/
├── FloatingZalo.astro     ← Nút Zalo cố định bottom-right
├── FloatingPhone.astro    ← Nút hotline cố định bottom-left
└── BackToTop.astro        ← Nút scroll to top
```

Các widget này đặt trong BaseLayout, ngoài `<main>`.

---

## Checklist Phase 03

- [ ] BaseLayout hoạt động (HEAD + meta tags SEO)
- [ ] Navbar responsive (desktop menu + mobile hamburger)
- [ ] Dropdown menu cho nhóm dịch vụ
- [ ] Footer với thông tin liên hệ
- [ ] Global CSS / design system tokens
- [ ] Floating widgets (Zalo, Phone, Back to Top)
- [ ] Kiểm tra responsive trên mobile/tablet/desktop
- [ ] Active state cho menu items

---

> **Output của Phase 03:**
> - Layout khung hoàn chỉnh (Navbar + Footer trên mọi trang)
> - Design system (colors, fonts, spacing) đã thiết lập
> - Responsive trên mọi thiết bị

**Next Phase:** [Phase 04 - Xây Dựng Trang Chủ](./phase-04-homepage.md)
