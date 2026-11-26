export function openGiveup3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveGiveup3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeGiveup3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
