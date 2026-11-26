export function openOff(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveOff(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeOff(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
