export function openQuote3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveQuote3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeQuote3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
