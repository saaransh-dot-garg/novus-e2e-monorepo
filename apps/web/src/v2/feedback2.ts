export function openFeedback2(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback2(id: string, draft: string): string {
  const note = draft.trim().replace(/\s+/g, " ");
  const saved = `${id}:${note}`;
  window.pendo?.track("feedback2_note_saved", { id, length: note.length });
  return saved;
}

export function closeFeedback2(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
