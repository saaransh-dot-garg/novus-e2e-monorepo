export function openFeedback(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeFeedback(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
