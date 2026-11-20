export function flagOn(flags: string[], name: string): boolean {
  const on = flags.includes(name);
  return on;
}