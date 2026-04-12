# Phase 10: Go Live & Hậu Kiểm

Status: ⬜ Pending
Dependencies: Phase 09

## Mục Tiêu
Chuyển domain chính sang Astro, backup WordPress cũ, và thực hiện kiểm tra toàn diện sau khi go live.

---

## Bước 1: Final Checklist Trước Khi Go Live

### Content Verification:
- [ ] Tất cả bài viết WordPress đã có trên Astro
- [ ] URL cấu trúc khớp 100% (để tránh mất SEO)
- [ ] Ảnh hiển thị đúng từ CDN
- [ ] Category/Tags hoạt động đúng
- [ ] RSS feed valid
- [ ] Sitemap.xml valid
- [ ] robots.txt đúng

### Technical Verification:
- [ ] Build production thành công: `npm run build`
- [ ] Không có broken links
- [ ] 404 page hiển thị đúng
- [ ] SSL/HTTPS hoạt động
- [ ] Mobile responsive pass

### SEO Verification:
- [ ] Meta title + description mỗi trang
- [ ] Open Graph images
- [ ] Schema.org structured data
- [ ] Canonical URLs

---

## Bước 2: Backup WordPress Cũ

### Phương án 1: Giữ trên subdomain
```
legacy.your-domain.com → WordPress cũ
```
- Thay đổi DNS: trỏ `legacy.` vào server WordPress
- Có thể tham khảo lại nội dung khi cần

### Phương án 2: Backup offline
```bash
# Export database
mysqldump -u user -p database > wp_backup_$(date +%Y%m%d).sql

# Backup files
tar -czf wp_files_$(date +%Y%m%d).tar.gz /path/to/wordpress/

# Lưu ở nơi an toàn (Google Drive, Cloudflare R2...)
```

---

## Bước 3: Chuyển Domain Chính

### Trên Cloudflare Workers Dashboard:
1. Vào **Settings** → **Domains & Routes**
2. **Add** → **Custom Domain**
3. Nhập `your-domain.com` (domain chính, không có `astro.` prefix)
4. Cloudflare tự cập nhật DNS

### Xóa subdomain test (nếu không cần):
- Xóa `astro.your-domain.com` khỏi Workers settings

---

## Bước 4: Redirect WordPress

### Nếu giữ WordPress trên server:
- Cài plugin redirect hoặc `.htaccess` → trỏ tất cả về subdomain `legacy.`
- Hoặc tắt server WordPress luôn (tiết kiệm chi phí)

### Redirect rules trên Cloudflare (nếu có URL thay đổi):
```
# Ví dụ: /page-name/ trên WP → /ten-trang/ trên Astro
# Cấu hình trong Cloudflare Rules → Redirect Rules
```

---

## Bước 5: Submit Google Search Console

1. Truy cập [Google Search Console](https://search.google.com/search-console)
2. **Verification** (nếu chưa verify domain)
3. **Sitemaps** → Submit `https://your-domain.com/sitemap-index.xml`
4. **URL Inspection** → Crawl các trang quan trọng
5. Theo dõi **Coverage** report trong 1-2 tuần

---

## Bước 6: Monitoring Sau Go Live (Tuần 1-2)

### Kiểm tra hàng ngày:
- [ ] Website accessible (uptime)
- [ ] Google Search Console: no crawl errors
- [ ] Cloudflare Analytics: traffic bình thường
- [ ] Google Analytics: traffic không drop đột ngột

### Kiểm tra hàng tuần:
- [ ] Search rankings ổn định
- [ ] New pages indexed
- [ ] Core Web Vitals report từ Google

---

## Bước 7: Tắt WordPress (Sau 2-4 Tuần)

Sau khi xác nhận mọi thứ ổn định:

```bash
# Tắt server WordPress
# → Tiết kiệm chi phí hosting
# → Không cần maintain PHP, database, plugins

# Giữ backup offline trong ít nhất 6 tháng
```

---

## Bước 8: Tài Liệu Vận Hành

### Quy trình viết bài mới:
```bash
# 1. Tạo file markdown
touch src/content/blog/ten-bai-viet.md

# 2. Thêm frontmatter + nội dung

# 3. Thêm ảnh lên R2 (nếu có)
rclone copy ~/images/ remote:bucket/images/

# 4. Commit + push
git add . && git commit -m "New post: ..." && git push

# 5. Cloudflare auto deploy (2-3 phút)
```

### Quy trình thêm trang dịch vụ mới:
```bash
# 1. Copy template từ trang dịch vụ tương tự
cp src/pages/dich-vu/dich-vu-mau.astro src/pages/dich-vu/dich-vu-moi.astro

# 2. Chỉnh sửa nội dung

# 3. Thêm card vào dich-vu.astro (trang index)

# 4. Thêm vào navbar (nếu cần) trong site.ts

# 5. Commit + push
```

---

## Tổng Kết Chi Phí

| Dịch vụ | Chi phí |
|---------|---------|
| Cloudflare Workers | **Miễn phí** (100,000 requests/ngày) |
| Cloudflare R2 | **Miễn phí** (10GB lưu trữ) |
| GitHub | **Miễn phí** |
| Domain | ~$10-15/năm |
| **Tổng** | **~$10-15/năm** (chỉ domain) |

### So sánh với WordPress:
| | WordPress | Astro + Cloudflare |
|---|---|---|
| Hosting | $5-20/tháng | **Miễn phí** |
| Database | Cần maintain | **Không cần** |
| SSL | Cần cấu hình | **Tự động** |
| CDN | Cần cài thêm | **Tích hợp sẵn** |
| Bảo mật | Plugin, updates | **Static = an toàn** |
| Tốc độ | 50-70 PageSpeed | **95-100 PageSpeed** |

---

## Checklist Phase 10

- [ ] Final checklist pass
- [ ] Backup WordPress cũ
- [ ] Chuyển domain chính
- [ ] Submit Google Search Console
- [ ] Monitor 1-2 tuần
- [ ] Tắt WordPress server
- [ ] Tài liệu vận hành hoàn chỉnh
- [ ] Team nội bộ được training quy trình mới

---

> **🎉 HOÀN THÀNH!**
>
> Website đã chuyển đổi thành công từ WordPress sang Astro + Cloudflare Workers.
> - Chi phí hosting: **$0/tháng**
> - Hiệu năng: **95-100 PageSpeed**
> - Bảo mật: **Static site = không hack được**
> - Vận hành: **git push = deploy**
