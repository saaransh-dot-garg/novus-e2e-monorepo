export function openSigned(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveSigned(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("signed_note_saved", { id });
  return saved;
}

export function closeSigned(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
