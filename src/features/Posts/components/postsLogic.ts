import { createClient } from 'microcms-js-sdk';

export type Blog = {
  title: string;
  id:string;
  category: {
    createdAt: string;
    id: string;
    name: string;
    publishedAt: string;
    revisedAt: string;
    updatedAt: string;
  };
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  content:string;
};

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};


if (!import.meta.env.VITE_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!import.meta.env.VITE_API_KEY) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

export const client = createClient({
    serviceDomain: import.meta.env.VITE_SERVICE_DOMAIN,
    apiKey: import.meta.env.VITE_API_KEY,
});

// ブログ一覧を取得
// title→ポストの題名を取得するため、eyecatch→ポストのメイン画像を取得するため、category→ポストのカテゴリや作成日付を取得するため
export const getBlogs = async () => {
    const blogs = await client.get<BlogResponse>({
    endpoint: "blogs",
    queries: {
      limit: 30,
      fields: 'title,eyecatch,category,id',
    }
    });
    return blogs;
}

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
    const blog = await client.get<Blog>({
        endpoint: "blogs",
        contentId: contentId,
    });
    return blog;
};


