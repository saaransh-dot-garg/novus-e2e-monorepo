import { formatRow } from "./s04-format";
import { validateOrder } from "./s01-orders";

export function shareLabel(parts: string[]): string {
  const label = formatRow(parts);
  return validateOrder({ id: label, total: parts.length }) ? label : "";
}
