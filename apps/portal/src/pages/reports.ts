export function downloadReport(reportId: string, lines: string[]): string {
  const rows = lines.filter((line) => line.trim().length > 0);
  return `${reportId}:${rows.length}`;
}
