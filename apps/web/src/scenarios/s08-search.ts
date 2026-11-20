export function search(notes: string[], term: string): string[] {
  const hits = notes.filter((note) => note.toLowerCase().includes(term.toLowerCase()));
  return hits;
}
