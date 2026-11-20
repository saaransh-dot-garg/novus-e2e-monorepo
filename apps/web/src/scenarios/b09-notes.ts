export function saveNote(notes: Map<string, string>, id: string, body: string): number {
  notes.set(id, body);
  const total = notes.size;
  return total;
}
