━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 HANDOVER DOCUMENT - Hoàng Nam Cần Thơ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📍 Đang làm: Migration toàn bộ giao diện từ hoangnamvungtau.com → hoangnamcantho.com
🔢 Đến bước: Phase 2 hoàn thành (Pages), chuẩn bị Phase 3 (QA & Deploy)

✅ ĐÃ XONG:
   - Phase 01: Setup & Config ✓
     - astro.config.mjs (locale vi, site URL)
     - site.ts (Single Source of Truth)
     - global.css (Light mode only, #0056b3 primary)
   - Phase 02: Layout Components ✓
     - Navbar (top bar + main nav + dropdowns + mobile slide menu)
     - Footer (3 columns: contact, about links, newsletter)
     - FloatingActions (Zalo + Phone với ripple animation)
     - BackToTop
   - Phase 03: Trang Chủ (/) ✓
     - 9 sections: Hero, Services, CTA, Process, Pricing, WhyChooseUs, Docs, Posts, Contact
   - Phase 04: Trang Giới Thiệu (/gioi-thieu) ✓
     - Hero banner, team photo, CTABanner, triết lý phục vụ
   - Phase 05: Trang Liên Hệ (/lien-he) ✓
     - 4 contact cards, form tư vấn, Google Maps embed, giờ làm việc
   - Phase 06: Trang Dịch Vụ (/dich-vu) ✓
     - 3 dịch vụ chính (cards + features list), CTA, 6 dịch vụ bổ sung, why choose us
   - Phase 07: Việt hóa Blog & Category ✓
     - Hero banners, vi-VN date, "phút đọc", pagination Vietnamese

⏳ CÒN LẠI:
   - Cleanup trang English cũ (about, contact, services)
   - Test responsive mobile
   - Deploy lên Vercel/Netlify
   - Tối ưu Google Maps embed cho đúng vị trí

🔧 QUYẾT ĐỊNH QUAN TRỌNG:
   - Light Mode Only (không dark mode)
   - site.ts là Single Source of Truth cho contact, nav, footer
   - Blog URL dùng root path (/slug) - tương thích WordPress
   - Thiết kế theo mẫu hoangnamvungtau.com, localize cho Cần Thơ
   - Hero banner pattern: gradient from-primary to-primary-light

⚠️ LƯU Ý CHO SESSION SAU:
   - Trang English cũ (about.astro, contact.astro, services.astro) vẫn còn → cần xóa
   - widgets.astro là demo page từ template → có thể xóa
   - Google Maps iframe cần embed URL chính xác cho địa chỉ 03 Quản Trọng Hoàng
   - 46 blog posts đã migrate từ WordPress

📁 FILES QUAN TRỌNG:
   - src/config/site.ts (thông tin liên hệ & navigation)
   - src/styles/global.css (design system & prose styles)
   - src/layouts/BaseLayout.astro (wrapper cho tất cả pages)
   - src/components/homepage/* (9 components trang chủ)
   - .brain/brain.json (project knowledge)
   - .brain/session.json (session state)

📊 Build Stats:
   - 62 pages built successfully
   - 46 blog posts migrated
   - 13 optimized images
   - Build time: ~40s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📍 Đã lưu! Để tiếp tục: Gõ /recap
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
