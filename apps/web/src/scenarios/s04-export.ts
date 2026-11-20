import { formatRow } from "./s04-format";
import { trackExport } from "./s04-track";

export function exportSummary(rows: string[][]): string {
  return rows.map(formatRow).join("\n");
}

export function exportLegacyCsv(rows: string[][]): string {
  const csv = rows.map((row) => row.join(",")).join("\n");
  trackExport("legacy_csv", rows.length);
  return csv;
}
