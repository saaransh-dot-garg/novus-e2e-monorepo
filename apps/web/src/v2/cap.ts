export function openCap(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveCap(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("cap_note_saved", { id });
  return saved;
}

export function closeCap(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
