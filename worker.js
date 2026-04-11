export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // /feed/podcast/ or /feed/podcast → serve the static podcast feed file
    if (
      url.pathname === "/feed/podcast/" ||
      url.pathname === "/feed/podcast"
    ) {
      // Support HEAD requests (required by Apple Podcasts)
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
          "X-Robots-Tag": "noindex",
        };

        // Handle OPTIONS preflight
        if (request.method === "OPTIONS") {
          return new Response(null, { status: 204, headers });
        }

        // Handle HEAD (return headers only, no body)
        if (request.method === "HEAD") {
          return new Response(null, { status: 200, headers });
        }

        return new Response(asset.body, { status: 200, headers });
      }
    }

    // Everything else → serve from static assets as usual
    return env.ASSETS.fetch(request);
  },
};
