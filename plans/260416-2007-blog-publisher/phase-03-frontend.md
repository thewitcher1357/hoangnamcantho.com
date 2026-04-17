# Phase 03: Frontend UI

Status: ⬜ Pending
Dependencies: Phase 02

## Objective

Tạo giao diện web form đẹp, hiện đại (dark theme), hỗ trợ paste markdown + drag-drop ảnh + preview + publish.

## Design Principles

- Dark theme (dễ nhìn khi làm việc ban đêm)
- Single page, không scroll quá nhiều
- Drag & Drop ảnh trực quan
- Live preview markdown
- Loading states + success/error feedback

## Implementation Steps

### 3.1 Layout & Structure (`public/index.html`)

1. [ ] Header: Logo + tên tool "📝 Blog Publisher"
2. [ ] Main area: 2 cột (Form bên trái | Preview bên phải)
3. [ ] Form: Textarea markdown + Image uploads + Metadata + Actions
4. [ ] Footer: Status bar (connection, last publish)

### 3.2 Styling (`public/style.css`)

5. [ ] Dark theme với accent color brand (#0056b3)
6. [ ] Responsive: mobile collapse thành 1 cột
7. [ ] Drag-drop zone styling (dashed border, hover effects)
8. [ ] Form inputs modern styling
9. [ ] Toast notifications (success/error)
10. [ ] Loading spinner animation

### 3.3 Client Logic (`public/app.js`)

11. [ ] Textarea paste handler + auto-parse (description, title extraction)
12. [ ] Drag & Drop image upload zones (cover + content)
13. [ ] Image preview thumbnails sau khi chọn file
14. [ ] Tags input: type + Enter để add tag chip, click X remove
15. [ ] Category dropdown (load từ API hoặc hardcode danh sách)
16. [ ] "Preview" button: gọi POST /api/preview → render HTML bên phải
17. [ ] "Publish" button: gọi POST /api/publish → show result
18. [ ] Auto-generate slug từ title (hiển thị real-time)
19. [ ] Form validation trước khi submit
20. [ ] Success screen: show file path + image URLs + copy buttons

## UI Mockup

```
┌──────────────────────────────────────────────────────────────┐
│  📝 Hoàng Nam Blog Publisher               [⚙️ Settings]    │
├───────────────────────────────┬──────────────────────────────┤
│                               │                              │
│  📄 Nội dung Markdown         │  👁️ Preview                  │
│  ┌─────────────────────────┐  │  ┌────────────────────────┐  │
│  │ Description: Chốt thuế  │  │  │ Title: Chốt Thuế...    │  │
│  │ chuyển trụ sở...        │  │  │ Slug: chot-thue-...    │  │
│  │                         │  │  │ ──────────────────────  │  │
│  │ # Chốt Thuế Chuyển...   │  │  │                        │  │
│  │                         │  │  │ [Rendered HTML preview] │  │
│  │ Nội dung bài viết...    │  │  │                        │  │
│  └─────────────────────────┘  │  └────────────────────────┘  │
│                               │                              │
│  📸 Ảnh Cover                 │  📋 Frontmatter              │
│  ┌─────────────────────────┐  │  ┌────────────────────────┐  │
│  │  ⬆ Kéo thả hoặc chọn   │  │  │ title: "..."           │  │
│  │     [thumbnail]         │  │  │ date: 2026-04-16       │  │
│  └─────────────────────────┘  │  │ description: "..."     │  │
│                               │  │ coverImage: "/images/." │  │
│  📸 Ảnh Nội dung              │  │ categories: [...]      │  │
│  ┌─────────────────────────┐  │  │ tags: [...]            │  │
│  │  ⬆ Kéo thả hoặc chọn   │  │  │ author: "Hoàng Nam"   │  │
│  │     [thumbnail]         │  │  └────────────────────────┘  │
│  └─────────────────────────┘  │                              │
│                               │                              │
│  Category: [tin-tuc-vung-tau▼]│                              │
│  Tags: [thuế][kê khai][+Add] │                              │
│                               │                              │
│  ☑ Auto git commit & push    │                              │
│                               │                              │
│  [👁 Preview]  [🚀 PUBLISH]   │                              │
├───────────────────────────────┴──────────────────────────────┤
│  ✅ Ready | Last: chot-thue-chuyen-tru-so... (2 phút trước) │
└──────────────────────────────────────────────────────────────┘
```

## Test Criteria

- [ ] Paste markdown → tự tách title để preview
- [ ] Drag-drop ảnh → hiện thumbnail
- [ ] Tags input → add/remove hoạt động
- [ ] Preview render đúng markdown
- [ ] Responsive trên mobile

---

Next Phase: → phase-04-integration.md
