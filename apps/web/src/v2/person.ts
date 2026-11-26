export function openPerson(id: string): string {
  const opened = `open-${id}`;
  return opened;
}

export function savePerson(id: string, draft: string): string {
  const saved = `${id}:${draft.trim().replace(/\s+/g, " ")}`;
  return saved;
}

export function closePerson(id: string): string {
  const closed = `closed-${id}`;
  return closed;
}
