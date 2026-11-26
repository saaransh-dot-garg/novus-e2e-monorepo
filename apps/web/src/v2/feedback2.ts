export function openFeedback2(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback2(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeFeedback2(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
