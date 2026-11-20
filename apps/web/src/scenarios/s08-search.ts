export function search(notes: string[], term: string): string[] {
  const hits = notes.filter((note) => note.includes(term));
  return hits;
}
