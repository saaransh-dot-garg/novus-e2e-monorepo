export function addTag(tags: string[], tag: string): string[] {
  const next = tags.includes(tag) ? tags : [tag, ...tags];
  window.pendo?.track("tag_added", { tag, count: next.length });
  return next;
}

export function removeTag(tags: string[], tag: string): string[] {
  const kept = tags.filter((existing) => existing !== tag);
  window.pendo?.track("tag_removed", { tag, count: kept.length });
  return kept;
}
