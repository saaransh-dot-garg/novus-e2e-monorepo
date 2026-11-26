export function openFeedback(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("feedback_note_saved", { id });
  return saved;
}

export function closeFeedback(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
