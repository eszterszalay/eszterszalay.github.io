export function projectMediaUrl(projectId: string, path: string) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const asset = path.split('/').map(encodeURIComponent).join('/');
  return `${base}/media/${encodeURIComponent(projectId)}/${asset}`;
}
