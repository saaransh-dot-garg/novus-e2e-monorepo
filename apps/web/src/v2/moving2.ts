export function openMoving2(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveMoving2(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("moving2_note_saved", { id });
  return saved;
}

export function closeMoving2(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
