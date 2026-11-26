export function openKill2(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill2(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("kill2_note_saved", { id });
  return saved;
}

export function closeKill2(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
