export function openReview(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function closeReview(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
