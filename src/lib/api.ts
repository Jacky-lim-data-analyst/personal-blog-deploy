import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// Determine basePath based on environment
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/personal-blog-deploy' : '';

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

// slug: markdown file names
// fetches and parses the content of single blog post given its slugs
export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // data: front matter, content: markdown body
  const { data, content } = matter(fileContents);

  // Replace ${basePath} placeholder with actual basePath
  const contentStr = content.replace(/\$\{basePath\}/g, basePath);
  
  // Also replace basePath in frontmatter fields
  const processedData = { ...data };
  if (processedData.coverImage) {
    processedData.coverImage = processedData.coverImage.replace(/\$\{basePath\}/g, basePath);
  }
  if (processedData.ogImage?.url) {
    processedData.ogImage.url = processedData.ogImage.url.replace(/\$\{basePath\}/g, basePath);
  }
  if (processedData.author?.picture) {
    processedData.author.picture = processedData.author.picture.replace(/\$\{basePath\}/g, basePath);
  }

  return { ...processedData, slug: realSlug, content: contentStr } as Post;

  // return { ...data, slug: realSlug, content } as Post;
}

// retrives all blog posts, sorted by date
export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

