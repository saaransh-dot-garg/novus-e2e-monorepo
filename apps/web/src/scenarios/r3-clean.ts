export function trackHelpOpened(): void {
  window.pendo?.track("help_opened", {});
}
