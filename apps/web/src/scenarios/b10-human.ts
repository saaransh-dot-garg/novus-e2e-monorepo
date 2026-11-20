export function archive(ids: string[], id: string): string[] {
  const next = ids.filter((existing) => existing != id);
  return next;
}

export function restore(ids: string[], id: string): string[] {
  return [...ids, id];
}
