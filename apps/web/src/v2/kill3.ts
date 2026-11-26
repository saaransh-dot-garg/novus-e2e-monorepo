export function openKill3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeKill3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
