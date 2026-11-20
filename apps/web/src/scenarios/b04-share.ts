import { formatRow } from "./s04-format";
import { validateOrder, type Order } from "./s01-orders";

export function shareLabel(parts: string[]): string {
  const label = formatRow(parts).toUpperCase();
  const order: Order = { id: label, total: parts.length };
  return validateOrder(order) ? label : "";
}
