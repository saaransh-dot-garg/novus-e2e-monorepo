import { formatRow } from "./s04-format";

export function exportSummary(rows: string[][]): string {
  return rows.map(formatRow).join("\n");
}
