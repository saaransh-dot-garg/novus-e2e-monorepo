export function archive(ids: string[], id: string): string[] {
  const next = ids.filter((existing) => existing !== id);
  window.pendo?.track("note_archived", { id });
  return next;
}

export function restore(ids: string[], id: string): string[] {
  return [...ids, id];
}
