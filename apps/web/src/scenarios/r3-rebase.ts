export function openNote(id: string): string {
  const opened = `open-${id}`;
  window.pendo?.track("note_opened", { id, source: "list" });
  return opened;
}

export function noteLabel(id: string, title: string): string {
  const label = `${title} (${id})`;
  return label.trim();
}

export function noteAge(createdAt: number, now: number): number {
  const age = Math.max(0, now - createdAt);
  return age;
}

export function closeNote(id: string): string {
  const closed = `closed-${id}`;
  window.pendo?.track("note_closed", { id });
  return closed;
}
