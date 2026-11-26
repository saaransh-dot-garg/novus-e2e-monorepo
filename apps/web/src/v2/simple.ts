export function openSimple(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveSimple(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("simple_note_saved", { id });
  return saved;
}

export function closeSimple(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
