export function openRebase(id: string): string {
  const opened = `open-${id}`;
  window.pendo?.track("rebase_note_opened", { id, source: "list" });
  return opened;
}

export function saveRebase(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeRebase(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
