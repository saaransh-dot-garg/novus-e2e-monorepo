export function openQuote3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveQuote3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  window.pendo?.track("quote3_note_saved", { id });
  return saved;
}

export function closeQuote3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
