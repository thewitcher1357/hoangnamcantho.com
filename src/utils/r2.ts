import { R2_BASE } from "@/config/site";

/**
 * Chuyển relative path thành Cloudflare R2 CDN URL.
 * - Nếu path undefined → return undefined
 * - Nếu path đã là URL đầy đủ (http...) → giữ nguyên
 * - Nếu path relative (/images/...) → thêm prefix CDN
 */
export function toR2Url(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${R2_BASE}${path}`;
}
