import { formatRow } from "./s04-format";
import { validateOrder } from "./s01-orders";
import { trackExport } from "./s04-track";
import { addItem } from "./s02-cart";

export function dashboardTitle(parts: string[]): string {
  return formatRow(parts);
}

export function dashboardReady(): boolean {
  trackExport("dashboard_ready", addItem([], { sku: "demo", quantity: 1 }).length);
  return validateOrder({ id: "demo", total: 1 });
}
