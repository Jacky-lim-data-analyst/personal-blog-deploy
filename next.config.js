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
 
//   env: {
//     NEXT_PUBLIC_BASE_PATH: isProd ? `/${repoName}` : '',
//   },
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig
