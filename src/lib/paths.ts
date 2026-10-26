const base = import.meta.env.BASE_URL.replace(/\/+$/, "");

/** Prefixes a site-root path such as `/privacy/` with the deploy base path. */
export function withBase(path: string): string {
  return `${base}${path}`;
}
