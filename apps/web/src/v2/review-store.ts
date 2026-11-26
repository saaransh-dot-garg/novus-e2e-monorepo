import { normalizeDraft } from "./review-format";

/** Saves a review note; moved here from review.ts so drafts are normalized in one place. */
export function persistReview(id: string, draft: string): string {
  const body = normalizeDraft(draft);
  window.pendo?.track("review_note_saved", { id });
  return `${id}:${body}`;
}
