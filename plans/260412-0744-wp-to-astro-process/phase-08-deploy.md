# Phase 08: Deploy Lên Cloudflare Workers

Status: ⬜ Pending
Dependencies: Phase 07

## Mục Tiêu
Đưa project lên GitHub, deploy lên Cloudflare Workers với CI/CD tự động, cấu hình custom domain.

> [!IMPORTANT]
> **Cloudflare Pages đã deprecated (04/2025).** Sử dụng **Cloudflare Workers** cho dự án mới. Đây là điểm khác biệt quan trọng so với một số hướng dẫn cũ.

---

## Bước 1: Cài Đặt Wrangler CLI

```bash
npm install wrangler@latest --save-dev
```

---

## Bước 2: Tạo File `wrangler.jsonc`

```jsonc
{
    "name": "ten-du-an",                    // ← Đổi tên project
    "compatibility_date": "2026-04-09",     // ← Ngày hiện tại
    "main": "worker.js",                    // ← Nếu có custom worker logic
    "assets": {
        "directory": "./dist",
        "binding": "ASSETS",
        "not_found_handling": "404-page",
        "run_worker_first": ["/feed/podcast", "/feed/podcast/"]  // ← Tùy chọn
    }
}
```

> [!NOTE]
> `run_worker_first` chỉ cần nếu bạn có worker logic đặc biệt (VD: podcast RSS feed với custom headers).

---

## Bước 3: Tạo Worker File (Tùy Chọn)

### Trường hợp cần custom worker (`worker.js`):

```javascript
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Custom logic cho podcast feed (ví dụ)
    if (url.pathname === "/feed/podcast/" || url.pathname === "/feed/podcast") {
      const asset = await env.ASSETS.fetch(
        new Request(new URL("/feed/podcast", url.origin), {
          method: "GET",
          headers: request.headers,
        }),
      );

      if (asset.ok) {
        const headers = {
          "Content-Type": "application/rss+xml; charset=utf-8",
          "Cache-Control": "public, max-age=3600",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        };

        if (request.method === "OPTIONS") {
          return new Response(null, { status: 204, headers });
        }
        if (request.method === "HEAD") {
          return new Response(null, { status: 200, headers });
        }
        return new Response(asset.body, { status: 200, headers });
      }
    }

    // Mọi request khác → serve static assets
    return env.ASSETS.fetch(request);
  },
};
```

### Trường hợp KHÔNG cần custom worker:
- Bỏ `"main": "worker.js"` trong `wrangler.jsonc`
- Không tạo file `worker.js`
- Cloudflare tự serve static assets

---

## Bước 4: Đưa Project Lên GitHub

```bash
cd ~/astro-project

# Commit tất cả
git add .
git commit -m "Initial Astro migration from WordPress"

# Tạo repo + push (dùng GitHub CLI)
gh repo create YOUR_USERNAME/ten-du-an --public --source=. --remote=origin --push

# Xác nhận trên browser
gh repo view --web
```

> [!TIP]
> Nếu chưa cài GitHub CLI: `sudo apt install gh` (Linux) hoặc `brew install gh` (macOS), sau đó `gh auth login`.

---

## Bước 5: Kết Nối GitHub → Cloudflare Workers

### Cách 1: Git Integration (KHUYẾN KHÍCH ⭐)

1. Vào [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages**
2. **Create Application** → **Continue with GitHub**
3. Chọn repo vừa tạo → **Next**
4. Giữ mặc định → **Deploy**
5. Chờ 2-5 phút

### CI/CD tự động:
Sau khi kết nối, mỗi lần `git push`, Cloudflare tự động:
```
git push → GitHub → Cloudflare Build → Deploy → Live!
```

### Cách 2: Wrangler CLI (Deploy thủ công)

```bash
# Build
npm run build

# Deploy
npx wrangler deploy
```

---

## Bước 6: Cấu Hình Custom Domain

1. Vào **Settings** của Worker → **Domains & Routes** → **Add**
2. Chọn **Custom Domain**
3. Nhập domain: `your-domain.com` (hoặc `astro.your-domain.com` để test trước)
4. Cloudflare tự tạo DNS + SSL

### Quy trình chuyển đổi an toàn:

```
Bước 1: Deploy lên subdomain test
   astro.your-domain.com → Kiểm tra kỹ

Bước 2: Kiểm tra checklist (xem bên dưới)

Bước 3: Chuyển domain chính
   your-domain.com → Trỏ vào Cloudflare Workers

Bước 4: Backup WordPress cũ
   legacy.your-domain.com → Giữ WordPress để tham khảo
```

---

## Bước 7: Pre-Launch Checklist

Trước khi chuyển domain chính, kiểm tra:

| Mục | Trạng thái |
|-----|-----------|
| Bài viết load đúng nội dung | ⬜ |
| URL bài viết khớp WordPress cũ | ⬜ |
| Ảnh tải từ CDN (images.your-domain.com) | ⬜ |
| Category/Tags hoạt động | ⬜ |
| Trang 404 hiển thị đúng | ⬜ |
| Tiếng Việt không lỗi encoding | ⬜ |
| RSS feed hoạt động | ⬜ |
| Sitemap.xml tạo đúng | ⬜ |
| robots.txt cấu hình đúng | ⬜ |
| Meta tags SEO hiển thị đúng | ⬜ |
| Mobile responsive | ⬜ |
| Trang dịch vụ hoạt động (nếu có) | ⬜ |

---

## Bước 8: Workflow Cập Nhật Hàng Ngày

Sau khi deploy xong, quy trình viết bài mới:

```bash
# 1. Tạo file markdown mới
vim src/content/blog/ten-bai-viet-moi.md

# 2. Thêm ảnh (nếu có) lên R2
rclone copy ~/anh-moi/ hoangnam-images:bucket-name/images/

# 3. Commit và push
git add .
git commit -m "Thêm bài viết: Tên bài"
git push

# 4. Cloudflare tự build + deploy (2-3 phút)
```

---

## Checklist Phase 08

- [ ] Cài wrangler CLI
- [ ] Tạo wrangler.jsonc
- [ ] Tạo worker.js (nếu cần custom logic)
- [ ] Push code lên GitHub
- [ ] Kết nối GitHub → Cloudflare Workers
- [ ] Build thành công trên Cloudflare
- [ ] Cấu hình subdomain test
- [ ] Pre-launch checklist pass
- [ ] Cấu hình domain chính
- [ ] Backup WordPress cũ

---

> **Output của Phase 08:**
> - Website live trên Cloudflare Workers
> - CI/CD: git push → auto deploy
> - Custom domain hoạt động

**Next Phase:** [Phase 09 - Tối Ưu Hiệu Năng & SEO](./phase-09-optimization.md)
