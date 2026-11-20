export function pinNote(pinned: string[], noteId: string): string[] {
  const next = pinned.includes(noteId) ? pinned : [noteId, ...pinned];
  return next;
}

export function unpinNote(pinned: string[], noteId: string): string[] {
  return pinned.filter((id) => id !== noteId);
}
