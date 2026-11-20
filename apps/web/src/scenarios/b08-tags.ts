export function addTag(tags: string[], tag: string): string[] {
  const next = tags.includes(tag) ? tags : [tag, ...tags];
  return next;
}

export function removeTag(tags: string[], tag: string): string[] {
  const kept = tags.filter((existing) => existing !== tag);
  return kept;
}
