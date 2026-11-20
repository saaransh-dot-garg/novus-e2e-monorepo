import { getUser } from "./auth/session";

export function start(root: HTMLElement): void {
  const user = getUser();
  root.textContent = user ? `Signed in as ${user.email}` : "Sign in to continue";
}
