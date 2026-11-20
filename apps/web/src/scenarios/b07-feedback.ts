export function submitFeedback(scores: number[], score: number): number {
  const next = [...scores, score];
  return next.length;
}
