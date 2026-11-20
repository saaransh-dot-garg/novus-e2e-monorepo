export async function syncNotes(
  items: string[],
  push: (item: string) => Promise<void>
): Promise<number> {
  let pushed = 0;
  for (const item of items) {
    try {
      await push(item);
      pushed += 1;
    } catch {
      break;
    }
  }
  return pushed;
}
