# Phase 01: Plugin & Utility
Status: ⬜ Pending
Dependencies: Không

## Objective
Tạo remark plugin xử lý ảnh trong Markdown content và utility function xử lý ảnh frontmatter.

## Implementation Steps

### 1. Tạo remark plugin `src/plugins/remark-r2-images.mjs`
- [ ] Import `visit` từ `unist-util-visit`
- [ ] Import `R2_BASE` từ `@/config/site` → **LƯU Ý:** File `.mjs` không dùng alias `@/`, cần import bằng relative path
- [ ] Xử lý node `image` — markdown syntax `![alt](path)`
- [ ] Xử lý node `html` — inline `<img src="..." />`
- [ ] Chỉ thay thế path bắt đầu bằng `/images/`

```javascript
// src/plugins/remark-r2-images.mjs
import { visit } from "unist-util-visit";
import { R2_BASE } from "../config/site.ts";

export function remarkR2Images() {
  return (tree) => {
    visit(tree, "image", (node) => {
      if (node.url.startsWith("/images/")) {
        node.url = `${R2_BASE}${node.url}`;
      }
    });

    visit(tree, "html", (node) => {
      node.value = node.value.replace(
        /src="(\/images\/[^"]+)"/g,
        `src="${R2_BASE}$1"`
      );
    });
  };
}
```

### 2. Tạo utility `src/utils/r2.ts`
- [ ] Import `R2_BASE` từ `@/config/site`
- [ ] Hàm `toR2Url(path)` — chuyển relative path thành CDN URL
- [ ] Nếu path undefined → return undefined
- [ ] Nếu path đã là URL đầy đủ (http...) → giữ nguyên
- [ ] Nếu path bắt đầu `/images/` → thêm prefix CDN

```typescript
// src/utils/r2.ts
import { R2_BASE } from "@/config/site";

export function toR2Url(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${R2_BASE}${path}`;
}
```

## Files to Create
- `src/plugins/remark-r2-images.mjs` — Remark plugin
- `src/utils/r2.ts` — Utility function

## Test Criteria
- [ ] File tạo thành công không lỗi syntax
- [ ] Import paths đúng với cấu trúc project

## Notes
- `R2_BASE` đã được export tại `src/config/site.ts` dòng 83: `export const R2_BASE = "https://images.hoangnamcantho.com";`
- File plugin dùng `.mjs` vì remark plugin chạy trong Node context
- Import từ `.mjs` sang `.ts` cần có extension: `"../config/site.ts"`

---
Next Phase: [phase-02-config-components.md](./phase-02-config-components.md)
