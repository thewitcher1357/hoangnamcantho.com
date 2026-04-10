import type { APIRoute } from "astro";
import podcastConfig from "@/data/podcast-config.json";
import episodes from "@/data/podcasts.json";

// Helper to escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Build a single <item> block for an episode
function buildItem(ep: (typeof episodes)[number]): string {
  const desc = escapeXml(ep.description);
  const title = escapeXml(ep.title);
  const cdata = `<![CDATA[${ep.description}\n\nRead more: <a href="https://hoangnamcantho.com">Hoàng Nam Cần Thơ</a>]]>`;

  return `    <item>
      <title>${title}</title>
      <link>${escapeXml(ep.link)}</link>
      <guid isPermaLink="false">${escapeXml(ep.guid)}</guid>
      <pubDate>${ep.pubDate}</pubDate>
      <description>${cdata}</description>
      <content:encoded>${cdata}</content:encoded>
      <enclosure url="${escapeXml(ep.audioUrl)}" length="${ep.audioSize}" type="audio/mpeg" />
      <media:content url="${escapeXml(ep.audioUrl)}" type="audio/mpeg" medium="audio" isDefault="true" fileSize="${ep.audioSize}" />
      <media:description type="plain">${desc}\n\nRead more: Hoàng Nam Cần Thơ</media:description>
      <itunes:summary>${desc}\n\nRead more: Hoàng Nam Cần Thơ</itunes:summary>
      <itunes:subtitle>${desc}</itunes:subtitle>${ep.imageUrl ? `\n      <itunes:image href="${escapeXml(ep.imageUrl)}" />` : ""}
      <itunes:duration>${ep.duration}</itunes:duration>
      <itunes:author>${escapeXml(podcastConfig.author)}</itunes:author>
      <itunes:explicit>${podcastConfig.explicit ? "true" : "false"}</itunes:explicit>
      <itunes:episodeType>${ep.episodeType}</itunes:episodeType>
    </item>`;
}

export const GET: APIRoute = async () => {
  const cfg = podcastConfig;
  const now = new Date().toUTCString();
  const itemsXml = episodes.map(buildItem).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:podcast="https://podcastindex.org/namespace/1.0">
  <channel>
    <title>${escapeXml(cfg.title)}</title>
    <link>${escapeXml(cfg.link)}</link>
    <description>${escapeXml(cfg.description)}</description>
    <language>${cfg.language}</language>
    <copyright>${escapeXml(cfg.copyright)}</copyright>
    <pubDate>${episodes.length > 0 ? episodes[0].pubDate : now}</pubDate>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>Astro Podcast Feed 1.0</generator>
    <atom:link href="${escapeXml(cfg.feedUrl)}" rel="self" type="application/rss+xml" />
    <itunes:author>${escapeXml(cfg.author)}</itunes:author>
    <itunes:summary>${escapeXml(cfg.description)}</itunes:summary>
    <itunes:owner>
      <itunes:name>${escapeXml(cfg.ownerName)}</itunes:name>
      <itunes:email>${escapeXml(cfg.ownerEmail)}</itunes:email>
    </itunes:owner>
    <itunes:type>${cfg.type}</itunes:type>
    <itunes:explicit>${cfg.explicit ? "true" : "false"}</itunes:explicit>
    <itunes:category text="${escapeXml(cfg.category)}" />
    <itunes:image href="${escapeXml(cfg.coverImageUrl)}" />
    <image>
      <url>${escapeXml(cfg.coverImageUrl)}</url>
      <title>${escapeXml(cfg.title)}</title>
      <link>${escapeXml(cfg.link)}</link>
    </image>
    <podcast:medium>podcast</podcast:medium>
    <podcast:locked owner="${escapeXml(cfg.ownerEmail)}">no</podcast:locked>
    <podcast:guid>${escapeXml(cfg.podcastGuid)}</podcast:guid>
${itemsXml}
  </channel>
</rss>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
