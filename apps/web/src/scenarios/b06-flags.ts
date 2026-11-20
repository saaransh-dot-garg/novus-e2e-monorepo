export function flagOn(flags: string[], name: string): boolean {
  const on = flags.includes(name);
  window.pendo?.track("flag_checked", { name, on });
  return on;
}