export function saveNote(notes: Map<string, string>, id: string, body: string): number {
  notes.set(id, body);
  const total = notes.size;
  window.pendo?.track("note_saved", { noteId: id, total });
  return total;
}
