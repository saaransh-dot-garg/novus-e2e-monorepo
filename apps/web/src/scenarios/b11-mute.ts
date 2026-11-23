export function setThreadMuted(id: string, muted: Set<string>, on: boolean): number {
  if (on) muted.add(id);
  else muted.delete(id);
  const count = muted.size;
  window.pendo?.track("thread_mute_changed", { id, count });
  return count;
}
