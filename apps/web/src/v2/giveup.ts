export function openGiveup(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveGiveup(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("giveup_note_saved", { id });
  return saved;
}

export function closeGiveup(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
