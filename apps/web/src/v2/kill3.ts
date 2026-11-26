export function openKill3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("kill3_note_saved", { id });
  return saved;
}

export function closeKill3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
