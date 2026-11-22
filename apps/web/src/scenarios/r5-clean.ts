export function trackTourStarted(): void {
  window.pendo?.track("tour_started", {});
}
