export function openFeedback3(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function saveFeedback3(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  window.pendo?.track("feedback3_note_saved", { id });
  return saved;
}

export function closeFeedback3(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
