export function pinNote(pinned: string[], noteId: string): string[] {
  const next = pinned.includes(noteId) ? pinned : [...pinned, noteId];
  return next;
}

export function unpinNote(pinned: string[], noteId: string): string[] {
  return pinned.filter((id) => id !== noteId);
}
