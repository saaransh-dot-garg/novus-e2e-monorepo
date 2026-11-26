export function trackHelpOpened(): void {
  window.pendo?.track("v2_help_opened", {});
}
