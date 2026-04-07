const BASE = import.meta.env.BASE_URL;

export function url(path: string): string {
  if (path.startsWith("http")) return path;
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
