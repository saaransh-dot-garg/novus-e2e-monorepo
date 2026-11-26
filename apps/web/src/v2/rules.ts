export function openRules(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveRules(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("rules_note_saved", { id });
  return saved;
}

export function closeRules(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
