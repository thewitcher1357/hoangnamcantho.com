# Phase 01: Export & Chuyển Đổi Nội Dung WordPress → Markdown

Status: ⬜ Pending
Dependencies: Không

## Mục Tiêu
Xuất toàn bộ nội dung từ WordPress (bài viết, trang, hình ảnh) và chuyển đổi sang file Markdown để sử dụng với Astro.

> [!IMPORTANT]
> Đây là phase tốn nhiều thời gian nhất. Cần kiểm tra kỹ nội dung sau khi chuyển đổi.

---

## Bước 1: Export XML từ WordPress

```bash
# Vào WordPress Admin → Tools → Export → All Content
# Download file .xml về máy
```

### Tạo thư mục làm việc:
```bash
mkdir ~/blog-migration
mv ~/Downloads/*.xml ~/blog-migration/
cd ~/blog-migration
```

**Output:** File `.xml` chứa toàn bộ nội dung WordPress

---

## Bước 2: Xử Lý Link Ảnh (Tùy Chọn)

> [!TIP]
> Bước này chỉ cần nếu bạn muốn tải ảnh gốc (full size) thay vì ảnh thumbnail mà WordPress tạo ra (dạng `filename-900x600.jpg`).

### Sử dụng script `wp-image-fixer.sh`:

Script này kiểm tra xem ảnh gốc có tồn tại không trước khi thay thế link.

```bash
# Tải script từ: https://gist.github.com/10h30/f6720ebbad3d5acd40e20a9883690bcb
# Hoặc tự tạo file wp-image-fixer.sh (xem nội dung tại thuanbui.me/wordpress-to-astro-phan-1)

chmod +x wp-image-fixer.sh

# Bước 1: Quét (dry-run)
./wp-image-fixer.sh
# → Nhập tên file XML
# → Kiểm tra kết quả: bao nhiêu ảnh OK, bao nhiêu MISS

# Bước 2: Áp dụng thay đổi
./wp-image-fixer.sh --apply
# → Tạo file fixed-xxx.xml
```

**Output:** File `fixed-xxx.xml` với link ảnh gốc

---

## Bước 3: Chuyển Đổi XML → Markdown

Sử dụng tool `wordpress-export-to-markdown`:

```bash
npx wordpress-export-to-markdown \
    --prefix-date=true \
    --post-folders=false \
    --frontmatter-fields=title,author,date:pubDatetime,categories,tags,coverImage:image,draft,slug \
    --save-images=all \
    --date-folders=none
```

> [!WARNING]
> Với 100+ bài, quá trình download ảnh mất 10–20 phút. Không đóng Terminal.

### Cấu trúc output:
```
output/
├── posts/          ← Bài viết .md + thư mục images/
│   ├── *.md
│   └── images/
├── pages/          ← Các trang tĩnh
└── custom/         ← Nội dung custom (plugin, shortcode...)
```

---

## Bước 4: Dọn Dẹp File Markdown

### 4.1. Xóa link ảnh dư thừa (wp-content)

```bash
# Kiểm tra
grep -rn 'wp-content' output/posts/ --include='*.md'

# Xử lý toàn bộ
find output/posts/ -name '*.md' -exec perl -i -pe \
  's/\[!\[.*?\]\(([^)]+)\)\]\((https?:)?\/\/[^)]*wp-content\/uploads[^)]*\)/![]($1)/g;
   s/\[\]\((https?:)?\/\/[^)]*wp-content\/uploads[^)]*\)//g;' {} +
```

### 4.2. Xóa shortcode caption + Gutenberg comments

```bash
# Xử lý caption shortcode và Gutenberg block comments
find output/posts/ -name '*.md' -exec perl -0777 -i -pe '
  s/\\\[caption\b[^\[]*?\\\]\s*(!\\[[^\]]*\]\\([^)]*\\))\s*(.*?)\s*\\\[\/caption\\\]/
    my $img = $1; my $cap = $2;
    $cap =~ s|^\s+||; $cap =~ s|\s+$||;
    $img =~ m|!\[([^\]]*)\]\(([^)]*)\)|;
    my $alt = $1; my $src = $2;
    $cap ? "![$cap]($src)" : "![$alt]($src)"
  /gxse;
  s/<!--\s*wp:[^>]+-->//g;
  s/<!--\s*\/wp:[^>]+-->//g;
' {} +
```

### 4.3. Kiểm tra ảnh thiếu

```bash
# Tìm ảnh được tham chiếu trong .md nhưng không tồn tại
find output/posts/ -name "*.md" | while read f; do
  dir=$(dirname "$f")
  grep -oE '!\[[^]]*\]\(/images/[^)]+\)' "$f" | grep -oE 'images/[^)]+' | while read img; do
    if [ ! -f "$dir/$img" ]; then
      echo "MISSING: $dir/$img (in $f)"
    fi
  done
done
```

→ Với ảnh MISSING: tải thủ công hoặc xóa link trong markdown.

### 4.4. Xóa ảnh không sử dụng

```bash
# Tìm ảnh trong thư mục images/ nhưng không được tham chiếu
cd output/posts
{
  grep -ohE 'images/[^)]+' *.md
  grep -ohE '^coverImage:\s*"[^"]*"' *.md | grep -ohE '[^/"]+\.(jpg|jpeg|png|webp|gif)' | sed 's/^/images\//'
} | sort -u > .used_images.tmp

find images/ -type f | while read img; do
  rel="images/$(basename "$img")"
  if ! grep -qF "$rel" .used_images.tmp; then
    echo "UNUSED: $img"
    rm "$img"  # Xóa file không dùng
  fi
done
rm .used_images.tmp
```

---

## Bước 5: Chuẩn Bị Frontmatter

> [!IMPORTANT]
> **Với dự án dạng dịch vụ (như hoangnamcantho.com):** Phần này yêu cầu frontmatter khác so với blog thuần. Cần có thêm các trường phù hợp với Content Schema trong Astro.

### Frontmatter chuẩn cho bài blog:

```yaml
---
title: "Tiêu đề bài viết"
date: 2025-01-15
categories:
  - "Thành lập công ty"
tags:
  - "doanh nghiệp"
  - "cần thơ"
coverImage: "/images/cover.jpg"
author: "Tên tác giả"
description: "Mô tả SEO cho bài viết"
---
```

### Chỉnh sửa frontmatter tự động (nếu cần):

```bash
# Ví dụ: Thêm trường description nếu chưa có
find output/posts/ -name "*.md" -exec grep -L "^description:" {} \;
```

---

## Checklist Phase 01

- [ ] Export XML từ WordPress
- [ ] Xử lý link ảnh thumbnail → ảnh gốc (nếu cần)
- [ ] Chuyển đổi XML → Markdown bằng wordpress-export-to-markdown
- [ ] Dọn dẹp link wp-content dư thừa
- [ ] Dọn dẹp shortcode caption và Gutenberg comments
- [ ] Kiểm tra và xử lý ảnh thiếu (MISSING)
- [ ] Xóa ảnh không sử dụng (UNUSED)
- [ ] Kiểm tra frontmatter chuẩn
- [ ] Xóa dòng trống thừa trong markdown (3+ dòng trống → 2 dòng)

---

> **Output của Phase 01:**
> - Thư mục `output/posts/` chứa file `.md` sạch sẽ
> - Thư mục `output/posts/images/` chứa ảnh đã dọn dẹp
> - Frontmatter đúng chuẩn, sẵn sàng import vào Astro

**Next Phase:** [Phase 02 - Khởi Tạo Dự Án Astro](./phase-02-astro-setup.md)
