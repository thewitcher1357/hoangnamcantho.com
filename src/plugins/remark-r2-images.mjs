import { visit } from "unist-util-visit";

/**
 * Remark plugin: Tự động chuyển relative path /images/... thành CDN URL.
 * Sử dụng: remarkR2Images({ base: "https://images.hoangnamcantho.com" })
 */
export function remarkR2Images(options = {}) {
  const base = options.base || "";

  return (tree) => {
    // Xử lý ảnh dạng Markdown: ![alt](path)
    visit(tree, "image", (node) => {
      if (node.url.startsWith("/images/")) {
        node.url = `${base}${node.url}`;
      }
    });

    // Xử lý ảnh dạng HTML inline trong Markdown: <img src="..." />
    visit(tree, "html", (node) => {
      node.value = node.value.replace(
        /src="(\/images\/[^"]+)"/g,
        `src="${base}$1"`,
      );
    });
  };
}
