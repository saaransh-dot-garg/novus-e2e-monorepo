export function openGuard3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveGuard3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("guard3_note_saved", { id });
  return saved;
}

export function closeGuard3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
