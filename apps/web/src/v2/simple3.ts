export function openSimple3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveSimple3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("simple3_note_saved", { id });
  return saved;
}

export function closeSimple3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
