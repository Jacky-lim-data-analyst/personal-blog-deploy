import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const config = require("../../next.config");
const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // 
  const contentStr = content.replaceAll(/\$\{basePath\}/gi, config.basePath);

  return { ...data, slug: realSlug, content: contentStr } as Post;

  // return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

// function transformImagePaths(content: string): string {
//   // Only transform in production
//   if (!basePath) {
//     return content;
//   }

//   // Transform markdown image syntax: ![alt](/path/to/image.jpg) or ![alt](path/to/image.jpg)
//   content = content.replace(/!\[([^\]]*)\]\((?!http)([^)]+)\)/g, (match, alt, path) => {
//     // Only add basePath if the path doesn't already have it and isn't an external URL
//     const trimmedPath = path.trim();
//     const newPath = trimmedPath.startsWith('/') ? basePath + trimmedPath : basePath + '/' + trimmedPath;
//     return `![${alt}](${newPath})`;
//   });

//   // Transform HTML img tags: <img src="/path/to/image.jpg" /> or <img src="path/to/image.jpg" />
//   content = content.replace(/<img\s+([^>]*?)src=["'](?!http)([^"']+)["']([^>]*?)>/gi, (match, before, src, after) => {
//     const trimmedSrc = src.trim();
//     const newSrc = trimmedSrc.startsWith('/') ? basePath + trimmedSrc : basePath + '/' + trimmedSrc;
//     return `<img ${before}src="${newSrc}"${after}>`;
//   });

//   return content;
// }
