---
title: "Deploying a Static Next.js Site to GitHub Pages"
excerpt: "This guide walks through setting up a static-exported Next.js blog and deploying it to GitHub Pages using GitHub Actions. It's based on Vercel's official Next.js portfolio template and assumes you are comfortable with Git, Node.js and basic CI concepts."
coverImage: "${basePath}/assets/blog/deploy-nextjs-github-pages/cover1.jpg"
date: "2025-12-27T01:57:39.622Z"
author:
  name: Jacky Lim
  picture: "${basePath}/assets/blog/authors/jacky.jpeg"
ogImage:
  url: "${basePath}/assets/blog/deploy-nextjs-github-pages/cover1.jpg"
---

This guide walks through setting up a static-exported Next.js blog and deploying it to GitHub Pages using GitHub Actions[1]. It's based on Vercel's official **Next.js** portfolio template and assumes you are comfortable with *Git, Node.js and basic CI concepts*.

---

# 1. Clone the Next.js Portfolio Starter
Start with Vercel's Next.js portfolio template:

👉 https://vercel.com/templates/blog/blog-starter-kit

Clone it locally and create a Next.js app:
```bash
npx create-next-app --example blog-starter blog-starter-app
cd blog-starter-app
```
This template already uses the App Router and Markdown-based posts, which works well for static exports.

---

# 2. (Optional) Customize Components
You can customize the look and layout by editing components under:
```plain
src/app/_components/
```
This step is optional and does not affect GitHub Pages compatibility.

---

# 3. Enable static export in next.js
GitHub Pages only serves static files, so you must enable static export.

Create a `next.config.js` file in the project root:
```javascript
/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production'
const repoName = "personal-blog-deploy"

const nextConfig = {
  basePath: isProd ? `/${repoName}` : '',
  output: 'export',
  images: {
    unoptimized: true
  },
}
 
module.exports = nextConfig
```
Key points:
* `output: 'export'` enables static HTML export.
* `basePath` is required for GitHub Pages subpath.
* `images.unoptimized = true` is mandatory (Next Image Optimization doesn't work on GitHub Pages)

Reference: 👉 https://nextjs.org/docs/pages/guides/static-exports

---

# 4. Build the site locally
Run a production build:
```
pnpm run build
```
If everything is configured correctly, Next.js will generate static files under:
```
out/
```
This folder is what GitHub Pages will ultimately serve.

---

# 5. Create a GitHub repo
1. Create a new GitHub repository (e.g. my-nextjs-blog)
2. Add the remote and push your code:
```
git remote add origin https://github.com/<username>/<repo>.git
git branch -M main
git push -u origin main
```

# 6. Enable GitHub Pages with GitHub actions
Go to your repository:
```
Settings -> Pages -> Build and deployment
```
* Source: GitHub Actions
* Click *Configure* under the Next.js workflow

GitHub will generate a workflow file automatically.

---

# 7. Update the GitHub actions workflow
After configuration, a new file will appear:
```
.github/workflows/nextjs.yml
```
Put it locally:
```
git pull
```
Edit the workflow on this reference: 👉 https://gist.github.com/officialrajdeepsingh/3714f17122ada14e399b8e43c19384b1

## Important notes
* Pay attention to action versions (`actions/setup-node`, `actions/configure-pages`, etc)
* Use Node versions compatible with your local setup.
* Ensure `pnpm` is installed in the workflow
* Make sure the output directory is set to `out`.

After editing:
```
git add .github/workflows/nextjs.yml
git commit -m "Fix GitHub Pages Next.js workflow"
git push
```

---

# 8. Wait for deployment
Go to:
```
Actions -> Deploy Next.js to GitHub Pages
```
Wait for the workflow to complete. Once successful, your site will be available at:
```
https://<username>.github.io/<repo-name>
```

---

# 9. Fix Image and Asset Paths
This is where most people get stuck. GitHub Pages does not deploy at root (`/`).

## a. Detect deployment environment
Use `NODE_ENV` or a custom env variable to distinguish between local and production builds.
```typescript
const isProd = process.env.NODE_ENV === 'production';
```

## b. Set Base Path Correctly
```typescript
const basePath = isProd ? '/<repo-name>' : '';
```

## c. Fix Markdown Image paths
In Markdown files, never use absolute paths like:
```
![image](/assets/blog/<directory-name>/demo.png)
```
Instead, prefix with repo name:
```
![image](${basePath}/assets/blog/<directory-name>/demo.png)
```

## d. Update `api.ts` to replace `$basePath` with repo name
```typescript
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
}
```
This ensures paths resolve correctly both locally and on GitHub Pages.

---

# 10. Create or edit new blog posts
1. Rename the Markdown File: Change the name of the file in the _posts directory.
  * Example: mv _posts/old-name.md _posts/new-name.md

2. Rename the Asset Directory: Change the name of the corresponding image directory in public/assets/blog.
  * Example: mv public/assets/blog/old-name public/assets/blog/new-name

3. Update Image Paths in the Markdown File: Open the newly renamed markdown file (_posts/new-name.md) and find all references to the old image path. Update them to point to the new path.
  * Example: Search for /assets/blog/old-name/ and replace it with ${basePath}/assets/blog/new-name/.

---

# Final Thoughts
Deploying Next.js to GitHub Pages is **not plug-and-play**:
* Static export is mandatory
* `basePath` is non-negotiable
* Image handling requires manual fixes
* GitHub Actions must be tweaked carefully

Once set up, though, you get a **free, fast, CDN-backed static blog** with zero vendor lock-in.

If you want fewer headaches, Vercel is easier. If you want control and free hosting, GitHub Pages gets the job done.

---

[1]: GitHub Actions is a built-in automation tool on GitHub that lets you create custom workflows to automate tasks in your software projects. It is especially popular for CI/CD (Continuous Integration and Continuous Deployment), which means automatically building, testing and deploying your code whenever changes happen.