export function setThreadMuted(id: string, muted: Set<string>, on: boolean): number {
  if (on) muted.add(id);
  else muted.delete(id);
  const count = muted.size;
  return count;
}
