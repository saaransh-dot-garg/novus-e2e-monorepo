export function openKill(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveKill(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  return saved;
}

export function closeKill(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
