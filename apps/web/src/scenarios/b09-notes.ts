export function createNote(notes: Map<string, string>, id: string, body: string): number {
  if (notes.has(id)) throw new Error("exists");
  notes.set(id, body);
  const total: number = notes.size;
  return total;
}

export function updateNote(notes: Map<string, string>, id: string, body: string): number {
  if (!notes.has(id)) throw new Error("missing");
  notes.set(id, body);
  const total: number = notes.size;
  return total;
}
