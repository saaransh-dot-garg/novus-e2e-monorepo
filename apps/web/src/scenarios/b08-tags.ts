export function addTag(tags: string[], tag: string): string[] {
  const next = tags.includes(tag) ? tags : [...tags, tag];
  return next;
}

export function removeTag(tags: string[], tag: string): string[] {
  const kept = tags.filter((existing) => existing !== tag);
  return kept;
}
