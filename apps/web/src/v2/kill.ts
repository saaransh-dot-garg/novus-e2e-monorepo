export function openKill(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("kill_note_saved", { id });
  return saved;
}

export function closeKill(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
