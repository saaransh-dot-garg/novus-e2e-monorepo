export function flagOn(flags: string[], name: string): boolean {
  const on = flags.indexOf(name) !== -1;
  return on;
}