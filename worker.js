export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // /feed/podcast/ (trailing slash) → serve the static podcast feed file
    if (url.pathname === "/feed/podcast/") {
      const asset = await env.ASSETS.fetch(
        new Request(new URL("/feed/podcast", url.origin), request),
      );
      if (asset.ok) {
        return new Response(asset.body, {
          status: 200,
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      }
    }

    // Everything else → serve from static assets as usual
    return env.ASSETS.fetch(request);
  },
};
