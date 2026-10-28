/** Browser-side Pendo Track Event helper for the admin portal. */

declare global {
  interface Window {
    pendo?: {
      track: (eventName: string, metadata?: Record<string, string | boolean | number>) => void;
    };
  }
}

export function pendoTrack(
  eventName: string,
  metadata?: Record<string, string | boolean | number>,
): void {
  window.pendo?.track(eventName, metadata);
}
