export function openMoving3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveMoving3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("moving3_note_saved", { id });
  return saved;
}

export function closeMoving3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
