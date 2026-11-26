export function openFeedback3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback3(id: string, draft: string): string {
  const note = draft.trim().replace(/\s+/g, " ");
  const saved = `${id}:${note}`;
  window.pendo?.track("feedback3_note_saved", { id, length: note.length });
  return saved;
}

export function closeFeedback3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
