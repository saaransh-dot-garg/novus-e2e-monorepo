export function changePlan(current: string, plan: string): string {
  const changed = current !== plan;
  return changed ? plan : current;
}
