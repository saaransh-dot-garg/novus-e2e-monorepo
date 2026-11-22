export function downloadReport(reportId: string, lines: string[]): string {
  const rows = lines.filter((line) => line.trim().length > 0);
  window.pendo?.track("report_downloaded", { reportId, rows: rows.length });
  return `${reportId}:${rows.length}`;
}
