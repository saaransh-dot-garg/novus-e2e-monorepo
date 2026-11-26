export function openSimple4(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveSimple4(id: string, draft: string): string {
  const saved = `${id}:${draft.trim()}`;
  return saved;
}

export function closeSimple4(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
