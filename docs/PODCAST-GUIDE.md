# 🎙️ Hướng Dẫn Quản Lý Podcast Feed

## Tổng quan

Podcast feed của website được phục vụ tại: **`https://hoangnamcantho.com/feed/podcast/`**

Feed này đã được đăng ký trên các nền tảng:
- Apple Podcasts
- Spotify
- Amazon Music
- YouTube Music
- Deezer
- SoundCloud
- iHeart Radio
- Pocket Casts
- Spreaker
- Podbean
- Podcast Addict

## Cấu trúc files

```
src/
├── data/
│   ├── podcast-config.json    # Cấu hình podcast (title, description, cover...)
│   └── podcasts.json          # Danh sách tất cả episodes
└── pages/
    └── feed/
        └── podcast/
            └── index.ts       # Endpoint tạo RSS XML feed
```

## Thêm Podcast Mới (3 bước)

### Bước 1: Upload file MP3 lên R2

```bash
# Upload file MP3
rclone copy ten-file-podcast.mp3 hoangnamcantho-image:hoangnamcantho-image/podcast/episodes/

# Upload ảnh cover cho episode (nếu có)
rclone copy ten-anh-cover.jpeg hoangnamcantho-image:hoangnamcantho-image/podcast/images/
```

**Lưu ý tên file:** Đặt tên slug dễ đọc cho podcast mới. Ví dụ: `huong-dan-thanh-lap-cong-ty-2026.mp3`

### Bước 2: Thêm entry vào `src/data/podcasts.json`

Mở file `src/data/podcasts.json` và thêm entry MỚI vào **đầu mảng** (trước entry đầu tiên):

```json
[
  {
    "guid": "episode-[tạo-id-duy-nhất]",
    "title": "Tiêu đề podcast của bạn",
    "link": "https://hoangnamcantho.com/slug-bai-viet/",
    "pubDate": "Thu, 10 Apr 2026 10:00:00 +0000",
    "description": "Mô tả ngắn gọn về nội dung episode (dưới 4000 ký tự).",
    "audioUrl": "https://images.hoangnamcantho.com/podcast/episodes/ten-file-podcast.mp3",
    "audioSize": 2048000,
    "duration": "00:06:30",
    "imageUrl": "https://images.hoangnamcantho.com/podcast/images/ten-anh-cover.jpeg",
    "episodeType": "full"
  },
  // ... các episodes cũ giữ nguyên bên dưới
]
```

**Giải thích các trường:**

| Trường | Mô tả | Bắt buộc |
|--------|--------|----------|
| `guid` | ID duy nhất, không trùng. Format: `episode-[slug]` | ✅ |
| `title` | Tiêu đề episode | ✅ |
| `link` | URL bài viết tương ứng trên website | ✅ |
| `pubDate` | Ngày phát hành. Format: `Day, DD Mon YYYY HH:MM:SS +0000` | ✅ |
| `description` | Mô tả ngắn (hiển thị trên các app podcast) | ✅ |
| `audioUrl` | URL file MP3 trên R2 CDN | ✅ |
| `audioSize` | Kích thước file MP3 (bytes). Dùng `ls -la` để xem | ✅ |
| `duration` | Thời lượng. Format: `HH:MM:SS` | ✅ |
| `imageUrl` | Ảnh cover riêng cho episode (tối thiểu 1400x1400px) | ❌ |
| `episodeType` | `full` (bình thường), `trailer`, hoặc `bonus` | ✅ |

**Cách lấy audioSize:**
```bash
# Trên Linux/Mac
ls -la ten-file.mp3
# Cột thứ 5 là kích thước (bytes)

# Hoặc dùng stat
stat --printf="%s" ten-file.mp3
```

**Cách lấy duration:**
```bash
# Dùng ffprobe (cần cài ffmpeg)
ffprobe -v quiet -show_entries format=duration -of csv=p=0 ten-file.mp3
# Sau đó chuyển sang HH:MM:SS
```

### Bước 3: Commit & Deploy

```bash
git add src/data/podcasts.json
git commit -m "Thêm podcast: Tiêu đề episode"
git push
```

Sau khi deploy, các nền tảng podcast sẽ tự động fetch feed mới (thường trong 1-24 giờ).

## Sửa thông tin Podcast Channel

Mở file `src/data/podcast-config.json` để sửa:
- Tiêu đề podcast
- Mô tả
- Ảnh cover
- Email liên hệ
- Thể loại (category)

## Lưu ý quan trọng

> ⚠️ **KHÔNG sửa `guid`** của episode đã publish. Nếu sửa, các nền tảng podcast sẽ coi đó là episode mới.

> ⚠️ **KHÔNG xóa `podcastGuid`** trong podcast-config.json. Đây là ID duy nhất của podcast trên Podcast Index.

> ⚠️ **Audio files** phải là format MP3 (type: `audio/mpeg`). Đây là format được hỗ trợ rộng nhất.

> ⚠️ **Ảnh cover podcast** (channel-level) phải tối thiểu **1400x1400px**, tối đa 3000x3000px, format JPEG hoặc PNG.

## R2 Storage

Audio và images được lưu trên Cloudflare R2:
- **Bucket:** `hoangnamcantho-image`
- **CDN URL:** `https://images.hoangnamcantho.com/`
- **Structure:**
  ```
  podcast/
  ├── Hoang-nam-can-tho-podcast-final.png  (cover image)
  ├── episodes/                             (MP3 files)
  │   ├── podcast-16085-1774520497.mp3
  │   └── ...
  └── images/                               (episode cover images)
      ├── rui-ro-khong-cap-nhat-dia-chi-kinh-doanh-sau-sap-nhap-tinh.jpeg
      └── ...
  ```

## Kiểm tra feed

Sau khi deploy, kiểm tra feed tại:
- **Feed URL:** https://hoangnamcantho.com/feed/podcast/
- **Validate:** https://podba.se/validate/?url=https://hoangnamcantho.com/feed/podcast/
- **Cast Feed Validator:** https://castfeedvalidator.com/?url=https://hoangnamcantho.com/feed/podcast/
