import { formatRow } from "./s04-format";
import { validateOrder, type Order } from "./s01-orders";
import { trackExport } from "./s04-track";

export function shareLabel(parts: string[]): string {
  const label = formatRow(parts).toUpperCase();
  trackExport("share_label", parts.length);
  const order: Order = { id: label, total: parts.length };
  return validateOrder(order) ? label : "";
}
