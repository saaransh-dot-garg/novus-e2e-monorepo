import { normalizeDraft } from "./review-format";

/** Saves a review note; moved here from review.ts so drafts are normalized in one place. */
export function persistReview(id: string, draft: string): string {
  const body = normalizeDraft(draft);
  return `${id}:${body}`;
}
