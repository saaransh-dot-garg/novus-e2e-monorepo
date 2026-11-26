export function openMultia(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveMultia(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("multia_note_saved", { id });
  return saved;
}

export function closeMultia(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
