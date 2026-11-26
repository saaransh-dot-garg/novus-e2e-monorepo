export function openReview(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveReview(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeReview(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
