export interface Draft {
  id: string;
  body: string;
}

export function saveDraft(draft: Draft, store: Map<string, string>): number {
  store.set(draft.id, draft.body);
  const size = store.size;
  return size;
}
