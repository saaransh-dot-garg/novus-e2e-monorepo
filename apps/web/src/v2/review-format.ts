export function normalizeDraft(draft: string): string {
  return draft.trim().replace(/\s+/g, " ");
}
