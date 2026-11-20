export interface KioskUser {
  id: string;
  email: string;
  organizationId: string;
}

let currentUser: KioskUser | null = null;

export async function signIn(
  email: string,
  load: (email: string) => Promise<KioskUser>
): Promise<KioskUser> {
  const user = await load(email);
  currentUser = user;
  pendo.identify({
    visitor: { id: user.id, email: user.email },
    account: { id: user.organizationId },
  });
  window.pendo?.track("kiosk_signed_in", { organizationId: user.organizationId });
  return user;
}

export function signOut(): void {
  currentUser = null;
  pendo.clearSession();
}

export function getUser(): KioskUser | null {
  return currentUser;
}
