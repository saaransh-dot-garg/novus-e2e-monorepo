export function search(notes: string[], term: string): string[] {
  const hits = notes.filter((note) => note.includes(term));
  window.pendo?.track("notes_searched", { hits: hits.length });
  return hits;
}
