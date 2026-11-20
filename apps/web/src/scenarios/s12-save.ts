export interface Draft {
  id: string;
  body: string;
}

export function saveDraft(draft: Draft, store: Map<string, string>): number {
  if (draft.body.length > 0) {
    store.set(draft.id, draft.body);
    const size = store.size;
    return size;
  }
  store.delete(draft.id);
  return store.size;
}
