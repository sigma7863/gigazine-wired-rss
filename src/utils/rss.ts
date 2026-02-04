import Parser from 'rss-parser';

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  content?: string;
  contentSnippet?: string;
}

export interface RSSFeed {
  title: string;
  items: RSSItem[];
}

const parser = new Parser({
  customFields: {
    item: ['content', 'contentSnippet', 'endDate'],
    feed: ['lastBuildDate']
  },
  timeout: 10000
});

export async function fetchRSSFeed(url: string): Promise<RSSFeed> {
  try {
    console.log(`Fetching RSS from: ${url}`);
    const feed = await parser.parseURL(url);
    
    return {
      title: feed.title || 'Unknown Feed',
      items: feed.items.map(item => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        content: item.content || '',
        contentSnippet: item.contentSnippet || ''
      }))
    };
  } catch (error) {
    console.error(`Error fetching RSS from ${url}:`, error);
    console.error('Error details:', (error as Error).message);
    return {
      title: `Error - ${url}`,
      items: []
    };
  }
}

export const RSS_URLS = {
  gigazine: 'https://gigazine.net/news/rss_2.0/',
  wired: 'https://wired.jp/feed/rss',
  forbes: 'https://forbesjapan.com/RSS/newspicks.xml'
} as const;
