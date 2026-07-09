export function blogSlug(id: string): string {
  return id.replace(/\.(md|mdx)$/, '');
}
