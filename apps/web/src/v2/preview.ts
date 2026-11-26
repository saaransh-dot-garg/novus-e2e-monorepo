export function openPreview(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function savePreview(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  return saved;
}

export function closePreview(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
