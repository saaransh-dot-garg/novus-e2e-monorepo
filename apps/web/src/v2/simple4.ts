export function openSimple4(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveSimple4(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("simple4_note_saved", { id });
  return saved;
}

export function closeSimple4(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
