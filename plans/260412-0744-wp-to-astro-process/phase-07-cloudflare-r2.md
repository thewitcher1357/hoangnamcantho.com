# Phase 07: Cloudflare R2 — Media Storage

Status: ⬜ Pending
Dependencies: Phase 05

## Mục Tiêu
Chuyển toàn bộ hình ảnh từ local/WordPress sang Cloudflare R2, cấu hình custom domain cho CDN, và cập nhật link ảnh trong project.

> [!NOTE]
> Phase này theo sát hướng dẫn **Phần 3** và **Phần 5** của thuanbui.me, với bổ sung kinh nghiệm từ dự án hoangnamcantho.com.

---

## Bước 1: Tạo R2 Bucket trên Cloudflare

1. Truy cập [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vào **R2 Object Storage** → **Create Bucket**
3. Đặt tên bucket (VD: `hoangnamcantho-images`)
4. Bấm **Create Bucket**

---

## Bước 2: Kết Nối Custom Domain

1. Vào **Settings** của bucket → **Custom Domains** → **Add**
2. Nhập domain: `images.your-domain.com`
3. Bấm **Connect Domain**
4. Cloudflare tự tạo DNS Record + SSL

> [!TIP]
> Tên miền phải được quản lý trên Cloudflare DNS để tự động cấu hình.

---

## Bước 3: Cấu Hình rclone

### Lấy API credentials:
1. Cloudflare Dashboard → R2 → **Manage R2 API Tokens**
2. **Create API Token** → Permissions: **Object Read & Write**
3. Lưu lại: **Access Key ID**, **Secret Access Key**, **Endpoint URL**

### Cấu hình rclone:
```bash
rclone config
# → n (New)
# → Đặt tên (VD: hoangnam-images)
# → 4 (Amazon S3)
# → 7 (Cloudflare R2)
# → 1 (Enter credentials)
# → Paste Access Key ID
# → Paste Secret Access Key
# → Enter (skip region)
# → Paste Endpoint
# → Enter (skip còn lại)
```

### Xác nhận kết nối:
```bash
rclone tree hoangnam-images:hoangnamcantho-images
# Kết quả: 0 directories, 0 files
```

---

## Bước 4: Upload Ảnh Lên R2

```bash
cd ~/astro-project/public

# Upload toàn bộ ảnh
rclone copy images/ hoangnam-images:hoangnamcantho-images/images/ \
    --progress \
    --transfers 4 \
    --retries 10 \
    --retries-sleep 5s \
    --tpslimit 10

# Chờ 5-10 phút tùy số lượng ảnh
```

### Kiểm tra số lượng:
```bash
echo "R2: $(rclone ls hoangnam-images:hoangnamcantho-images/images/ | wc -l) files"
echo "Local: $(ls images/ | wc -l) files"
# → Hai số phải khớp nhau
```

> [!WARNING]
> Nếu upload bị lỗi giữa chừng, chạy lại lệnh `rclone copy` — nó tự skip file đã upload, chỉ tiếp tục phần còn lại.

---

## Bước 5: Cập Nhật Link Ảnh Trong Markdown

### Có 2 phương án:

### Phương án A: Remark Plugin (KHUYẾN KHÍCH ⭐)
> **Dự án hoangnamcantho.com sử dụng phương án này.**

- File markdown giữ nguyên relative path: `![](/images/xxx.jpg)`
- Remark plugin tự chuyển thành CDN URL khi build
- Ưu điểm: Dễ đổi CDN sau này, file markdown sạch

**Đã cấu hình ở Phase 02** (`remark-r2-images.mjs`).

### Phương án B: Update trực tiếp (thuanbui.me - Phần 3)

```bash
#!/bin/bash
BLOG_DIR="./src/content/blog"
IMAGE_DOMAIN="https://images.your-domain.com"

# Cập nhật trong body
find "$BLOG_DIR" -name "*.md" -exec \
  sed -i "s|](/images/|](${IMAGE_DOMAIN}/|g" {} +

# Cập nhật trong frontmatter
find "$BLOG_DIR" -name "*.md" -exec \
  sed -i "s|image: \"\([^h][^t]\)|image: \"${IMAGE_DOMAIN}/\1|g" {} +
```

> [!TIP]
> Nếu dùng Phương án B, sau này muốn đổi CDN phải sửa lại tất cả file markdown.

---

## Bước 6: Xóa Ảnh Local

```bash
# XÓA SAU KHI ĐÃ XÁC NHẬN ảnh trên R2 hiển thị đúng
rm -rf public/images
```

### Kiểm tra:
```bash
npm run dev
# Truy cập website → Kiểm tra ảnh hiển thị từ CDN
# Mở DevTools → Network → Kiểm tra ảnh tải từ images.your-domain.com
```

---

## Bước 7: Upload Assets Bổ Sung (Nếu Có)

Ngoài ảnh blog, có thể cần upload thêm:
- Ảnh cho trang dịch vụ
- Logo, favicon
- Podcast audio files (nếu có)

```bash
# Upload podcast audio
rclone copy ~/podcast-files/ hoangnam-images:hoangnamcantho-images/podcast/ \
    --progress --transfers 2
```

---

## Checklist Phase 07

- [ ] Tạo R2 bucket
- [ ] Kết nối custom domain (images.your-domain.com)
- [ ] Cấu hình rclone
- [ ] Upload toàn bộ ảnh → R2
- [ ] Xác nhận số file khớp (local vs R2)
- [ ] Cấu hình remark plugin (hoặc update link trực tiếp)
- [ ] Xóa ảnh local
- [ ] Kiểm tra ảnh hiển thị từ CDN
- [ ] Upload assets bổ sung (podcast, etc.)

---

> **Output của Phase 07:**
> - Tất cả media lưu trên Cloudflare R2
> - CDN domain hoạt động (images.your-domain.com)
> - Project không chứa ảnh nặng (git repo nhẹ)

**Next Phase:** [Phase 08 - Deploy lên Cloudflare Workers](./phase-08-deploy.md)
