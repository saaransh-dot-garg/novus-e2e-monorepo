import "../analytics/objectEvents";

export function trackExport(kind: string, rowCount: number): void {
  window.pendo?.track("report_exported", { kind, rowCount });
}
