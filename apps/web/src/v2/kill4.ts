export function openKill4(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill4(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("kill4_note_saved", { id });
  return saved;
}

export function closeKill4(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
