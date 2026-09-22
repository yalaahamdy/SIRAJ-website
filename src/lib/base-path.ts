/**
 * Base path support for GitHub Pages project sites.
 * Set NEXT_PUBLIC_BASE_PATH="/<repo-name>" at build time when the site is
 * served from https://<user>.github.io/<repo-name> — it is inlined by the
 * Next.js build, so it works in both server and client components.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function bp(path: string): string {
  return `${BASE_PATH}${path}`;
}
