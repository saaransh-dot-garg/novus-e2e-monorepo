export function syncNotes(items: string[], push: (item: string) => void): number {
  items.forEach((item) => push(item));
  const pushed = items.length;
  return pushed;
}
