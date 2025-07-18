export interface BlogEntry {
  id: number;
  title: string;
  image: string;
  author: string;
  createdAt: number;
  teaser: string;
  content: string;
  slug: string;
  formatedDate: string;
}

type BlogEntries = BlogEntry[];
