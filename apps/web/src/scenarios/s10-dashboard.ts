import { formatRow } from "./s04-format";
import { trackExport } from "./s04-track";

export function dashboardTitle(parts: string[]): string {
  trackExport("dashboard_title", parts.length);
  return formatRow(parts);
}
