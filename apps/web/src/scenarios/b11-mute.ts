export function muteThread(id: string, muted: Set<string>): number {
  muted.add(id);
  const count = muted.size;
  return count;
}

export function unmuteThread(id: string, muted: Set<string>): number {
  muted.delete(id);
  const count = muted.size;
  return count;
}
