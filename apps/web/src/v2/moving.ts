export function openMoving(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveMoving(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeMoving(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
